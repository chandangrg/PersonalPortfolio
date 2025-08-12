// Portfolio Interactivity for Chandan Gurung

document.addEventListener('DOMContentLoaded', () => {

    /* ===== Smooth Scroll for Navigation ===== */
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ===== "More About Me" Toggle ===== */
    const moreBtn = document.getElementById('moreBtn');
    const moreContent = document.getElementById('moreContent');
    if (moreBtn && moreContent) {
        moreBtn.addEventListener('click', () => {
            const isHidden = moreContent.style.display === 'none' || moreContent.style.display === '';
            moreContent.style.display = isHidden ? 'block' : 'none';
            moreBtn.textContent = isHidden ? 'Show less' : 'More about me';
        });
    }

    /* ===== Hire Me Modal Logic ===== */
    const hireBtn = document.getElementById('hireBtn');
    const hireModal = document.getElementById('hireModal');
    const closeModal = document.getElementById('closeModal');

    function openModal() {
        hireModal.style.display = 'block';
        hireModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModalFn() {
        hireModal.style.display = 'none';
        hireModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (hireBtn) hireBtn.addEventListener('click', openModal);
    if (closeModal) closeModal.addEventListener('click', closeModalFn);

    if (hireModal) {
        hireModal.addEventListener('click', (e) => {
            if (e.target === hireModal) closeModalFn();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hireModal.style.display === 'block') {
            closeModalFn();
        }
    });

    /* ===== Contact Form Validation (Main Page) ===== */
    const contactForm = document.getElementById('contactForm');
    const contactName = document.getElementById('contactName');
    const contactEmail = document.getElementById('contactEmail');
    const contactMessage = document.getElementById('contactMessage');
    const contactStatus = document.getElementById('contactStatus');

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!contactName.value.trim()) {
                contactStatus.style.color = 'red';
                contactStatus.textContent = 'Please enter your name.';
                return;
            }
            if (!contactEmail.value.trim() || !isValidEmail(contactEmail.value.trim())) {
                contactStatus.style.color = 'red';
                contactStatus.textContent = 'Please enter a valid email.';
                return;
            }
            if (!contactMessage.value.trim()) {
                contactStatus.style.color = 'red';
                contactStatus.textContent = 'Please enter a message.';
                return;
            }

            contactStatus.style.color = 'green';
            contactStatus.textContent = 'Thanks — your message has been received (demo).';
            contactForm.reset();

            setTimeout(() => { contactStatus.textContent = ''; }, 4000);
        });
    }

    /* ===== Modal Contact Form Handling ===== */
    const modalContactForm = document.getElementById('modalContactForm');
    const modalStatus = document.getElementById('modalStatus');

    if (modalContactForm) {
        modalContactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('modalName');
            const email = document.getElementById('modalEmail');
            const message = document.getElementById('modalMessage');

            if (!name.value.trim()) {
                modalStatus.style.color = 'red';
                modalStatus.textContent = 'Please enter your name.';
                return;
            }
            if (!email.value.trim() || !isValidEmail(email.value.trim())) {
                modalStatus.style.color = 'red';
                modalStatus.textContent = 'Please enter a valid email.';
                return;
            }
            if (!message.value.trim()) {
                modalStatus.style.color = 'red';
                modalStatus.textContent = 'Please enter a message.';
                return;
            }

            modalStatus.style.color = 'green';
            modalStatus.textContent = 'Message sent (demo). I will reach out soon!';
            modalContactForm.reset();

            setTimeout(() => {
                modalStatus.textContent = '';
                closeModalFn();
            }, 1500);
        });
    }

    /* ===== Mobile Menu Toggle ===== */
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav').querySelector('ul');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });

        const navLinksMobile = mainNav.querySelectorAll('a');
        navLinksMobile.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('show');
            });
        });
    }
});
