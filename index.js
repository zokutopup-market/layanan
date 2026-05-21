document.addEventListener('DOMContentLoaded', function() {
    // Mulai preloader countdown setelah DOM loaded
    setTimeout(function() {
        hidePreloader();
    }, 1000); // loading
});

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    const body = document.body;
    
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.classList.add('hidden');
    }
    
    // Tunggu fade out selesai
    setTimeout(function() {
        body.classList.remove('content-hidden');
        body.classList.add('content-loaded');
        
        // Animate sections
        animateSections();
        initAllFeatures();
    }, 600);
}

// Animate sections masuk
function animateSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 250);
    });
}

// ========================================
// INIT ALL FEATURES
// ========================================
function initAllFeatures() {
    // Mobile menu
    initMobileMenu();
    
    // Smooth scroll
    initSmoothScroll();
    
    // Navbar scroll effect
    initNavbarScroll();
    
    // Form handling
    initContactForm();
    
    // Scroll animations
    initScrollAnimations();
    
    // Stats counter
    initStatsCounter();
}

// ========================================
// MOBILE MENU ✅
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// ========================================
// SMOOTH SCROLL 
// FIXED SMOOTH SCROLL - MULAI DARI HOME
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.querySelector(`#${targetId}`);
            
            if (target) {
                const headerHeight = 90; // Tinggi navbar
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FORCE SCROLL KE HOME saat load
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
}

// ========================================
// NAVBAR SCROLL ✅
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        }
    });
}

// ========================================
// CONTACT FORM ✅
function initContactForm() {
    const kontakForm = document.getElementById('kontakForm');
    if (kontakForm) {
        kontakForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('✅ Terima kasih! Pesan Anda berhasil terkirim.\nKami akan hubungi dalam 24 jam.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// ========================================
// SCROLL ANIMATIONS ✅
function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.layanan-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            observer.observe(card);
        });
    }
}

// ========================================
// STATS COUNTER ✅
// function initStatsCounter() {
//     const stats = document.querySelectorAll('.stat h3[data-target]');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const target = parseInt(entry.target.dataset.target);
//                 let current = 0;
//                 const increment = target / 50;
                
//                 const timer = setInterval(() => {
//                     current += increment;
//                     if (current >= target) {
//                         entry.target.textContent = target;
//                         clearInterval(timer);
//                     } else {
//                         entry.target.textContent = Math.floor(current);
//                     }
//                 }, 30);
//             }
//         });
//     }, { threshold: 0.5 });
    
//     stats.forEach(stat => observer.observe(stat));
// }

// ========================================
// BACKUP - Force load jika masih error
// ========================================
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.opacity !== '0') {
        console.log('🔧 Force loading...');
        hidePreloader();
    }
}, 8000); // Max 8 detik

// function showHelp() {
//         showToast("Contact support: wa.me/6281234567890", "info");
//     }
// Hero image button click handler - REDIRECT KE LINK
const heroBtn = document.getElementById('heroImageBtn');
if(heroBtn){
    heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // 🔗 TUlis LINK tujuan di sini:
        window.open ("https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact", "_blank"); 
        // atau pakai window.open("https://example.com", "_blank") untuk tab baru
    });
}
