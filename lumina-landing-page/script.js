// Timer functionality
let timeLeft = {
    hours: 23,
    minutes: 59,
    seconds: 59
};

function updateTimer() {
    // Update main timer
    document.getElementById('hours').textContent = String(timeLeft.hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(timeLeft.minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(timeLeft.seconds).padStart(2, '0');
    
    // Update offer timer
    const offerHours = document.getElementById('offer-hours');
    const offerMinutes = document.getElementById('offer-minutes');
    const offerSeconds = document.getElementById('offer-seconds');
    
    if (offerHours) offerHours.textContent = String(timeLeft.hours).padStart(2, '0');
    if (offerMinutes) offerMinutes.textContent = String(timeLeft.minutes).padStart(2, '0');
    if (offerSeconds) offerSeconds.textContent = String(timeLeft.seconds).padStart(2, '0');
    
    // Countdown logic
    if (timeLeft.seconds > 0) {
        timeLeft.seconds--;
    } else if (timeLeft.minutes > 0) {
        timeLeft.minutes--;
        timeLeft.seconds = 59;
    } else if (timeLeft.hours > 0) {
        timeLeft.hours--;
        timeLeft.minutes = 59;
        timeLeft.seconds = 59;
    }
}

// Start timer
setInterval(updateTimer, 1000);

// CTA Button functionality
function handleCTAClick() {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
}

// FAQ functionality
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const targetItem = faqItems[index];
    
    // Close all other FAQs
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    targetItem.classList.toggle('active');
}

// Floating CTA functionality
function initFloatingCTA() {
    const floatingCTA = document.getElementById('floating-cta');
    const heroSection = document.getElementById('hero');
    const footer = document.querySelector('.footer');
    
    function toggleFloatingCTA() {
        if (!heroSection || !footer || !floatingCTA) return;
        
        const heroHeight = heroSection.offsetHeight;
        const footerTop = footer.offsetTop;
        const currentScroll = window.pageYOffset;
        
        // Show after hero section and hide before footer
        if (currentScroll > heroHeight && currentScroll < footerTop - 100) {
            floatingCTA.classList.add('visible');
        } else {
            floatingCTA.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleFloatingCTA);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFloatingCTA();
    updateTimer(); // Initial timer update
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});