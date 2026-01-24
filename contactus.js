document.addEventListener('DOMContentLoaded', () => {
    // Automatically update the year in the copyright notice
    const yearDisplay = document.getElementById('year');
    if (yearDisplay) {
        yearDisplay.textContent = new Date().getFullYear();
    }
    
    // Smooth hover effect for the CTA button
    const ctaBtn = document.querySelector('.btn-email');
    ctaBtn.addEventListener('mouseover', () => {
        ctaBtn.style.transform = 'scale(1.05)';
    });
    ctaBtn.addEventListener('mouseout', () => {
        ctaBtn.style.transform = 'scale(1)';
    });
});