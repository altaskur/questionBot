
export function showMessage (question: boolean, channel: string, author: string, message: string): void {
  let app = document.querySelector('#chat')
  // channel = channel.replaceAll('_', ' ')
  console.log(channel)
  if (channel === '#niv3k_el_pato') {
    channel = '🦆'
  }

  let formatMessage = `${channel} >> ${author}: ${message}`
  if (question) {
    app = document.querySelector('#question')
    //  formatMessage = `${channel} >> ${author}: ${message}`
    formatMessage = `${author}: ${message}`

    console.log(formatMessage)
  }

  const appItem = document.createElement('div')
  appItem.classList.add('app-item', 'fadeIn')
  appItem.textContent = formatMessage
  appItem.addEventListener('click', (event) => {
    event.preventDefault()
    clickForRemove(event)
  })

  app?.append(appItem)
}

export function clearChatMessage (): void {
  const chat = document.querySelector('#chat') as HTMLDivElement

  const chatElements: number = chat.childElementCount

  if (chatElements >= 5) {
    const lastElement = chat.querySelectorAll('.app-item')[0]
    lastElement.classList.remove('fadeIn')
    lastElement.classList.add('fadeOut')

    setTimeout(() => {
      lastElement.remove()
    }, 2100)
  }
}

export function clearQuestionMessage (): void {
  const question = document.querySelector('#question') as HTMLDivElement

  const questionElements: number = question.childElementCount

  if (questionElements >= 5) {
    const lastElement = question.querySelectorAll('.app-item')[0]
    lastElement.classList.remove('fadeIn')
    lastElement.classList.add('fadeOut')

    setTimeout(() => {
      lastElement.remove()
    }, 1950)
  }
}

function clickForRemove (event: any): void {
  const question = document.querySelector('#question') as HTMLDivElement
  let lastElement = question.querySelectorAll('.app-item')[0]
  lastElement = event.target
  lastElement.classList.remove('fadeIn')
  lastElement.classList.add('fadeOut')

  setTimeout(() => {
    lastElement.remove()
  }, 2100)
}
