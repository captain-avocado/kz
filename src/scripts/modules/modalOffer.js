import MicroModal from 'micromodal';

if (document.body.classList.contains('transfers__body-payment')) {
  console.log('efef22')

  document.querySelector('.payment__doc').addEventListener('click', (e) => {
    e.preventDefault();
  });

  MicroModal.init();
}
