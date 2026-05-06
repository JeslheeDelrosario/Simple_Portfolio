// Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx+'px'; cursor.style.top = my+'px'; });
    function animateRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx+'px'; ring.style.top = ry+'px'; requestAnimationFrame(animateRing); }
    animateRing();
    document.querySelectorAll('a,button,.close-modal,.lightbox-prev,.lightbox-next,.hamburger').forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.classList.add('expanded'); ring.classList.add('expanded'); });
        el.addEventListener('mouseleave', () => { cursor.classList.remove('expanded'); ring.classList.remove('expanded'); });
    });

    // Hamburger
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('navbar').classList.toggle('open');
    });

    // Modals
    const modal = document.getElementById('contact-modal');
    document.querySelectorAll('.hire-me,.lets-talk').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); modal.classList.add('visible'); });
    });
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('visible');
        document.getElementById('success-message').classList.remove('visible');
        document.getElementById('contact-form').reset();
    });
    modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('visible'); });

    // Form submit
    document.getElementById('contact-form').addEventListener('submit', async e => {
        e.preventDefault();
        const form = e.target;
        const msg = document.getElementById('success-message');
        try {
            const res = await fetch(form.action, { method:'POST', body: new FormData(form), headers:{ Accept:'application/json' } });
            if(res.ok) {
                msg.classList.add('visible');
                setTimeout(() => { msg.classList.remove('visible'); form.reset(); modal.classList.remove('visible'); }, 2000);
            } else { alert('Failed to send. Try again.'); }
        } catch(err) { alert('An error occurred. Try again.'); }
    });

    // Lightbox
    let currentImages = [], currentIndex = 0;
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.querySelector('.lightbox-image');
    const lbCounter = document.querySelector('.lightbox-counter');

    document.querySelectorAll('.view-project').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            currentImages = link.getAttribute('data-images').split(' ');
            currentIndex = 0;
            updateLightbox();
            lightbox.classList.add('visible');
        });
    });
    function updateLightbox() {
        lbImg.src = currentImages[currentIndex];
        lbCounter.textContent = `${currentIndex+1} / ${currentImages.length}`;
    }
    function closeLightbox() { lightbox.classList.remove('visible'); lbImg.src = ''; lbCounter.textContent = ''; }
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
    document.querySelector('.lightbox-prev').addEventListener('click', e => { e.stopPropagation(); if(currentIndex>0){currentIndex--;updateLightbox();} });
    document.querySelector('.lightbox-next').addEventListener('click', e => { e.stopPropagation(); if(currentIndex<currentImages.length-1){currentIndex++;updateLightbox();} });

    // Skill cell scroll animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if(entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.skill-cell').forEach(el => observer.observe(el));

    // Active nav
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => { if(window.scrollY >= s.offsetTop - 150) current = s.id; });
        document.querySelectorAll('nav a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#'+current);
        });
    });