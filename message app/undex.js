const {hash} = window.location
const message = atob(hash.replace('#', ''))
if(message){
    document.querySelector('#form-message').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')

    document.querySelector('h1').innerHTML = message
}
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    document.querySelector('#form-message').classList.add('hide')
    document.querySelector('#form-link').classList.remove('hide')

    const input = document.querySelector('#message')

    const encrypt = btoa(input.value)

    const link = document.querySelector('#link-input')
    link.value = `${window.location}#${encrypt}`
    link.select()
})