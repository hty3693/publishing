(function () {
    'use strict';
    function headerAnimate(headerEle, startY) {
        startY = startY || 0;
        var prevScrollY = 0;
        var headerStatus = 'down';
        var headerElement = headerEle || null;

        if(headerElement === null) {
            throw new Error('header 엘리먼트의 인자가 올바르지 않습니디.');
            return false;
        }


        // 현재 scrollTop 을 반환하는 함수
        function position() {
            return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
        }

        function headerUp() {
            try{
                headerElement.className = headerElement.className.replace(new RegExp("(^|\\b)(show)(\\b|$)", "gi"), " ");
            }catch(exception){
            }finally{
                headerElement.className = headerElement.className.trim() + " " + 'hide';
            }
            headerStatus = 'up';

        }

        function headerDown() {
            try{
                headerElement.className = headerElement.className.replace(new RegExp("(^|\\b)(hide)(\\b|$)", "gi"), " ");
            }catch(exception){
            }finally{
                headerElement.className = headerElement.className.trim() + " " + 'show';
            }
            headerStatus = 'down';
        }

        window.addEventListener('scroll', function () {
            var currentscrollY = position();
            if( startY < currentscrollY ){
                if(prevScrollY <= currentscrollY && headerStatus === 'down') {
                    headerUp();
                } else if(prevScrollY >= currentscrollY && headerStatus === 'up'){
                    headerDown();
                }
            }
            prevScrollY = currentscrollY;
        });
    }

    window.headerAnimate = headerAnimate;
})();




window.addEventListener('load', function () {
    if(typeof headerAnimate === 'function' ){
        //첫번쨰인자 = 적용시킬 엘리먼트, 적용되는 Y스크롤 위치(시점) 단위 px
        headerAnimate(document.getElementsByClassName('header')[0], 80);
    }
})
