//ページが読み込まれたらモーダルを表示

window.onload = function() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');


    //functionを呼び出す
    closePopUp(blackBg);
    closePopUp(closeBtn);

    function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            popup.classList.remove('is-show');
        })
    }
}