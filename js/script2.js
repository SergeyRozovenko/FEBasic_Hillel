const button = document.querySelector ('.service_btn')
const popup = document.querySelector ('.popup_wrapper')
const close = document.querySelector ('span.close')


button.addEventListener('click', clickHandler)
popup.addEventListener('click', closeHandler)

function clickHandler() {
    popup.classList.add('active');
}

function closeHandler(event) {
    if (event.target === popup || event.target === close) {
    popup.classList.remove('active');
}
}