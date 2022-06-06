const menuBody = document.querySelector('.menu__body');
const menuIcon = document.querySelector('.menu__icon');
const body = document.body;

function menuActive () {
    menuBody.classList.toggle('burger-active');
    menuIcon.classList.toggle('burger-active');
    body.classList.toggle('burger-body-lock');
}
function menuDisActive () {
    menuBody.classList.remove('burger-active');
    menuIcon.classList.remove('burger-active');
    body.classList.remove('burger-body-lock');
}


if (menuBody && menuIcon) {
    menuIcon.addEventListener('click', function(){
        menuActive ();

        if (menuIcon.classList.contains('burger-active')) {
            body.style.paddingRight = '17px';
        } else {
            body.style.paddingRight = '0px';
        }
    });

    document.addEventListener('click', function(e){
        let target = e.target;
        let itsMenu = target == menuBody || menuBody.contains(target);
        let itsMenuIcon = target == menuIcon || menuIcon.contains(target);
        let menuIsActive = menuBody.classList.contains('burger-active');

        if (!itsMenu && !itsMenuIcon && menuIsActive) {
            menuDisActive ();
            body.style.paddingRight = '0px';
        }
    })


}
const parentOriginal = document.querySelector('.header__items');
const parent = document.querySelector('.menu__body');
const item = document.querySelector('.header__feedback');

function itemActivitiesForward() {
    parent.insertBefore(item, parent.children[1]);
    item.classList.add('done');
}
function itemActivitiesBack() {
    parentOriginal.insertBefore(item, parentOriginal.children[0]);
    item.classList.remove('done');
}

document.addEventListener('DOMContentLoaded', function(){
    const widthLoadedPage = document.documentElement.clientWidth;

    if (widthLoadedPage <= 920) {
        itemActivitiesForward();
    }
})

window.addEventListener('resize', function() {
    const viewportWidth = Math.max(document.documentElement.clientWidth);

    if (viewportWidth <= 920) {
        if (!item.classList.contains('done')) {
            itemActivitiesForward();
        }
    } else {
        if (item.classList.contains('done')) {
            itemActivitiesBack();
        }
    }
})

