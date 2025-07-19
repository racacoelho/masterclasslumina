// Enhanced Timer functionality with real countdown
class CountdownTimer {
    constructor() {
        this.targetDate = this.getTargetDate();
        this.elements = {
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
            offerHours: document.getElementById('offer-hours'),
            offerMinutes: document.getElementById('offer-minutes'),
            offerSeconds: document.getElementById('offer-seconds')
        };
        
        this.init();
    }
    
    getTargetDate() {
        // Check if we have a saved target date in localStorage
        const savedDate = localStorage.getItem('luminaCountdownTarget');
        if (savedDate) {
            const saved = new Date(savedDate);
            // If saved date is in the future, use it
            if (saved > new Date()) {
                return saved;
            }
        }
        
        // Create new target date (24 hours from now)
        const target = new Date();
        target.setHours(target.getHours() + 24);
        localStorage.setItem('luminaCountdownTarget', target.toISOString());
        return target;
    }
    
    init() {
        this.updateTimer();
        this.intervalId = setInterval(() => this.updateTimer(), 1000);
    }
    
    updateTimer() {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;
        
        if (distance < 0) {
            this.handleExpired();
            return;
        }
        
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update main timer
        if (this.elements.hours) this.elements.hours.textContent = String(hours).padStart(2, '0');
        if (this.elements.minutes) this.elements.minutes.textContent = String(minutes).padStart(2, '0');
        if (this.elements.seconds) this.elements.seconds.textContent = String(seconds).padStart(2, '0');
        
        // Update offer timer
        if (this.elements.offerHours) this.elements.offerHours.textContent = String(hours).padStart(2, '0');
        if (this.elements.offerMinutes) this.elements.offerMinutes.textContent = String(minutes).padStart(2, '0');
        if (this.elements.offerSeconds) this.elements.offerSeconds.textContent = String(seconds).padStart(2, '0');
    }
    
    handleExpired() {
        clearInterval(this.intervalId);
        
        // Reset timer with new 24-hour period
        this.targetDate = this.getTargetDate();
        this.init();
    }
}

// CTA Button functionality with improved tracking
function handleCTAClick() {
    // Track the click event for analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': 'Buy Now Button',
            'value': 1
        });
    }
    
    // Add loading state to button
    const clickedButton = event.target;
    const originalText = clickedButton.textContent;
    clickedButton.textContent = 'REDIRECIONANDO...';
    clickedButton.disabled = true;
    
    // Restore button after redirect
    setTimeout(() => {
        clickedButton.textContent = originalText;
        clickedButton.disabled = false;
    }, 3000);
    
    // Open payment link
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
}

// Enhanced FAQ functionality
class FAQManager {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }
    
    init() {
        this.faqItems.forEach((item, index) => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => this.toggleFAQ(index));
            }
        });
    }
    
    toggleFAQ(index) {
        const targetItem = this.faqItems[index];
        const isActive = targetItem.classList.contains('active');
        
        // Close all FAQs
        this.faqItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            targetItem.classList.add('active');
        }
        
        // Track FAQ interaction
        if (typeof gtag !== 'undefined') {
            gtag('event', 'faq_interaction', {
                'event_category': 'Engagement',
                'event_label': `FAQ ${index + 1}`,
                'value': 1
            });
        }
    }
}

// Enhanced Floating CTA functionality
class FloatingCTA {
    constructor() {
        this.floatingCTA = document.getElementById('floating-cta');
        this.heroSection = document.getElementById('hero');
        this.footer = document.querySelector('.footer');
        this.lastScrollY = window.pageYOffset;
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        if (!this.floatingCTA || !this.heroSection || !this.footer) return;
        
        window.addEventListener('scroll', () => this.requestTick());
        
        // Add click tracking to floating CTA
        const floatingButton = this.floatingCTA.querySelector('.floating-cta-button');
        if (floatingButton) {
            floatingButton.addEventListener('click', () => {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'CTA',
                        'event_label': 'Floating CTA',
                        'value': 1
                    });
                }
            });
        }
    }
    
    requestTick() {
        if (!this.ticking) {
            requestAnimationFrame(() => this.updateFloatingCTA());
            this.ticking = true;
        }
    }
    
    updateFloatingCTA() {
        const heroHeight = this.heroSection.offsetHeight;
        const footerTop = this.footer.offsetTop;
        const currentScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Show after hero section and hide before footer
        const shouldShow = currentScroll > heroHeight && 
                          currentScroll < (footerTop - windowHeight + 100);
        
        if (shouldShow) {
            this.floatingCTA.classList.add('visible');
        } else {
            this.floatingCTA.classList.remove('visible');
        }
        
        this.lastScrollY = currentScroll;
        this.ticking = false;
    }
}

// Smooth scrolling enhancement
class SmoothScrollManager {
    constructor() {
        this.init();
    }
    
    init() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const targetId = target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80; // Account for any fixed headers
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Track internal navigation
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'internal_navigation', {
                            'event_category': 'Navigation',
                            'event_label': targetId,
                            'value': 1
                        });
                    }
                }
            }
        });
    }
}

// Performance optimizations
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            this.setupLazyLoading();
        }
        
        // Preload critical resources
        this.preloadCriticalResources();
    }
    
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    preloadCriticalResources() {
        // Preload hero background image
        const heroImage = new Image();
        heroImage.src = './assets/hero-background.jpg';
    }
}

// Analytics and tracking
class AnalyticsManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Track page load
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': 'Master Class Lumina Landing Page',
                'page_location': window.location.href
            });
        }
        
        // Track scroll depth
        this.trackScrollDepth();
        
        // Track time on page
        this.startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - this.startTime) / 1000);
            if (typeof gtag !== 'undefined') {
                gtag('event', 'time_on_page', {
                    'event_category': 'Engagement',
                    'value': timeOnPage
                });
            }
        });
    }
    
    trackScrollDepth() {
        let maxScroll = 0;
        const trackingPoints = [25, 50, 75, 90, 100];
        
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Track milestone achievements
                trackingPoints.forEach(point => {
                    if (scrollPercent >= point && maxScroll >= point) {
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'scroll_depth', {
                                'event_category': 'Engagement',
                                'event_label': `${point}%`,
                                'value': point
                            });
                        }
                    }
                });
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    new CountdownTimer();
    new FAQManager();
    new FloatingCTA();
    new SmoothScrollManager();
    new PerformanceOptimizer();
    new AnalyticsManager();
    
    // Add loading complete event
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_fully_loaded', {
                'event_category': 'Performance'
            });
        }
    });
});

// Legacy global functions for backward compatibility
function toggleFAQ(index) {
    if (window.faqManager) {
        window.faqManager.toggleFAQ(index);
    }
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CountdownTimer,
        FAQManager,
        FloatingCTA,
        SmoothScrollManager,
        handleCTAClick
    };
}