import { Collection } from './models/Collection.ts'
import { API_URL } from './config.js'
;(async () => {
  const collection = new Collection(API_URL)
  collection.on('change', () => console.log('changed'))
  await collection.fetch()
  console.log(collection.models)
})()
