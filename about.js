// JavaScript functionalities for enhancing the "About" section:

// 1. Interactive Tabs for Biography Sections
function createTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and corresponding content
            button.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
}

// 2. Image Carousel
function createCarousel() {
    // Add code to create carousel here
    // This could involve using a library like Swiper.js or implementing custom carousel logic
}

// 3. Call-to-Action Button
function createCTAButton() {
    const ctaButton = document.createElement('a');
    ctaButton.textContent = 'Join Now for Free';
    ctaButton.classList.add('cta-button');
    ctaButton.href = 'plan.html'; // Link to plan.html
    document.body.appendChild(ctaButton);
}

// 4. Accordion for Additional Information
function createAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            content.classList.toggle('active');
        });
    });
}

// 5. Smooth Scrolling
function smoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Call functions to initialize enhancements
window.addEventListener('DOMContentLoaded', () => {
    createTabs();
    createCarousel();
    createCTAButton();
    createAccordion();
    smoothScrolling();
});
