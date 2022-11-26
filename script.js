const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');

const mobileMenuBar = document.querySelector('.mobile-menu-bar');

burgerMenu.addEventListener('click',()=>{
    mobileMenuBar.style.width = '45%';
    burgerMenu.style.display = 'none';
})

closeMenu.addEventListener('click',()=>{
    mobileMenuBar.style.width = '0%';
    burgerMenu.style.display = 'block';
})
// Making sure all the content on the web page loaded before excuting any function
// window.addEventListener('DOMContentLoaded',setup)
// function setup(){
//     const options = {
//         rootMargin:'0px 0px -200px 0px'
//     }
//     const  observer = new IntersectionObserver((entries,observer) =>{
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 entry.target.classList.add('show');
//                 observer.unobserve(entry.target);
//             }else{
//                 return;
//             }
//         })
//     },options);
//     const elements = document.querySelectorAll('.hide');
//     elements.forEach(element =>{
//         observer.observe(element);
//     })
// }