function play_se(){
    var warning = new Audio('mp3.mp3');
    mp3.play();
    navigator.vibrate([200, 100, 200, 100, 200]);
}


$(function(){
    //ページの読み込みが終了すると実行
    $('#test').click(play_se);
});
