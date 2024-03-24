import { HttpStatus } from '../../controllers/protocols'
import { CreateUserController } from '../../controllers/users/create'
import { DeleteUserController } from '../../controllers/users/delete'
import { UpdateUserController } from '../../controllers/users/update'
import { MongoClient } from '../../database/mongodb'
import { MongoCreateUserRepository } from '../../repositories/users/create/mongodb'
import { MongoDeleteUserRepository } from '../../repositories/users/delete/mongodb'
import { MongoUpdateUserRepository } from '../../repositories/users/update/mongodb'
import { CreateUserParamsType, UpdateUserParamsType } from '../../schemas/user'

describe('User', () => {
  beforeAll(async () => await MongoClient.connect('isTest'))
  afterAll(async () => {
    await MongoClient.collection.drop()
    await MongoClient.client.close()
  })

  it('should create a user', async () => {
    const createUserParams: CreateUserParamsType = {
      name: 'create user',
      email: 'createuser@email.com',
      password: 'createuser123'
    }

    const createUserRepository = new MongoCreateUserRepository()
    const createUserController = new CreateUserController(createUserRepository)
    const response = await createUserController.handler({ body: createUserParams })

    expect(response.statusCode).toBe(HttpStatus.CREATED)
    expect(response.body?.name).toEqual('create user')
  })

  it('should update a user', async () => {
    const createUserParams: CreateUserParamsType = {
      name: 'update user',
      email: 'updateuser@email.com',
      password: 'updateuser123'
    }

    const updateUserParams: UpdateUserParamsType = {
      name: 'updated',
      email: 'updated@email.com',
      password: 'updated123'
    }

    const createUserRepository = new MongoCreateUserRepository()
    const createUserController = new CreateUserController(createUserRepository)
    const userCreated = await createUserController.handler({ body: createUserParams })

    const updateUserRepository = new MongoUpdateUserRepository()
    const updateUserController = new UpdateUserController(updateUserRepository)
    const response = await updateUserController.handler({
      body: updateUserParams,
      params: { id: userCreated.body?.id ?? '' }
    })

    expect(response.statusCode).toBe(HttpStatus.OK)
    expect(response.body?.name).toEqual('updated')
  })

  it('should delete a user', async () => {
    const createUserParams: CreateUserParamsType = {
      name: 'delete',
      email: 'delete@email.com',
      password: 'delete123'
    }

    const createUserRepository = new MongoCreateUserRepository()
    const createUserController = new CreateUserController(createUserRepository)
    const userCreated = await createUserController.handler({ body: createUserParams })

    const deleteUserRepository = new MongoDeleteUserRepository()
    const deleteUserController = new DeleteUserController(deleteUserRepository)
    const response = await deleteUserController.handler({ params: { id: userCreated.body?.id ?? ''} })

    expect(response.statusCode).toBe(HttpStatus.OK)
    expect(response.body?.name).toEqual('delete')
  })
})
