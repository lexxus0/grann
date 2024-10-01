const galleryListBtn = document.querySelector('[data-gallery]');

document.addEventListener('click', onClicBtnGallery);

function onClicBtnGallery(e) {
	changesСlass(e);
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
