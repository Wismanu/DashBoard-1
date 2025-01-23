const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click',()=>{
    sideMenu.classList.add('open');
    sideMenu.classList.remove('close');
})

closeBtn.addEventListener('click',()=>{
    sideMenu.classList.add('close');
    sideMenu.classList.remove('open');
})


themeToggler.addEventListener('click',()=>{
    
    document.body.classList.toggle('dark-theme-variables')


    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})