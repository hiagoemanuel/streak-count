import { MongoClient } from '../../../database/mongodb'

describe('Create User', () => {
  beforeAll(async () => await MongoClient.connect())
  afterAll(async () => await MongoClient.client.close())

  it('expect 1 + 1 to be 2', async () => {
    expect(1 + 1).toBe(2)
  })
})