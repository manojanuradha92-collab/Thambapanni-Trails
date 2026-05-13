// Get modal elements
const bookModal = document.getElementById('bookModal');
const planModal = document.getElementById('planModal');
const closeBook = document.getElementById('closeBook');
const closePlan = document.getElementById('closePlan');
const bookAdventureBtn = document.getElementById('bookAdventureBtn');
const planTripBtn = document.getElementById('planTripBtn');
const ctaBookBtn = document.getElementById('ctaBookBtn');
const ctaPlanBtn = document.getElementById('ctaPlanBtn');
const toast = document.getElementById('toast');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const bookForm = document.getElementById('bookForm');
const planForm = document.getElementById('planForm');

// Open modals
bookAdventureBtn.addEventListener('click', () => {
    bookModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

planTripBtn.addEventListener('click', () => {
    planModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

ctaBookBtn.addEventListener('click', () => {
    bookModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

ctaPlanBtn.addEventListener('click', () => {
    planModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modals
closeBook.addEventListener('click', () => {
    bookModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

closePlan.addEventListener('click', () => {
    planModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (event) => {
    if (event.target === bookModal) {
        bookModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target === planModal) {
        planModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Form validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone) && phone.length >= 10;
}

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => {
            toast.className = 'toast';
        }, 300);
    }, 3000);
}

// Book Adventure Form Handler
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(bookForm);
    const name = formData.get('name') || bookForm.elements[0].value;
    const email = formData.get('email') || bookForm.elements[1].value;
    const phone = formData.get('phone') || bookForm.elements[2].value;
    
    // Validation
    if (!name || name.trim().length < 2) {
        showToast('Please enter a valid name', 'error');
        return;
    }
    
    if (!email || !validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    if (!phone || !validatePhone(phone)) {
        showToast('Please enter a valid phone number', 'error');
        return;
    }
    
    // If validation passes
    showToast('✓ Booking request received! We will contact you soon.');
    bookForm.reset();
    
    setTimeout(() => {
        bookModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 2000);
});

// Plan Custom Trip Form Handler
planForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(planForm);
    const name = formData.get('name') || planForm.elements[0].value;
    const email = formData.get('email') || planForm.elements[1].value;
    const phone = formData.get('phone') || planForm.elements[2].value;
    
    // Validation
    if (!name || name.trim().length < 2) {
        showToast('Please enter a valid name', 'error');
        return;
    }
    
    if (!email || !validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    if (!phone || !validatePhone(phone)) {
        showToast('Please enter a valid phone number', 'error');
        return;
    }
    
    // If validation passes
    showToast('✓ Custom itinerary request submitted! Our team will contact you shortly.');
    planForm.reset();
    
    setTimeout(() => {
        planModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 2000);
});

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.elements[0].value;
    const email = contactForm.elements[1].value;
    const subject = contactForm.elements[2].value;
    const message = contactForm.elements[3].value;
    
    // Validation
    if (!name || name.trim().length < 2) {
        showToast('Please enter a valid name', 'error');
        return;
    }
    
    if (!email || !validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    if (!subject || subject.trim().length < 3) {
        showToast('Please enter a valid subject', 'error');
        return;
    }
    
    if (!message || message.trim().length < 10) {
        showToast('Please enter a message with at least 10 characters', 'error');
        return;
    }
    
    // If validation passes
    showToast('✓ Message sent successfully! We will get back to you soon.');
    contactForm.reset();
});

// Newsletter Form Handler
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.elements[0].value;
    
    if (!email || !validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    showToast('✓ Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe destination cards
document.querySelectorAll('.destination-card').forEach(card => {
    observer.observe(card);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Lazy loading for images (if any are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Thambapanni Trails website loaded successfully!');
});