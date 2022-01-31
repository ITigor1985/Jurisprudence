const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', faqActive);
  function faqActive(e) {
    console.log(e.target);
    if (e.target !== this) faq.classList.toggle('active');
  }
});
