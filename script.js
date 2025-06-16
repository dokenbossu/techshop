document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('exploreButton');

    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            alert('Дякуємо за інтерес! Перегляньте наші товари нижче.');
            // Можна додати плавний скрол до розділу з товарами
            document.querySelector('.products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});