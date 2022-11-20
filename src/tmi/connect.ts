import tmi from 'tmi.js'
import { showMessage } from './functions'

export const channelName = ['manucoding', 'altaskur']

export const client = new tmi.Client({
  channels: channelName
})

client.on('message', (channel, tags, message) => {
  const displayName = tags['display-name'] ?? ''

  if (message.startsWith('!pregunta')) {
    showMessage(true, channel, displayName, message)
    return
  }

  if (tags['message-type'] !== 'action' || channel === 'altaskur') {
    showMessage(false, channel, displayName, message)
  }
})
