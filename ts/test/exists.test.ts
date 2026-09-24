
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FilmSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FilmSDK.test()
    equal(testsdk instanceof FilmSDK, true,
      'FilmSDK.test() must return a client synchronously')
  })

})
