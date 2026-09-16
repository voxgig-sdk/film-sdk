

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FilmSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('FilmEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FILM_TEST_LIVE=TRUE.
  afterEach(liveDelay('FILM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FilmSDK.test()
    const ent = testsdk.Film()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FILM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'film.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"brand","req":true,"short":"Brand name of the film manufacturer","type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"short":"Detailed description of the film","type":"`$STRING`","index$":1},{"active":true,"name":"format120","req":false,"short":"Indicates if the film is available in 120 format","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"format35mm","req":false,"short":"Indicates if the film is available in 35mm format","type":"`$BOOLEAN`","index$":3},{"active":true,"name":"id","req":true,"short":"Unique identifier for the film","type":"`$STRING`","index$":4},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to an image of the film","type":"`$STRING`","index$":5},{"active":true,"name":"iso","req":true,"short":"ISO rating of the film","type":"`$INTEGER`","index$":6},{"active":true,"name":"keyFeatures","req":false,"short":"List of key features and characteristics of the film","type":"`$ARRAY`","index$":7},{"active":true,"name":"model","req":true,"short":"Film model name","type":"`$STRING`","index$":8},{"active":true,"name":"processingType","req":false,"short":"Type of chemical processing required for the film","type":"`$STRING`","index$":9},{"active":true,"name":"type","req":true,"short":"Specifies whether the film is color or black and white","type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"film","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/films","json":"{\"operationId\":\"getAllFilms\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"brand\":{\"description\":\"Brand name of the film manufacturer\",\"example\":\"Kodak\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the film\",\"type\":\"string\"},\"format120\":{\"description\":\"Indicates if the film is available in 120 format\",\"type\":\"boolean\"},\"format35mm\":{\"description\":\"Indicates if the film is available in 35mm format\",\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier for the film\",\"type\":\"string\"},\"image\":{\"description\":\"URL to an image of the film\",\"format\":\"uri\",\"type\":\"string\"},\"iso\":{\"description\":\"ISO rating of the film\",\"example\":400,\"type\":\"integer\"},\"keyFeatures\":{\"description\":\"List of key features and characteristics of the film\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"model\":{\"description\":\"Film model name\",\"example\":\"Portra 400\",\"type\":\"string\"},\"processingType\":{\"description\":\"Type of chemical processing required for the film\",\"example\":\"C-41\",\"type\":\"string\"},\"type\":{\"description\":\"Specifies whether the film is color or black and white\",\"enum\":[\"color\",\"black_and_white\"],\"type\":\"string\"}},\"required\":[\"id\",\"brand\",\"model\",\"iso\",\"type\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of films\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/films","segments":[{"lit":"api"},{"lit":"films"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/films/{id}","json":"{\"operationId\":\"getFilmById\",\"parameters\":[{\"description\":\"Unique identifier of the film\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"brand\":{\"description\":\"Brand name of the film manufacturer\",\"example\":\"Kodak\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the film\",\"type\":\"string\"},\"format120\":{\"description\":\"Indicates if the film is available in 120 format\",\"type\":\"boolean\"},\"format35mm\":{\"description\":\"Indicates if the film is available in 35mm format\",\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier for the film\",\"type\":\"string\"},\"image\":{\"description\":\"URL to an image of the film\",\"format\":\"uri\",\"type\":\"string\"},\"iso\":{\"description\":\"ISO rating of the film\",\"example\":400,\"type\":\"integer\"},\"keyFeatures\":{\"description\":\"List of key features and characteristics of the film\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"model\":{\"description\":\"Film model name\",\"example\":\"Portra 400\",\"type\":\"string\"},\"processingType\":{\"description\":\"Type of chemical processing required for the film\",\"example\":\"C-41\",\"type\":\"string\"},\"type\":{\"description\":\"Specifies whether the film is color or black and white\",\"enum\":[\"color\",\"black_and_white\"],\"type\":\"string\"}},\"required\":[\"id\",\"brand\",\"model\",\"iso\",\"type\"],\"type\":\"object\"}}},\"description\":\"Successful response with film details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Film not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/films/{id}","segments":[{"lit":"api"},{"lit":"films"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"film","name__orig":"film","Name":"Film","name_":"film","name-":"film","NAME":"FILM","index$":0}, {"active":true,"entity":"film","key$":"BasicFilmFlow","kind":"basic","name":"BasicFilmFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"film_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"film_ref01","srcdatavar":"film_ref01_data","suffix":"_dt0"},"match":{"id":"film01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-film_ref01"}}],"index$":1}]}, 'Film')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let film_ref01_data = Object.values(setup.data.existing.film)[0] as any

    // LIST
    const film_ref01_ent = client.Film()
    const film_ref01_match: any = {}

    const film_ref01_list = (await film_ref01_ent.list(film_ref01_match)).map((e: any) => e.data())


    // LOAD
    const film_ref01_match_dt0: any = {}
    film_ref01_match_dt0.id = film_ref01_data.id
    const film_ref01_data_dt0 = (await film_ref01_ent.load(film_ref01_match_dt0)).data()
    assert(film_ref01_data_dt0.id === film_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/film/FilmTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FilmSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['film01','film02','film03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FILM_TEST_FILM_ENTID': idmap,
    'FILM_TEST_LIVE': 'FALSE',
    'FILM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FILM_TEST_FILM_ENTID']

  const live = 'TRUE' === env.FILM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FILM_TEST_FILM_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FilmSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FILM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
