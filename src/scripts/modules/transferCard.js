import VMasker from 'vanilla-masker';

if (document.body.classList.contains('transfers__body-card')) {
  const maskInput = document.querySelector('#card-num');
  VMasker(maskInput).maskPattern('9999 9999 9999 9999');
  
  var elementsArray = document.querySelectorAll('.pay-method_pay-way');
    elementsArray.forEach((elem) => {
      elem.addEventListener('click', () => {
          if (!elem.classList.contains('checked')) {
            const prevCheckedItem = document.querySelector('.checked');
            prevCheckedItem.classList.remove('checked');
            elem.classList.add('checked');
          }
      });
    });
}



