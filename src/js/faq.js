const modalForm = document.querySelector('[data-modal-form]');
const openForm = document.querySelector('.answer__button');
const closeForm = document.querySelector('[data-modal-form-close]');

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', faqActive);

  function faqActive(e) {
    console.log(e.target.nodeName);
    if (e.target.nodeName !== 'BUTTON') faq.classList.toggle('active');
  }

  function toggleModal() {
    modalForm.classList.toggle('is-shown');
  }
});
