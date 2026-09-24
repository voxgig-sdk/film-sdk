

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"brand":{"a":true,"h":"Brand","n":"brand","r":true,"sh":"Brand name of the film manufacturer","t":"`$STRING`","key$":"brand","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the film","t":"`$STRING`","key$":"description","index$":1},"format120":{"a":true,"h":"Format120","n":"format120","r":false,"sh":"Indicates if the film is available in 120 format","t":"`$BOOLEAN`","key$":"format120","index$":2},"format35mm":{"a":true,"h":"Format35mm","n":"format35mm","r":false,"sh":"Indicates if the film is available in 35mm format","t":"`$BOOLEAN`","key$":"format35mm","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the film","t":"`$STRING`","key$":"id","index$":4},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to an image of the film","t":"`$STRING`","key$":"image","index$":5},"iso":{"a":true,"h":"Iso","n":"iso","r":true,"sh":"ISO rating of the film","t":"`$INTEGER`","key$":"iso","index$":6},"keyFeatures":{"a":true,"h":"Key Features","n":"keyFeatures","r":false,"sh":"List of key features and characteristics of the film","t":"`$ARRAY`","key$":"keyFeatures","index$":7},"model":{"a":true,"h":"Model","n":"model","r":true,"sh":"Film model name","t":"`$STRING`","key$":"model","index$":8},"processingType":{"a":true,"h":"Processing Type","n":"processingType","r":false,"sh":"Type of chemical processing required for the film","t":"`$STRING`","key$":"processingType","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Specifies whether the film is color or black and white","t":"`$STRING`","key$":"type","index$":10}},"id":{"field":"id","name":"id"},"name":"film","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/films","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/films","q":{},"r":{},"s":[{"lit":"api"},{"lit":"films"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/films/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/films/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"films"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"film","name__orig":"film","Name":"Film","name_":"film","name-":"film","NAME":"FILM","index$":0}, {"active":true,"entity":"film","key$":"BasicFilmFlow","kind":"basic","name":"BasicFilmFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"film_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"film_ref01","srcdatavar":"film_ref01_data","suffix":"_dt0"},"m":{"id":"film01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-film_ref01"}}],"index$":1}]}, 'Film', {"GET /api/films":{"protocol":"http","operationId":"getAllFilms","responses":{"200":{"description":"Successful response with list of films","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the film","key$":"id"},"brand":{"type":"string","description":"Brand name of the film manufacturer","example":"Kodak","key$":"brand"},"model":{"type":"string","description":"Film model name","example":"Portra 400","key$":"model"},"iso":{"type":"integer","description":"ISO rating of the film","example":400,"key$":"iso"},"format35mm":{"type":"boolean","description":"Indicates if the film is available in 35mm format","key$":"format35mm"},"format120":{"type":"boolean","description":"Indicates if the film is available in 120 format","key$":"format120"},"type":{"type":"string","enum":["color","black_and_white"],"description":"Specifies whether the film is color or black and white","key$":"type"},"processingType":{"type":"string","description":"Type of chemical processing required for the film","example":"C-41","key$":"processingType"},"image":{"type":"string","format":"uri","description":"URL to an image of the film","key$":"image"},"description":{"type":"string","description":"Detailed description of the film","key$":"description"},"keyFeatures":{"type":"array","items":{"type":"string"},"description":"List of key features and characteristics of the film","key$":"keyFeatures"}},"required":["id","brand","model","iso","type"],"x-ref":"#/components/schemas/Film","index$":0}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified"},"GET /api/films/{id}":{"protocol":"http","operationId":"getFilmById","responses":{"200":{"description":"Successful response with film details","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the film","key$":"id"},"brand":{"type":"string","description":"Brand name of the film manufacturer","example":"Kodak","key$":"brand"},"model":{"type":"string","description":"Film model name","example":"Portra 400","key$":"model"},"iso":{"type":"integer","description":"ISO rating of the film","example":400,"key$":"iso"},"format35mm":{"type":"boolean","description":"Indicates if the film is available in 35mm format","key$":"format35mm"},"format120":{"type":"boolean","description":"Indicates if the film is available in 120 format","key$":"format120"},"type":{"type":"string","enum":["color","black_and_white"],"description":"Specifies whether the film is color or black and white","key$":"type"},"processingType":{"type":"string","description":"Type of chemical processing required for the film","example":"C-41","key$":"processingType"},"image":{"type":"string","format":"uri","description":"URL to an image of the film","key$":"image"},"description":{"type":"string","description":"Detailed description of the film","key$":"description"},"keyFeatures":{"type":"array","items":{"type":"string"},"description":"List of key features and characteristics of the film","key$":"keyFeatures"}},"required":["id","brand","model","iso","type"],"x-ref":"#/components/schemas/Film","index$":0}}}},"404":{"description":"Film not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"id","in":"path","required":true,"description":"Unique identifier of the film","schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
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
  
