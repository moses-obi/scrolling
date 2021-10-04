const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight /4 * 3.5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }

    })
}
checkBoxes();