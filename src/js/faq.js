(() => {
  const modalForm = document.querySelector('[data-modal-form]');
  const openForm = document.querySelector('.header-mid__button');
  const closeForm = document.querySelector('[data-modal-form-close]');

  openForm.addEventListener('click', openModal);
  function openModal() {
    modalForm.classList.add('is-shown');
  }
  closeForm.addEventListener('click', closeModal);

  function closeModal() {
    modalForm.classList.remove('is-shown');
  }

  const faqs = document.querySelectorAll('.faq');
  faqs.forEach(faq => {
    faq.addEventListener('click', faqActive);

    function faqActive(e) {
      if (e.target.nodeName !== 'BUTTON') {
        faq.classList.toggle('active');
      } else {
        toggleModal();
      }
    }

    function toggleModal() {
      modalForm.classList.toggle('is-shown');
    }
  });
})();
