(function () {
    // 현재 scrollTop 을 반환하는 함수
    function position() {
        return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
    }
    function lazyLoading(sectionName, startY) {

        startY = startY ? startY : 400;
        var sections = document.querySelectorAll(sectionName || 'module');
        var windowSizeY = window.innerHeight;
        var sectionRanges= [];
        for (var i = 0,len = sections.length; i < len; i++) {
            sectionRanges.push({
                startP: sections[i].offsetTop,
                endP: sections[i].clientHeight + sections[i].offsetTop,
                center: sections[i].clientHeight / 2
            });
        }

        function sectionImageLoad(section) {
            if (section.getAttribute('data-load')) return false;

            var imgarr = section.querySelectorAll('img.lazy');
            var len = imgarr.length;

            for(var i = 0; i < len; i++){
                var imgElement = imgarr[i];
                imgElement.className += ' lazy-loaded';
            }

            section.setAttribute('data-load', 'true');
        }

        function currentSectionShow(e) {
            var currentScrollYstart = position() + (windowSizeY / 2);
            for(var i = 0, len = sectionRanges.length; i < len; i++) {
                var sectionYstart = sectionRanges[i].startP;
                var sectionYend = sectionRanges[i].endP;
                if(currentScrollYstart < sectionYend  && currentScrollYstart > sectionYstart) {
                    sectionImageLoad(sections[i]);
                }
            }
        }
        currentSectionShow();
        window.addEventListener('scroll', currentSectionShow);
    }


    window.addEventListener('load', function () {
       lazyLoading('.module');
    });
})()