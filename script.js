// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the greeting card
    initializeCard();
    
    // Add sparkle effects
    createSparkles();
    
    // Add click sound effect (optional)
    preloadSounds();
});

// Initialize card animations and effects
function initializeCard() {
    // Add hover effects to message card
    const messageCard = document.getElementById('messageCard');
    if (messageCard) {
        messageCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });
        
        messageCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    }
    
    // Add click effects to rakhi
    const rakhi = document.querySelector('.rakhi');
    if (rakhi) {
        rakhi.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'rakhiPulse 2s ease-in-out infinite, rakhiSpin 1s ease-out';
            }, 10);
            
            // Create burst effect
            createBurstEffect(this);
        });
    }
}

// Show surprise section with animation
function showSurprise() {
    const surpriseSection = document.getElementById('surpriseSection');
    const button = event.target.closest('.btn');
    
    if (surpriseSection) {
        // Add show class for animation
        surpriseSection.classList.add('show');
        
        // Change button text
        if (button) {
            button.innerHTML = '<span>✨ Surprise Revealed! ✨</span>';
            button.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
        }
        
        // Create confetti effect
        createConfetti();
        
        // Play celebration sound (if available)
        playSound('celebration');
        
        // Scroll to surprise section smoothly
        setTimeout(() => {
            surpriseSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 300);
    }
}

// Play main animation sequence
function playAnimation() {
    const button = event.target.closest('.btn');
    
    // Disable button temporarily
    if (button) {
        button.disabled = true;
        button.innerHTML = '<span>🎭 Playing Animation... 🎭</span>';
    }
    
    // Reset all animations
    resetAnimations();
    
    // Play sequence of animations
    setTimeout(() => {
        animateTitle();
    }, 500);
    
    setTimeout(() => {
        animateRakhi();
    }, 1500);
    
    setTimeout(() => {
        animateMessage();
    }, 3000);
    
    setTimeout(() => {
        createFireworks();
    }, 4500);
    
    // Re-enable button
    setTimeout(() => {
        if (button) {
            button.disabled = false;
            button.innerHTML = '<span>🎭 Play Animation</span>';
        }
    }, 6000);
}

// Reset all animations
function resetAnimations() {
    const elements = document.querySelectorAll('.main-title, .rakhi, .message-card');
    elements.forEach(el => {
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = '';
        }, 10);
    });
}

// Animate title with special effects
function animateTitle() {
    const title = document.querySelector('.main-title');
    if (title) {
        title.style.animation = 'gradientShift 3s ease-in-out infinite, titleBounce 2s ease-out';
        
        // Add temporary glow effect
        title.style.textShadow = '0 0 20px rgba(255, 107, 107, 0.8)';
        setTimeout(() => {
            title.style.textShadow = '';
        }, 2000);
    }
}

// Animate rakhi with special rotation
function animateRakhi() {
    const rakhi = document.querySelector('.rakhi');
    if (rakhi) {
        rakhi.style.animation = 'rakhiPulse 2s ease-in-out infinite, rakhiSpecialSpin 3s ease-in-out';
        
        // Add temporary glow
        rakhi.style.filter = 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.8))';
        setTimeout(() => {
            rakhi.style.filter = '';
        }, 3000);
    }
}

// Animate message card
function animateMessage() {
    const messageCard = document.querySelector('.message-card');
    if (messageCard) {
        messageCard.style.animation = 'messageGlow 2s ease-in-out';
        messageCard.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            messageCard.style.transform = '';
        }, 2000);
    }
}

// Create sparkle effects around the card
function createSparkles() {
    const container = document.querySelector('.container');
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        sparkle.style.animation = 'sparkleAnimation 3s ease-out forwards';
        
        container.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }, 2000);
}

// Create burst effect when rakhi is clicked
function createBurstEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = ['💖', '✨', '🌟', '💝'][Math.floor(Math.random() * 4)];
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 100;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        particle.style.animation = `burstParticle 1s ease-out forwards`;
        particle.style.setProperty('--endX', endX + 'px');
        particle.style.setProperty('--endY', endY + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#54a0ff', '#ff9ff3', '#ffd700', '#2ecc71'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        }, i * 50);
    }
}

// Create fireworks effect
function createFireworks() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.style.position = 'fixed';
    fireworksContainer.style.top = '0';
    fireworksContainer.style.left = '0';
    fireworksContainer.style.width = '100%';
    fireworksContainer.style.height = '100%';
    fireworksContainer.style.pointerEvents = 'none';
    fireworksContainer.style.zIndex = '999';
    
    document.body.appendChild(fireworksContainer);
    
    // Create multiple fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createSingleFirework(fireworksContainer);
        }, i * 500);
    }
    
    // Remove container after animation
    setTimeout(() => {
        if (fireworksContainer.parentNode) {
            fireworksContainer.parentNode.removeChild(fireworksContainer);
        }
    }, 4000);
}

// Create single firework
function createSingleFirework(container) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight / 2) + 100;
    
    // Create explosion particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.borderRadius = '50%';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        
        particle.style.animation = `fireworkParticle 2s ease-out forwards`;
        particle.style.setProperty('--endX', endX + 'px');
        particle.style.setProperty('--endY', endY + 'px');
        
        container.appendChild(particle);
    }
}

// Sound effects (optional - will work if audio files are available)
function preloadSounds() {
    // This is optional - you can add sound files later
    window.sounds = {
        celebration: null,
        click: null
    };
}

function playSound(soundName) {
    // Optional sound playing - will only work if sounds are loaded
    if (window.sounds && window.sounds[soundName]) {
        window.sounds[soundName].play().catch(() => {
            // Ignore audio play errors
        });
    }
}

// Add dynamic CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes titleBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    @keyframes rakhiSpecialSpin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.2); }
        100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes rakhiSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes messageGlow {
        0%, 100% { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
        50% { box-shadow: 0 20px 50px rgba(255, 107, 107, 0.3); }
    }
    
    @keyframes sparkleAnimation {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
    
    @keyframes burstParticle {
        0% { 
            opacity: 1; 
            transform: translate(0, 0) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translate(calc(var(--endX) - 50vw), calc(var(--endY) - 50vh)) scale(0); 
        }
    }
    
    @keyframes confettiFall {
        0% { 
            transform: translateY(-10px) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: translateY(100vh) rotate(720deg); 
            opacity: 0; 
        }
    }
    
    @keyframes fireworkParticle {
        0% { 
            opacity: 1; 
            transform: translate(0, 0) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translate(calc(var(--endX) - 50vw), calc(var(--endY) - 50vh)) scale(0); 
        }
    }
`;
document.head.appendChild(style);

// Add touch support for mobile devices
document.addEventListener('touchstart', function() {}, {passive: true});

// Prevent context menu on long press for better mobile experience
document.addEventListener('contextmenu', function(e) {
    if (e.target.closest('.greeting-card')) {
        e.preventDefault();
    }
});

// Add keyboard shortcuts for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('btn')) {
            focusedElement.click();
        }
    }
});

console.log('🎉 Raksha Bandhan greeting card loaded successfully! 🎉');