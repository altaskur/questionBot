import tmi from 'tmi.js'
import { showMessage } from './functions'

export const channelName = ['altaskur']

export const client = new tmi.Client({
  channels: channelName
})
client.on('connected', () => {
  console.log(`Conectado a ${channelName[0]}`)
})
client.on('message', (channel, tags, message) => {
  if (message.startsWith('!pregunta')) {
    message = message.replace('!pregunta', '').trim()
    tags['display-name'] = tags['display-name'] === undefined ? 'undefined' : tags['display-name']
    showMessage(true, channel, tags['display-name'], message)
  }
})
