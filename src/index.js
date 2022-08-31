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
    
    form.addEventListener('submit', e => {

        e.preventDefault()
        const newComment = document.getElementById('comment')

        addComment(newComment.value)
        removeComment(newli)
        form.reset()
    })

    function addComment(string) {
        if (string !== '') {
            newli = document.createElement('li')
            comments.appendChild(newli)
            newli.innerText = string
        }
    } 
    function removeComment(element) {
        element.addEventListener('click',() => {
            element.remove()
        })
    } 
    increaseLikes()
})

function increaseLikes() {
    const like = document.getElementById("like-count")
    let totalLikes = 0
    document.getElementById("like-button").addEventListener("click", () => {
      totalLikes += 1;
      return like.textContent = `${totalLikes} likes`
    })
}