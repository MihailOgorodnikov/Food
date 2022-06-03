function modal () {
    // modal 

    const  modalTrigger = document.querySelectorAll('[data-modal]'),
           modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal(){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
    }

    // если тыкаешь на подложку то модальное окно закрывется
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '' ) {
            closeModal();
        }
    });
    // закрывается модальное окно на кнопку event.code хороший сайт
    document.addEventListener('keydown', (e) => {
        if (e.code === "KeyQ" && modal.classList.contains('show')) {
            closeModal();
        }
    });

   const modalTimerId = setInterval(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;