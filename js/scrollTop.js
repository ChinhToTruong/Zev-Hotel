const toTop = document.querySelector('#to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        toTop.style.display = 'flex';
    } else {
        toTop.style.display = 'none';
    }
})

function upTop () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

toTop.addEventListener('click', () => upTop());

window.scroll({ 
    behavior: "smooth",
});
