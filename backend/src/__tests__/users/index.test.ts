import { HttpStatus } from '../../controllers/protocols'
import { CreateUserController } from '../../controllers/users/create'
import { MongoClient } from '../../database/mongodb'
import { MongoCreateUserRepository } from '../../repositories/users/create/mongodb'
import { CreateUserParamsType } from '../../schemas/user'

describe('User', () => {
  beforeAll(async () => await MongoClient.connect('isTest'))
  afterAll(async () => {
    await MongoClient.collection.drop()
    await MongoClient.client.close()
  })

  it('should create an user', async () => {
    const req: CreateUserParamsType = {
      name: 'testing',
      email: 'test@email.com',
      password: 'testing123'
    }

    const createUserRepository = new MongoCreateUserRepository()
    const createUserController = new CreateUserController(createUserRepository)
    const response = await createUserController.handler({ body: req })

    expect(response.statusCode).toBe(HttpStatus.CREATED)
    expect(response.body?.name).toEqual('testing')
  })
})
