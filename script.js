const mobileMenu = document.querySelector('.mobile-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

  mobileMenu.addEventListener('click',()=>{
    if(mobileNav.className === 'mobile-nav'){
        mobileNav.classList.add('mobile-nav-active');
    }else{
        mobileNav.classList.add('mobile-nav');
    }
    });