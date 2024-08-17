// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject') ? document.getElementById('subject').value : '';
        const message = document.getElementById('message') ? document.getElementById('message').value : '';

        if (!name || !email || (subject && !subject) || (message && !message)) {
            alert('Please fill out all required fields.');
            event.preventDefault();
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for any additional functionality (if needed)
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add event listeners for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('You clicked on an image!');
        });
    });
});
