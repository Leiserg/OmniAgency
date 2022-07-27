const togglePopup = () => {
    const popUpOverlay = document.querySelector('.pop-up'),
        popUpBtn = document.querySelectorAll('.mobil-header__burger-btn'),
        popUpBtnClose = document.querySelector('.pop-up__close-btn');

    popUpBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popUpOverlay.style.display = 'block';
        });      
    });

    popUpBtnClose.addEventListener('click', () => {
        popUpOverlay.style.display = 'none';
    });

    popUpOverlay.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('.popup-close')){
            popUpOverlay.style.display = 'none';
        } else {
            target = target.closest('.modal-callback');
            console.log(target);
            if (!target){
                popUpOverlay.style.display = 'none';
            } 
        }
    });
};

togglePopup();