// ページ全体の読み込みが完了したら実行
window.addEventListener('load', function() {
    // 1. スプラッシュ画面とメインコンテンツの要素を取得
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    // アニメーション時間＋待機時間（CSSで設定した計2.5秒）
    const animationTime = 2500; 

    // 2. アニメーション完了後に実行
    setTimeout(function() {
        // スプラッシュ画面に「loaded」クラスを追加（CSSでフェードアウト）
        splashScreen.classList.add('loaded');
        
        // メインコンテンツに「show」クラスを追加（CSSでフェードイン）
        mainContent.classList.add('show');
    }, animationTime); // 2.5秒後に実行
});