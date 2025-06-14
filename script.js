// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle signup
function handleSignup() {
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate signup process
    const button = document.querySelector('.cta-button');
    const originalText = button.textContent;
    button.textContent = 'Processing...';
    button.disabled = true;
    
    setTimeout(() => {
        alert('Welcome to NeuroLearn! Check your email for next steps.');
        button.textContent = originalText;
        button.disabled = false;
        emailInput.value = '';
    }, 2000);
}

// Handle demo
function handleDemo() {
    alert('Demo coming soon! Sign up above to be notified when it\'s ready.');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard support for email input
    const emailInput = document.querySelector('.email-input');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSignup();
            }
        });
    }
    
    // Simple scroll animation for features
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate features on scroll
    document.querySelectorAll('.feature').forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.6s ease';
        observer.observe(feature);
    });
});