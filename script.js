function giveText(id) {
    let text = document.querySelector(`#${id}`)
    let texts = document.querySelectorAll('.text')

    texts.forEach(text => text.classList.remove('active'))
    text.classList.toggle('active')
}