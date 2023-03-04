"use strict"

const link = document.querySelectorAll('.nav-link');
const bar = document.querySelectorAll('.line');

function remove(){
    link.forEach(item => {
       item.classList.remove('active');
        
    })
}

function addMenu(){
    link.forEach(item =>{
        item.addEventListener('click' ,()=>{
            remove();
            item.classList.add('active');
        })
    })
}
addMenu();


function openBar(){
    bar.forEach(item=>{
        item.classList.toggle('bar');
    })
}
