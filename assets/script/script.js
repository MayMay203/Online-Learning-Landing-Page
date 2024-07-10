const header = document.querySelector('.navbar')
const navbar = header.querySelectorAll('a')
console.log(navbar)
navbar.forEach(a => {
    a.addEventListener('click', (e) => {
        navbar.forEach(a => a.parentNode.classList.remove('active'))
        e.target.parentNode.classList.add('active')
    })
})