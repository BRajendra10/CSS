const box = document.querySelectorAll(".box");
let eliment = document.querySelector('.one');
let class_name = 'one';

box.forEach((el, i) => {
    el.addEventListener("click", () => {
        eliment.classList.remove(class_name);

        if(i === 0){
            el.classList.add('one');
            class_name = 'one';
        }else if(i === 1){
            el.classList.add('two');
            class_name = 'two';
        }else if(i === 2){
            el.classList.add('three');
            class_name = 'three';
        }else if(i === 3){
            el.classList.add('four');
            class_name = 'four';
        }else if(i === 4){
            el.classList.add('five');
            class_name = 'five';
        }

        eliment = el;
    })
})