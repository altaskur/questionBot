
export function showMessage (question: boolean, channel: string, author: string, message: string): void {
  console.log(channel)
  let app = document.querySelector('#chat')

  if (question) {
    app = document.querySelector('#question')
  }

  console.log(app)

  const appItem = document.createElement('div')
  appItem.classList.add('app-item', 'fadeIn')
  appItem.textContent = channel + '>> ' + author + ': ' + message

  app?.append(appItem)
}
