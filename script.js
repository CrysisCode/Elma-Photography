document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');
        toggleCategory(category);
    });
});

function toggleCategory(category) {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        // For the carousel
        const carouselItems = document.querySelectorAll('.carousel-item');
        let firstItemSet = false;
        carouselItems.forEach(item => {
            const imgCategory = item.getAttribute('data-category');
            if (category === 'categoryAll' || imgCategory === category) {
                item.style.display = 'block';
                if (!firstItemSet) {
                    item.classList.add('active');
                    firstItemSet = true;
                } else {
                    item.classList.remove('active');
                }
            } else {
                item.style.display = 'none';
                item.classList.remove('active');
            }
        });
    } else {
        // For the gallery
        const allImages = document.querySelectorAll('.images');
        allImages.forEach(image => {
            if (category === 'categoryAll' || image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Select all images that trigger the modal
    const images = document.querySelectorAll('.images img');
    
    // Event listener for clicking on an image to open the modal
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            
            const modalImage = document.getElementById('modalImage');
            modalImage.src = this.getAttribute('data-src'); // Set modal image source
            const modalBackdrop = querySelector('.modal-backdrop');
            modalBackdrop.remove();
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show(); // Show the modal
        });
    });

    // Event listener for modal close event (using Bootstrap 5 event)
    const myModal = document.getElementById('imageModal');
    myModal.addEventListener('hidden.bs.modal', function () {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = ''; // Clear modal image source on close
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const imageContainers = document.querySelectorAll('.image-container');

    // Handle modal for images in the gallery
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImg = document.querySelector('#imageModal img');
    const thumbnails = document.querySelectorAll('.image-container img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const src = this.getAttribute('data-src');
            modalImg.src = src;
            modal.show();
        });
    });

    // Handle modal for images in the carousel
    const carouselItems = document.querySelectorAll('#imageCarousel .carousel-item img');

    carouselItems.forEach(carouselItem => {
        carouselItem.addEventListener('click', function () {
            const src = this.getAttribute('src');
            modalImg.src = src;
            modal.show();
        });
    });
});