const galleryListBtn = document.querySelector('[data-gallery]');

document.addEventListener('click', onClicBtnGallery);

function onClicBtnGallery(e) {
    changesСlass(e);

    if (e.target.nodeName === 'BUTTON' && e.target.dataset.menu) {
        const menuValue = e.target.dataset.menu;

        localStorage.setItem('selectedMenu', menuValue);
        localStorage.setItem('catalogOpened', 'true');
    }
}

function changesСlass(e) {
    const activeButton = document.querySelector('.gallery__btn--active');

    if (!e.target.closest('button') && activeButton) {
        activeButton.classList.remove('gallery__btn--active');
        return;
    }

    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    if (e.target.classList.contains('gallery__btn--active')) {
        e.target.classList.remove('gallery__btn--active');
    } else {
        if (activeButton) {
            activeButton.classList.remove('gallery__btn--active');
        }
        e.target.classList.add('gallery__btn--active');
    }
}


