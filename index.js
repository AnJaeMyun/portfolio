//fadeUp
// スクロールイベントを監視
document.addEventListener('scroll', function() {
  // すべての .fade-in 要素を取得
  const elements = document.querySelectorAll('section');
  elements.forEach(element => {
    // 要素の位置を取得
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 要素が画面内に入った場合
    if (rect.top < windowHeight - 100) { // 100px余裕をもたせる
      element.classList.add('visible'); // 表示クラスを追加
    }
  });
});

$(document).ready(function () {
  // ハンバーガーボタンのクリックイベント
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active'); // ボタンのアニメーション用
    $('.menu').toggleClass('open'); // メニューの開閉
  });

  // SP版メニューのクリックイベント
  $('.menu li').on('click', function () {
    $('.hamburger').removeClass('active');
    $('.menu').removeClass('open');
  });

  // スライドショーイベント
  let $slides = $('.slideshow figure');
  let index = 0;
  function showNextSlide() {
    $slides.eq(index).fadeOut(1000); // 現在の画像をフェードアウト
    index = (index + 1) % $slides.length; // 次の画像のインデックス
    $slides.eq(index).delay(1000).fadeIn(1000); // 次の画像をフェードイン
  }
  setInterval(showNextSlide, 3000); // 3秒ごとに画像を切り替え

  // スムーススクロール
  // ナビゲーションリンクがクリックされたとき
  $('.flex a').on('click', function(e) {
    e.preventDefault(); // デフォルトの動作を無効化
    // リンク先のIDを取得
    const target = $(this.getAttribute('href'));
    // 対象が存在する場合にスクロール
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top // 対象の位置までスクロール
      }, 1000, 'swing'); // アニメーション時間: 1000ms、イージング: swing
    }
  });
});
