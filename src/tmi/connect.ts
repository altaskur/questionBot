import tmi from 'tmi.js'

export const channelName = ['manucoding', 'altaskur']

export const client = new tmi.Client({
  channels: channelName
})

client.on('message', (channel, tags, message) => {
  if (message.startsWith('!pregunta')) {
    message = message.replace('!pregunta', '').trim()
    console.log(channel, ' ', tags['display-name'], ' ', message)
  }
})
