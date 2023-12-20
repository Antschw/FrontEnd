document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.article-link');

    articles.forEach(function(article) {
        article.addEventListener('click', function() {
            article.classList.add('article-link-clicked');

            // Retirer la classe à la fin de l'animation
            article.addEventListener('animationend', function() {
                article.classList.remove('article-link-clicked');
            }, { once: true });
        });
    });
});