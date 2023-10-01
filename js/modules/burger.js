const burger = () => {
    const burgerButton = document.querySelector('#burgerButton')
    const burgerMenu = document.querySelector('.burger')
    const handleMenu = () => {
        burgerMenu.classList.toggle('burger-active')
    }
    burgerButton.addEventListener('click', handleMenu)
}

export default burger