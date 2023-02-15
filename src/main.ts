import { client } from './tmi/connect'

(async () => {
  await client.connect()
})()
