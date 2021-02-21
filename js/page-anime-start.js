window.onload = (() => {
    let animeSlide = document.getElementById('page-start');
    animeSlide.classList.add('is-slide-in');
    
    // アニメーション終了後のスタイル変更
    let el = document.querySelector('.is-slide-in');
    el.addEventListener('animationend', () => {
        // idの値を削除
        animeSlide.removeAttribute('id');
        
        // コンテンツをフェードイン
        let main = document.querySelector('main');
        main.classList.add('fade-in');

        // 背景を指定
        document.body.style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC)';
        document.body.style.backgroundRepeat = 'repeat';
    });
});