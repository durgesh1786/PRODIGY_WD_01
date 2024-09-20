window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Change background on scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Revert when at the top
    }
});

// Add hover effects to menu items (optional)
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#FFD700'; // Gold color on hover
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = '#fff'; // Back to white when hover ends
    });
});