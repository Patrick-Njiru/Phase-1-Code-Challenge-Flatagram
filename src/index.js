document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('card-image'),
    h2 = document.getElementById('card-title')
    
    fetch("http://localhost:3000/images/1")
    .then(response => response.json())
    .then(obj => {
        image.removeAttribute('src')
        image.setAttribute('src', `${obj.image}`)
        h2.innerText = `${obj.title}`
    })
})