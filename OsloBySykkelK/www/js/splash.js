let intro = document.querySelector('.intro');
let logo = document.querySelector('logo-header');
let logoSpan = document.querySelectorAll('.logo');

export function splash() {

    window.addEventListener('DOMContentLoaded', ()=>{

        setTimeout(() => {
    
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (index + 1) * 400)
            })
    
            setTimeout(() => {
                logoSpan.forEach((span, index)=> {
    
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade')
                    }, (index + 1) * 50)
                })
            },3300)
    
            setTimeout(() => {
                intro.style.top = '-100vh';
            }, 2800)
        })
    })
};
