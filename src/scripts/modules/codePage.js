let inputElements = document.getElementsByClassName('code__input-item');
let blockItems = document.getElementsByClassName('code__blocks-item');
let deleteButton = document.getElementById('delete-button');

let code = '';

for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('click', (e) => {
        let attr = e.currentTarget.getAttribute('data-attribute');
        if (attr !== 'button' && code.length < 4) {
            code += e.currentTarget.getAttribute('data-attribute');
        }
        blockItems[code.length - 1].classList.add('active__block-item');
        if (code == '1111') {
            document.location.href='./mainpage.html';
        }
    });
}

deleteButton.addEventListener('click', () => {
    code = code.slice(0, code.length - 1);
    for (let j = code.length; j < 4; j++) {
        blockItems[j].classList.remove('active__block-item');
    }
});

