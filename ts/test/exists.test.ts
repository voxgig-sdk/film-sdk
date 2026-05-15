
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FilmSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FilmSDK.test()
    equal(null !== testsdk, true)
  })

})
