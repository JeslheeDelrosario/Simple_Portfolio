// Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0, ringRafId;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
        if (!ringRafId) ringRafId = requestAnimationFrame(animateRing);
    }, { passive: true });
    function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
        ringRafId = (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1)
            ? requestAnimationFrame(animateRing)
            : null;
    }
    document.querySelectorAll('a,button,.close-modal,.lightbox-prev,.lightbox-next,.hamburger,.about-tab-btn,.pillar-card,.bento-item,.tech-pill,.skills-filter-btn,.skill-card-compact').forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.classList.add('expanded'); ring.classList.add('expanded'); });
        el.addEventListener('mouseleave', () => { cursor.classList.remove('expanded'); ring.classList.remove('expanded'); });
    });

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const setNavigationOpen = (isOpen) => {
        navbar.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        document.body.classList.toggle('menu-open', isOpen);
    };
    hamburger.addEventListener('click', () => setNavigationOpen(!navbar.classList.contains('open')));
    navbar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavigationOpen(false)));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') setNavigationOpen(false); });

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

    // Email Modal
const emailModal = document.getElementById('email-modal');
document.querySelectorAll('.open-email-modal').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); emailModal.classList.add('visible'); });
});
document.querySelector('.close-email-modal').addEventListener('click', () => {
    emailModal.classList.remove('visible');
    document.getElementById('email-success-message').classList.remove('visible');
    document.getElementById('email-form').reset();
});
emailModal.addEventListener('click', e => { if(e.target === emailModal) emailModal.classList.remove('visible'); });

// Email form submit
document.getElementById('email-form').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const msg = document.getElementById('email-success-message');
    try {
        const res = await fetch(form.action, { method:'POST', body: new FormData(form), headers:{ Accept:'application/json' } });
        if(res.ok) {
            msg.classList.add('visible');
            setTimeout(() => { msg.classList.remove('visible'); form.reset(); emailModal.classList.remove('visible'); }, 2000);
        } else { alert('Failed to send. Try again.'); }
    } catch(err) { alert('An error occurred. Try again.'); }
});

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

    // ── Particle Canvas ──
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animId;

        function resizeCanvas() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.4 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 245, 66, ${this.opacity})`;
                ctx.fill();
            }
        }

        const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80);
        for (let i = 0; i < particleCount; i++) particles.push(new Particle());

        function connectParticles() {
            const maxDist = 100;
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < maxDist * maxDist) {
                        const dist = Math.sqrt(distSq);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(200, 245, 66, ${0.06 * (1 - dist / maxDist)})`;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            connectParticles();
            animId = requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

    // ── Metric Counters ──
    function animateCounters() {
        const metrics = document.querySelectorAll('.metric-num');
        metrics.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();
            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(updateCounter);
            }
            requestAnimationFrame(updateCounter);
        });
    }

    // ── Trigger counters on hero visibility ──
    const heroObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    const heroMetrics = document.querySelector('.hero-metrics');
    if (heroMetrics) heroObserver.observe(heroMetrics);

// Project cards - toggle details expansion
    function toggleProjectDetails(card) {
        const details = card.querySelector('.project-details');
        const icon = card.querySelector('.expand-btn i');
        const isOpen = details.style.display === 'block';
        details.style.display = isOpen ? 'none' : 'block';
        if (icon) {
            icon.classList.toggle('bx-chevron-down', isOpen);
            icon.classList.toggle('bx-chevron-up', !isOpen);
        }
    }

    // Project cards - filter functionality
    const filterButtons = document.querySelectorAll('.projects-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter cards
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                if (filter === 'all' || (categories && categories.includes(filter))) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add project cards to cursor hover effects
    document.querySelectorAll('.project-card').forEach(el => {
        el.addEventListener('mouseenter', () => { 
            if (cursor && ring) {
                cursor.classList.add('expanded'); 
                ring.classList.add('expanded'); 
            }
        });
        el.addEventListener('mouseleave', () => { 
            if (cursor && ring) {
                cursor.classList.remove('expanded'); 
                ring.classList.remove('expanded'); 
            }
        });
    });

// Skill card scroll reveal animation
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if(entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('revealed'), i * 60);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.skill-card-compact').forEach(el => skillObserver.observe(el));

    // Active nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                let current = '';
                sections.forEach(s => { if(window.scrollY >= s.offsetTop - 150) current = s.id; });
                navLinks.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
                });
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    // ── About Section Tabs ──
    const aboutTabBtns = document.querySelectorAll('.about-tab-btn');
    const aboutTabContents = document.querySelectorAll('.about-tab-content');

    aboutTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            aboutTabBtns.forEach(b => b.classList.remove('active'));
            aboutTabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const content = document.getElementById(targetTab);
            if (content) {
                content.classList.add('active');
            }
        });
    });

    // ── Skills Category Filter ──
    const filterBtns = document.querySelectorAll('.skills-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card-compact');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
