import { addCounter } from "../connect"

export function showMessage (channel: string, author: string, message: string): void {
  const messageFormatted = formatMessage(author, message)
  addMessage(messageFormatted)
}

function clickForRemove (event: any): void {
  const question = document.querySelector('article')!
  let lastElement = question.querySelectorAll('p')[0]
  lastElement = event.target
  lastElement.classList.remove('fadeIn')
  lastElement.classList.add('fadeOut')

  setTimeout(() => {
    lastElement.remove()
  }, 2200)
}

function formatMessage (author: string, message: string): string {
  return `[${addCounter()}] ${author}: ${message}`
}

function addMessage (message: string): void {
  console.log(message)
  const chatDiv = document.querySelector<HTMLDivElement>('article')!

  const messageDiv = document.createElement("p")
  messageDiv.style.transform = "translateX(100vw)";
  messageDiv.classList.add('fadeIn')
  messageDiv.textContent = message
  messageDiv.addEventListener('click',clickForRemove)
  chatDiv?.append(messageDiv)
}


