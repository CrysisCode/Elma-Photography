document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');
        toggleCategory(category);
    });
});

function toggleCategory(category) {
    const allImages = document.querySelectorAll('.images');
    allImages.forEach(image => {
        if (image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}