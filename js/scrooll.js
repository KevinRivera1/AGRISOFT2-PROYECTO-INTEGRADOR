document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    const handleScroll = () => {
        const shouldAddClasses = window.scrollY > 10;

        if (shouldAddClasses) {
            nav.classList.add('bg-light', 'shadow');
        } else {
            nav.classList.remove('bg-light', 'shadow');
        }
    };


    const handleNavbarToggle = () => {
        nav.classList.add('bg-light', 'shadow');
    };

    window.addEventListener('scroll', handleScroll);
    navbarToggler.addEventListener('click', handleNavbarToggle);
});