document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.clickable-box');

    /*
     * Pour chaque article in articles :
     * - on ajoute un eventListener, si cette event est activé :
     *      - on empêche la redirection immédiate,
     *      - on récupère l'url du lien appelé,
     *      - on ajoute la class 'box-link-clicked',
     *      - on attend 300ms le temps que l'animation se déroule puis,
     *      - on lance le lien vers l'article,
     *      - enfin, on retire la class précédement attribuée.
     */

    articles.forEach(function(article) {
        article.addEventListener('click', function() {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const url = this.getAttribute('href'); // Récupère l'URL du lien

            article.classList.add('box-link-clicked'); // Ajout de la classe pour chager l'animation

            setTimeout(function() {
                window.location.href = url; // Redirige vers l'URL après le délai
            }, 300);

            // Retirer la classe à la fin de l'animation
            article.addEventListener('animationend', function() {
                article.classList.remove('box-link-clicked');
            }, { once: true });
        });
    });
});