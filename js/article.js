document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.clickable-box');

    articles.forEach(function(article) {
        article.addEventListener('click', function() {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const url = this.getAttribute('href'); // Récupère l'URL du lien

            article.classList.add('article-link-clicked'); // Ajout de la classe pour chager l'animation

            setTimeout(function() {
                window.location.href = url; // Redirige vers l'URL après le délai
            }, 300);

            // Retirer la classe à la fin de l'animation
            article.addEventListener('animationend', function() {
                article.classList.remove('article-link-clicked');
            }, { once: true });
        });
    });
});