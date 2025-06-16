lucide.createIcons();

const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      burgerMenu.classList.remove('active');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust offset to make the active link change slightly before the section reaches the very top
        if (pageYOffset >= sectionTop - 150 && pageYOffset < sectionTop + sectionHeight - 150) {
            currentSection = section.getAttribute('id');
        }
    });

    // Handle the case when at the very top of the page, to activate "Home"
    if (pageYOffset < 150) {
        currentSection = 'hero';
    }


    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});