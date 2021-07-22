//閉じるボタンor背景クリックでモーダルを表示

function　popupImg () {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-open-btn');

    //functionを呼び出す
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);

    function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            popup.classList.toggle('is-show');
        })
        console.log ('elem=>',elem);
        console.log ('popup=>',popup);
    }
}

popupImg ();


