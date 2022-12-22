// //  first method
let wrp1 = document.getElementById('wrapper').querySelector('div:nth-child(3) span').textContent = 'Kachèt revele1';

//  //second method
let wrp2 = document.getElementsByClassName('div-wrapper')[0].getElementsByTagName('span').item(1).innerHTML = '<span>Kachèt revele02</span>';
// // //Another way 
let wrp02 = document.getElementsByTagName('span')[1].innerHTML = '<span>Kachèt revele2</span>';

// // // third method
let wrp3 = document.querySelectorAll('div-wrapper,span')[1].innerText = 'Kachèt revele3'

const { log } = console;

log(wrp1);
log(wrp2);
log(wrp02);
log(wrp3);
