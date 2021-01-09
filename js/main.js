// オープニングアニメーション
const animation = () => {
    new Vivus('animation', {
            type: 'oneByOne',
            duration: 100,
            forceRender: false ,
            animTimingFunction:Vivus.EASE
        },
        obj => {
            setTimeout(() => {
                obj.el.classList.add('opening-finished');
            }, 300)
        }
    )
}

// オープニングアニメーションの後にシャッター実行
let promise = new Promise((resolve, reject) => {
    resolve(setTimeout(animation, 1000));
})

promise.then(() => {
    return new Promise((resolve, reject) => {
        const opening = document.querySelector('.opening');
        setTimeout(() => {
            resolve(opening.classList.add('shutter-anime'))
        }, 2000)
    })
    }).catch(() => { // エラーハンドリング
    console.error('Something wrong!')
})


// マウスストーカー用のdivを取得
const stalker = document.querySelector('.stalker');

// aタグにホバー中かどうかの判別フラグ
let hovFlag = false;

// マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', e => {
    if (!hovFlag) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
});

// リンクへ吸い付く処理
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    // マウスホバー時
    linkElem[i].addEventListener('mouseover', e => {
        hovFlag = true;

        // マウスストーカーにクラスをつける
        stalker.classList.add('hov_');

        // マウスストーカーの位置をリンクの中心に固定
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    // マウスホバー解除時
    linkElem[i].addEventListener('mouseout', e => {
        hovFlag = false;
        stalker.classList.remove('hov_');
    });
}

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
            setTimeout(() => {
                window.location = url;
            }, 1700);
        }
    }
}