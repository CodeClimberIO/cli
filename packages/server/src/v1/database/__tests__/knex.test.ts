import { knex, SQL_LITE_TEST_FILE } from '../knex'

describe('knex', () => {
  it('Should connect successfully', async () => {
    await knex.raw('SELECT 1').catch((e) => {
      expect(e).toBeUndefined()
    })
  })

  it('Should be using test path', () => {
    expect(knex.client.config.connection.filename).toEqual(SQL_LITE_TEST_FILE)
  })
})

afterAll((done) => {
  knex.destroy()
  done()
})
