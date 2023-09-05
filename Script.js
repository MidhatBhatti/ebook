document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book');
            purchaseBook(bookId);
        });
    });

    function purchaseBook(bookId) {
        // Simulate a purchase process
        const bookTitle = document.querySelector(`.book[data-book="${bookId}"] h2`).textContent;
        const bookPrice = document.querySelector(`.book[data-book="${bookId}"] .price`).textContent;

        alert(`Thank you for purchasing ${bookTitle} for ${bookPrice}! The download link will be sent to your email.`);
    }
});
