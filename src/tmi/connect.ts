import tmi from 'tmi.js'
import { showMessage } from './questionBot/functions'

export const channelName = ['altaskur']

export const client = new tmi.Client({
  channels: channelName
})
let counter = 0;

export function addCounter() {
  counter++;
  return counter
}

client.on('connected', () => {
  console.log(`Conectado a ${channelName[0]}`)
})
client.on('message', (channel, tags, message) => {
  const displayName: string = tags.username ?? ''

  if (message.startsWith('!pregunta')) {
    message = message.replace('!pregunta', '').trim()
    showMessage(channel, displayName, message)
  }
})
