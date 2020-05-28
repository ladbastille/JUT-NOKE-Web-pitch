// 網頁的主程式寫在這裡
// 註解：跟設定無關需要註解

// 函數() => function(){}
// jQuery() => $()
// 等待畫面載入完成後
$(document).ready(function () {
    // 畫面載入完成後，要做的事情
    console.log('畫面載入完成了')

    // 選到.navbar .nav-link並為他們綁定點擊事件
    $('.navbar .nav-link, #goBackBtn').click(function () {
        //  點按鈕後要做的事情
        console.log('按鈕被點了')
        console.log('被點擊的按鈕是：', this)
        // 取得移動目標
        // 取得點擊按鈕的href的值
        let target = $(this).attr('href')
        console.log('移動的目標是：', target)
        // 取得目標的座標
        let position = $(target).offset().top
        console.log('目標座標：', position)
        // 取得navbar高度
        let navbarHeight = $('.navbar').outerHeight()
        // 設定動畫時間
        // 1秒 => 1000（微秒）
        let duration = 500
        // 執行動畫
        // .animate({物件}, 動畫時間)
        // .stop()先停止動畫再執行，避免連點累積執行時間
        $('html,body').stop().animate({
            scrollTop: position - navbarHeight
        }, duration)
    })
})