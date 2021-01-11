// ページ遷移のスライドアニメーション
window.onload = (() => {
    document.body.classList.remove('is-slide');
});

const pageLink = document.querySelectorAll('.slide-page');
for (let i = 0; i < pageLink.length; i++) {
    pageLink[i].onclick = e => {
        e.preventDefault();
        const url = pageLink[i].getAttribute('href');

        if (url !== '') {
            document.body.classList.add('is-slide-in');
            let slideAnime = document.querySelector('.is-slide-in');
            slideAnime.addEventListener('animationend', () => {
                window.location = url;
            });
        }
    }
}