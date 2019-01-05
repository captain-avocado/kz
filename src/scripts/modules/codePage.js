let inputElements = document.getElementsByClassName('code__input-item');
let blockItems = document.getElementsByClassName('code__blocks-item');
let deleteButton = document.getElementById('delete-button');

let code = '';

for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('click', (e) => {
        let attr = e.currentTarget.getAttribute('data-attribute');
        if (attr !== 'button') {
            code += e.currentTarget.getAttribute('data-attribute');
        }
        console.log(code.length);
        for (let j = code.length; j < 4; j++) {
            blockItems[j].classList.remove('active__block-item');
        }
        blockItems[code.length].classList.add('active__block-item');
    });
}

deleteButton.addEventListener('click', () => {
    code = code.slice(0, code.length - 1);
    console.log(code);
});

