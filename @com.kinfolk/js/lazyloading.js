(function () {
    // 현재 scrollTop 을 반환하는 함수
    function position() {
        return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
    }
    function lazyLoading(sectionName, startY) {

        startY = startY ? startY : 200;
        var sections = document.querySelectorAll(sectionName || '.module');
        var windowSizeY = window.innerHeight || document.documentElement.clientHeight;
        var sectionRanges= [];
        for (var i = 0,len = sections.length; i < len; i++) {
            sectionRanges.push({
                startP: sections[i].offsetTop,
                endP: sections[i].clientHeight + sections[i].offsetTop,
                height: sections[i].clientHeight
            });
        }

        function sectionImageLoad(section) {
            if(section.getAttribute('data-loaded')) return false;
            var imgarr = section.querySelectorAll('img.lazy[data-img-src]');
            var len = imgarr.length;

            for(var i = 0; i < len; i++) {
               var src = imgarr[i].getAttribute('data-img-src');
                if(src){
                    imgarr[i].setAttribute('src',src);
                }
            }
            section.setAttribute('data-loaded', 'true');
        }

        function currentSectionShow() {
            var currentScrollYstart = position();
            var currentScrollYend = position() + windowSizeY + startY;
            for(var i = 0, len = sectionRanges.length; i < len; i++) {
                if(sectionRanges[i]) {
                    var sectionYstart = sectionRanges[i].startP;
                    var sectionYend = sectionRanges[i].endP;
                    var sectionHeight =  sectionRanges[i].height;
                    if(currentScrollYstart >= sectionYstart && currentScrollYstart <= sectionYend || currentScrollYend >= sectionYstart && currentScrollYend <= sectionYend || windowSizeY > sectionHeight && currentScrollYstart <= sectionYstart && currentScrollYend >= sectionYend) {
                        sectionImageLoad(sections[i]);
                    }
                }
            }
        }




        function loadImage (el, fn, i) {
            el.className += ' lazy-loaded';
            fn ? fn(i): null;
        }

        function elementInViewport(el) {
            var rect = el.getBoundingClientRect();

            return (
                rect.top    >= 0
                && rect.left   >= 0
                && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
            )
        }

        var images = new Array()
            , query = document.querySelectorAll('img.lazy')
            , processScroll = function(){
                var newImageList = [];
                for (var i = 0; i < images.length; i++) {
                    if (elementInViewport(images[i])) {
                        loadImage(images[i]);
                    }else {
                        newImageList.push(images[i]);
                    }
                };
                images = newImageList;
            };
        for (var i = 0; i < query.length; i++) {
            images.push(query[i]);
        };

        processScroll();
        currentSectionShow();
        window.addEventListener('scroll',processScroll);
        window.addEventListener('scroll', currentSectionShow);
    }


    window.addEventListener('DOMContentLoaded', function () {
       lazyLoading('.module');
    });
})()