document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('card-image'),
    h2 = document.getElementById('card-title'),
    form = document.getElementById('comment-form'),
    comments = document.getElementById('comments-list')
    
    fetch("http://localhost:3000/images/1")
    .then(response => response.json())
    .then(obj => {
        image.removeAttribute('src')
        image.setAttribute('src', `${obj.image}`)
        h2.innerText = `${obj.title}`
    })
    .catch(error => error.message)

    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(object => {
        comments.innerHTML = 
        `
        <li> ${object[0].content}</li>
        <li> ${object[1].content}</li>       
        <li> ${object[2].content}</li>             
        `
     })
    .catch(error => error.message)
})