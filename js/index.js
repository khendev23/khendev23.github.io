$(document).ready(function () { // 문서가 로드된 후에 JavaScript 코드가 적절한 시점에 실행하게 해주는 코드

    /*  메뉴 스크롤  */
    var $menu = $('.nav ul li'),
        $contents = $('.section'),
        $doc = $('html, body');
    $(function () {
        $menu.on('click', 'a', function (e) {
            var $target = $(this).parent(), // 클릭한 메뉴 항목의 부모 요소인 <li>를 $target 변수에 할당
                idx = $target.index(), // $target의 인덱스를 가져와 $contents에서 해당 섹션을 선택할 때 사용할 인덱스인 idx 변수에 할당
                section = $contents.eq(idx), // $contents에서 idx에 해당하는 섹션을 선택하고 section 변수에 할당
                offsetTop = section.offset().top; // 선택한 섹션의 상단 위치를 offsetTop 변수에 할당

            var correctedOffsetTop = offsetTop - -10; // offsetTop 값을 10만큼 보정값 조정, 스크롤 살짝 위로 올리기
            $doc.stop() // $doc 변수에 저장된 문서 요소('html, body')를 애니메이션으로 스크롤
                .animate({
                    scrollTop: correctedOffsetTop
                }, 500); // scrollTop 속성을 correctedOffsetTop 값으로 설정하고, 500밀리초 동안 애니메이션을 진행
            return false; // <a> 요소를 클릭했을 때 기본적으로 발생하는 링크 이동을 방지
        });
    });

    $(window).scroll(function () { // 윈도우의 스크롤 이벤트가 발생할 때 실행될 이벤트 핸들러를 등록
        var scltop = $(window).scrollTop(); // 현재 스크롤의 위치를 scltop 변수에 할당. scrollTop() 함수는 스크롤된 Y축의 위치를 반환

        $.each($contents, function (idx, item) { // $contents에 대해 반복문을 실행. $contents는 각 섹션 요소들을 나타내는 배열
            var $target = $contents.eq(idx), // 현재 반복 중인 섹션을 $target 변수에 할당
                i = $target.index(), // $target의 인덱스를 가져와 i 변수에 할당
                targetTop = $target.offset().top; // $target 요소의 상단 위치를 targetTop 변수에 할당

            if (targetTop <= scltop) { // 현재 스크롤 위치(scltop)가 $target 요소의 상단 위치(targetTop)보다 크거나 같을 경우 실행
                $menu.removeClass('on'); // 모든 메뉴 항목에서 'on' 클래스를 제거
                $menu.eq(idx).addClass('on'); // 현재 섹션에 해당하는 메뉴 항목에 'on' 클래스를 추가. 이를 통해 현재 보여지는 섹션과 연관된 메뉴 항목에 시각적인 표시를 줄 수 있다
            }

        })
    });


    /* to top 버튼 */
    var btnTop = $('.to_top_btn'); // $('.to_top_btn') 선택자를 사용하여 "To Top" 버튼을 나타내는 요소를 선택하고 btnTop 변수에 할당
    btnTop.on('click', function () {
        $doc.stop() // $doc 변수에 저장된 문서 요소('html, body')를 애니메이션으로 스크롤
            .animate({
                scrollTop: 0
            }, 500) // scrollTop 속성을 0으로 설정하여 페이지의 맨 위로 이동하고, 500밀리초 동안 애니메이션을 진행
    });

});

