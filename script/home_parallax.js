//let handrails = document.getElementById('id-handrails');

//let hill1 = document.getElementById('hill1');
//let hill2 = document.getElementById('hill2');
//let hill3 = document.getElementById('hill3');
//let hill4 = document.getElementById('hill4');
//let hill5 = document.getElementById('hill5');

let txthome = document.getElementById('txthome');
let railshome = document.getElementById('railshome');
let train = document.getElementById('trainhome');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    txthome.style.marginBottom= value * -1.5 + 'px';

    //railshome.style.left = value * -0.5 + 'px';
    train.style.left = value * 5 + 'px';

    //leaf.style.top = value * -1.5 + 'px';
    //leaf.style.left = value * 1.5 + 'px';
    
    //handrails.style.left = value * 1.5 + 'px';
    //hill4.style.left = value * -1.5 + 'px';
    //hill1.style.top = value * 1 + 'px';


})