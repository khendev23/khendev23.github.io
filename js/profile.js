// 근무 약력 마우스 오버 시 주요 업무 나타내기
            
const hoverItem = document.querySelector("#pWhite1");

// 팝업에 띄울 내용
const popupText = `
<h3>주요 업무 : </h3>
<p>MBC 디지털 자산 관리 시스템(DAMS), 콘텐츠 게이트웨이(CGW) 운영<br>MBC 콘텐츠 아카이브, 리트리브<br>MBC 콘텐츠 유통<br>(Wavve, 네이버 시리즈온 : API 연동방식 / IPTV, 쿠팡, 왓챠 등 : FTP 전송)<br>아카이브 솔루션(웹기반 아카이브, 리트리브 자동화 솔루션) 운영 및 장애조치<br>모니터링(AWS 인코더-Wavve Live, Samsung / NMS / T-peg / RTK)</p>`;

// 팝업(팝업처럼 보이는 div) 띄우기
const popup = document.createElement('div');
popup.id = 'popup';
hoverItem.append(popup);
popup.classList.add('popup-hide');

// 마우스 오버시 일어나는 동적 실행
hoverItem.addEventListener('mouseover', (e) => {
    popup.innerHTML = popupText;

    popup.style.left = e.clientX;

    popup.style.marginLeft = '540px';

    popup.classList.remove('popup-hide'); // 클래스 제거
    popup.classList.add('popup-show'); // 클래스 추가

});

// 마우스 땠을 시 일어나는 동적 실행
hoverItem.addEventListener('mouseout', () =>{
    // popup.style.display = 'none';
    popup.classList.add('popup-hide'); // 클래스 추가
    popup.classList.remove('popup-show'); // 클래스 제거
});

// 대학교 졸업 약력 마우스 오버 시 클릭하면 프로젝트 이동 안내 멘트 출력
const graduatedUniversity = document.querySelector("#pGray2");

const popupContent = '클릭 시 졸업작품 프로젝트 페이지로 이동합니다.'

const popup2 = document.createElement('div');
popup2.id = 'popup2';
graduatedUniversity.append(popup2);
popup2.classList.add('popup-hide');

graduatedUniversity.addEventListener('mouseover', (e) => {
    popup2.innerHTML = popupContent;

    popup2.style.left = e.clientX;

    popup2.style.marginLeft = '540px';

     popup2.classList.remove('popup-hide'); // 클래스 제거
     popup2.classList.add('popup-show'); // 클래스 추가
});

graduatedUniversity.addEventListener('mouseout', () => {
    popup2.classList.add('popup-hide'); // 클래스 제거
    popup2.classList.remove('popup-show'); // 클래스 추가
});

// 대학교 졸업 약력 클릭 시 졸업작품 프로젝트 이동
function openNewLink(e) {
    e.preventDefault();

    window.open("pastProject.html")
}

graduatedUniversity.addEventListener("click", openNewLink);