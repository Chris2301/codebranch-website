document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.rotator-item');
    if (!items.length) return;

    let current = 0;

    // Activate the first one
    items[current].classList.add('active');

    setInterval(() => {
        // Hide current
        items[current].classList.remove('active');

        // Move to next
        current = (current + 1) % items.length;

        // Show next
        items[current].classList.add('active');
    }, 2000); // every 2 seconds
});