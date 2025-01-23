//let handrails = document.getElementById('id-handrails');

let txthome = document.getElementById('txthome');
let rails = document.getElementById('railshome');
let train = document.getElementById('trainhome');
let towers = document.getElementById('towershome');
let sea = document.getElementById('seascape');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    document.querySelector('.home-train').style.backgroundPosition = `calc(${value * 3.5 - 2150}px) bottom`;
    //document.querySelector('.home-seascape').style.backgroundPosition = `calc(${value * -2}px) bottom`;
    
})

//Script Notes

/*
    train.src = '/resources/home/train.png';
    train.style.width = 'auto';
    train.style.display = 'block';
    train.style.height = '380px';
    train.style.marginLeft = '0%';
    train.style.position = 'absolute';
    train.style.bottom = '0';

    train.style.left = value * 2 + 'px';
    
    txthome.style.marginBottom= value * -1.5 + 'px';
    railshome.style.left = value * -0.5 + 'px';
    
    train.style.bottom = value * -0.25 + 'px';

    towers.style.bottom = value * -0.7 + 'px';
    sea.style.bottom = value * -0.5 + 'px';

    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    
    handrails.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
*/