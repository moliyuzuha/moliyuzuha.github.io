// アドレスバーを除いたvhを取得
const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// SMOOTH SCROLL (on the same page)
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefLink = scrollLink.getAttribute("href");
    const targetContent = document.getElementById(hrefLink.replace("#", ""));
    const rectTop = targetContent.getBoundingClientRect().top;
    const positionY = window.pageYOffset;
    const target = rectTop + positionY;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
});

// BACK TO TOP LINK
window.onscroll = scrollAppearing;
function scrollAppearing() {
  const windowHeight = window.innerHeight;
  const userScroll = window.scrollY;
  const backToTopLink = document.getElementById('back-to-top');
  
  if (userScroll >= windowHeight / 2) {
    backToTopLink.classList.add('back-to-top-appear');
  } else {
    backToTopLink.classList.remove('back-to-top-appear');
  }
}

// COPY E-MAIL ADDRESS
const emailAddress = 'moliyuzuha@gmail.com';
const copyButtonEmail = document.getElementById('copy-button-email');
if(copyButtonEmail != null) {
  copyButtonEmail.addEventListener('click', function() {
    navigator.clipboard.writeText(emailAddress);
    document.getElementById('copy-success').classList.add('appear');
    window.setTimeout(function(){
      document.getElementById('copy-success').classList.remove('appear');
    }, 2000);
  });
}

// mobile navigation
const navButton = document.getElementById('hamburger-menu');
navButton.addEventListener('click', mobileNav);
function mobileNav() {
  const navList = document.getElementById('header-nav');
  const menuBar = document.querySelectorAll('#menu-bar');
  for (let i = 0; i < menuBar.length; i++) {
    menuBar[i].classList.toggle('active');
    navList.classList.toggle('active');
  };
}