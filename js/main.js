const menuBody = document.querySelector('.menu__body');
const menuIcon = document.querySelector('.menu__icon');
const body = document.body;

if (menuBody && menuIcon) {
    menuIcon.addEventListener('click', function(){
        menuBody.classList.toggle('burger-active');
        menuIcon.classList.toggle('burger-active');
    })
    document.addEventListener('click', function(e){
        let target = e.target;
        let itsMenu = target == menuBody || menuBody.contains(target);
        let itsMenuIcon = target == menuIcon || menuIcon.contains(target);
        let menuIsActive = menuBody.classList.contains('burger-active');

        if (!itsMenu && !itsMenuIcon && menuIsActive) {
            menuBody.classList.remove('burger-active');
            menuIcon.classList.remove('burger-active');
        }
    })
    window.addEventListener('click', function() {
        const windowWidth = Math.max(document.documentElement.clientWidth);

        if (windowWidth <= 920 && menuBody.classList.contains('burger-active')) {
            body.classList.add('burger-body-lock')
        } else {
            body.classList.remove('burger-body-lock')
        }

    })

}
const parentOriginal = document.querySelector('.header__items');
const parent = document.querySelector('.menu__body');
const item = document.querySelector('.header__feedback');

window.addEventListener('resize', function() {
    const viewportWidth = Math.max(document.documentElement.clientWidth);
    if (viewportWidth <= 920) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[1]);
            item.classList.add('done');
        }
    } else {
        if (item.classList.contains('done')) {
            parentOriginal.insertBefore(item, parentOriginal.children[0]);
            item.classList.remove('done');
        }
    }
})

