const boxes = document.querySelectorAll(".box");
const japan = document.querySelector(".japan");
const philippines = document.querySelector(".philippines");
const europe = document.querySelector(".europe");

const showAll = document.querySelector(".showAll");

// 창 열림 여부 true/false
// - 처음 로드되면 창이 떠있지 않으므로 false
let isOpen = false; // 전체보기 열림 여부
let japanOpen = false; // japan 열림 여부
let philippinesOpen = false; // 필리핀 열림 여부
let europeOpen = false; // 유럽 열림 여부

// 처음 화면은 아무것도 뜨지 않는다.
for(box of boxes) {
    box.style.display = "none"
}

// 전체보기
showAll.addEventListener('click', () => {
    // 전체보기를 보고 있다가도
    // 재팬, 유럽, 필리핀을 눌렀을 때 잘 뜰 수 있도록 Open = false
    japanOpen = false;
    philippinesOpen = false;
    europeOpen = false;

    // 만약 전체보기가 열려있지 않다면 전부 띄운다.
    if(!isOpen) {
        boxes[0].style.display = "block";
        boxes[1].style.display = "block";
        boxes[2].style.display = "block";
        isOpen = true; // 열림 상태로 변경
    } else { // 만약 전체보기가 열려있지 않다면 전부 닫는다.
        boxes[0].style.display = "none";
        boxes[1].style.display = "none";
        boxes[2].style.display = "none";
        isOpen = false; // 닫힘 상태로 변경
    }
});

// japan 클릭
japan.addEventListener('click', ()=>{
    // japan 보고 있다가도 다른 항목 눌렀을 때 잘 뜰 수 있도록 open을 false처리
    isOpen = false;
    philippinesOpen = false;
    europeOpen = false;

    // japan이 열려있지 않다면 japan만 띄운다.
    if(!japanOpen) {
        boxes[0].style.display = "block";
        boxes[1].style.display = "none";
        boxes[2].style.display = "none";
        japanOpen = true;
    } else { // 이미 열려있다면 다시 닫는다.
        boxes[0].style.display = "none";
        boxes[1].style.display = "none";
        boxes[2].style.display = "none";
        japanOpen = false;
    }
});

philippines.addEventListener('click', ()=>{
    isOpen = false;
    japanOpen = false;
    europeOpen = false;

    if(!philippinesOpen) {
        boxes[0].style.display = "none";
        boxes[1].style.display = "block";
        boxes[2].style.display = "none";
        philippinesOpen = true;
    } else {
        boxes[0].style.display = "none";
        boxes[1].style.display = "none";
        boxes[2].style.display = "none";
        philippinesOpen = false;
    }
});

europe.addEventListener('click', () => {
    isOpen = false;
    japanOpen = false;
    philippinesOpen = false;

    if(!europeOpen) {
        boxes[0].style.display = "none";
        boxes[1].style.display = "none";
        boxes[2].style.display = "block";
        europeOpen = true;
    } else {
        boxes[0].style.display = "none";
        boxes[1].style.display = "none";
        boxes[2].style.display = "none";
        europeOpen = false;
    }
});

const euroMap = document.querySelector(".europeMap");
euroMap.addEventListener('mouseover', () => {
    euroMap.style.width = "1100px";
    euroMap.style.cursor = 'pointer';
    euroMap.style.transition = "0.3s ease"
})

let isMoving = false;
euroMap.addEventListener('click', () => {
    const routeWrapper = document.querySelector(".routeImg");
    const routeDots = document.querySelectorAll(".routeDot");
    routeDots.forEach(routeDot => {
        routeDot.style.display = 'inline'
    })

    if(!isMoving) {
        const traveler = document.createElement('img');
        traveler.id = 'traveler';
        traveler.src = "/images/avatar.png";
        traveler.style.position = "absolute";
        traveler.style.width = "20px";
        traveler.style.top = "300px";
        traveler.style.left = "610px";
        traveler.style.animation = "route-animation 10s ease infinite";

        routeWrapper.appendChild(traveler);
        isMoving = true;
    }

})

 // 일본 - 루트 - 마우스 오버했을 시 이미지 띄우기
        // - 기요미즈데라
        const kiyoBox = document.createElement('div');
        kiyoBox.id = "kiyoBox";
        
        $(".kiyo").append(kiyoBox);
        kiyoBox.classList.add('hide');

        $(".kiyo").mouseover((e) => {
            kiyoBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/kiyo1.JPG" style="width: 100%; border-radius: 10px;">
                <p>기요미즈데라 가는길</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;" >
                <img src="../images/japan/kiyo2.JPG" style="width: 100%; border-radius: 10px;">
                <p>기요미즈데라</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/kiyo3.JPG" style="width: 100%; border-radius: 10px;">
                <p>기요미즈데라 경치</p>
            </div>`;

            kiyoBox.style.left = e.clientX;
            kiyoBox.classList.remove('hide');
            kiyoBox.classList.add('show');
        })

        $(".kiyo").mouseout(() => {
            kiyoBox.classList.remove('show');
            kiyoBox.classList.add('hide');
        })

        // - 금각사
        const goldBox = document.createElement('div');
        goldBox.id = "goldBox";
        
        $(".gold").append(goldBox);
        goldBox.classList.add('hide');

        $(".gold").mouseover((e) => {
            goldBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/gold1.JPG" style="width: 100%; border-radius: 10px;">
                <p>금각사</p>
            </div>`;

            goldBox.style.left = e.clientX;
            goldBox.style.margin = "0 60px"
            goldBox.classList.remove('hide');
            goldBox.classList.add('show');
        })

        $(".gold").mouseout(() => {
            goldBox.classList.remove('show');
            goldBox.classList.add('hide');
        })

        // - 신쿄고쿠
        const mallBox = document.createElement('div');
        mallBox.id = "mallBox";
        
        $(".mall").append(mallBox);
        mallBox.classList.add('hide');

        $(".mall").mouseover((e) => {
            mallBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/mall1.JPG" style="width: 100%; border-radius: 10px;">
                <p>신쿄고쿠</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/mall2.JPG" style="width: 100%; border-radius: 10px;">
                <p>교토 최대 쇼핑몰</p>
            </div>`;

            mallBox.style.left = e.clientX;
            mallBox.style.margin = "0 20px"
            mallBox.classList.remove('hide');
            mallBox.classList.add('show');
        })

        $(".mall").mouseout(() => {
            mallBox.classList.remove('show');
            mallBox.classList.add('hide');
        })

        // 여우신사
        const foxBox = document.createElement('div');
        foxBox.id = "foxBox";
        
        $(".fox").append(foxBox);
        foxBox.classList.add('hide');

        $(".fox").mouseover((e) => {
            foxBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/fox1.JPG" style="width: 100%; border-radius: 10px;">
                <p>여우신사</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/fox2.JPG" style="width: 100%; border-radius: 10px;">
                <p>여우신사</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/fox3.JPG" style="width: 100%; border-radius: 10px;">
                <p>여우신사</p>
            </div>`;

            foxBox.style.left = e.clientX;
            foxBox.style.margin = "0 60px"
            foxBox.classList.remove('hide');
            foxBox.classList.add('show');
        })

        $(".fox").mouseout(() => {
            foxBox.classList.remove('show');
            foxBox.classList.add('hide');
        })

        // 유니버셜 스튜디오
        const studioBox = document.createElement('div');
        studioBox.id = "studioBox";
        
        $(".studio").append(studioBox);
        studioBox.classList.add('hide');

        $(".studio").mouseover((e) => {
            studioBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/studio1.JPG" style="width: 100%; border-radius: 10px;">
                <p>유니버셜 스튜디오</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/studio2.JPG" style="width: 100%; border-radius: 10px;">
                <p>유니버셜 스튜디오</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/studio3.JPG" style="width: 100%; border-radius: 10px;">
                <p>유니버셜 스튜디오</p>
            </div>`;

            studioBox.style.left = e.clientX;
            studioBox.style.margin = "0 110px"
            studioBox.classList.remove('hide');
            studioBox.classList.add('show');
        })

        $(".studio").mouseout(() => {
            studioBox.classList.remove('show');
            studioBox.classList.add('hide');
        })

        // 하루카스
        const harukasBox = document.createElement('div');
        harukasBox.id = "harukasBox";
        
        $(".harukas").append(harukasBox);
        harukasBox.classList.add('harukasHide');

        $(".harukas").mouseover((e) => {
            harukasBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/harukas1.JPG" style="width: 100%; border-radius: 10px;">
                <p>하루카스</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/harukas2.JPG" style="width: 100%; border-radius: 10px;">
                <p>하루카스 300</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/harukas3.JPG" style="width: 100%; border-radius: 10px;">
                <p>야경보러가기 좋음</p>
            </div>`;

            harukasBox.style.left = e.clientX;
            harukasBox.style.margin = "0 210px"
            harukasBox.classList.remove('hide');
            harukasBox.classList.add('show');
        })

        $(".harukas").mouseout(() => {
            harukasBox.classList.remove('show');
            harukasBox.classList.add('hide');
        })

        // 도톤보리
        const dotonBox = document.createElement('div');
        dotonBox.id = "dotonBox";
        
        $(".doton").append(dotonBox);
        dotonBox.classList.add('hide');

        $(".doton").mouseover((e) => {
            dotonBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/doton1.JPG" style="width: 100%; border-radius: 10px;">
                <p>이치란 라멘</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/doton2.JPG" style="width: 100%; border-radius: 10px;">
                <p>시그니쳐</p>
            </div>`;

            dotonBox.style.left = e.clientX;
            dotonBox.style.margin = "0 450px"
            dotonBox.classList.remove('hide');
            dotonBox.classList.add('show');
        })

        $(".doton").mouseout(() => {
            dotonBox.classList.remove('show');
            dotonBox.classList.add('hide');
        })

        // 우메다
        const umedaBox = document.createElement('div');
        umedaBox.id = "umedaBox";
        
        $(".umeda").append(umedaBox);
        umedaBox.classList.add('hide');

        $(".umeda").mouseover((e) => {
            umedaBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/umeda1.JPG" style="width: 100%; border-radius: 10px;">
                <p>우메다 대관람차</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/umeda2.JPG" style="width: 100%; border-radius: 10px;">
                <p>전경</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/umeda3.JPG" style="width: 100%; border-radius: 10px;">
                <p>근처 스시</p>
            </div>`;

            umedaBox.style.left = e.clientX;
            umedaBox.style.margin = "0 400px"
            umedaBox.classList.remove('hide');
            umedaBox.classList.add('show');
        })

        $(".umeda").mouseout(() => {
            umedaBox.classList.remove('show');
            umedaBox.classList.add('hide');
        })

        // 오사카성
        const castleBox = document.createElement('div');
        castleBox.id = "castleBox";
        
        $(".castle").append(castleBox);
        castleBox.classList.add('hide');

        $(".castle").mouseover((e) => {
            castleBox.innerHTML = `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/castle1.JPG" style="width: 100%; border-radius: 10px;">
                <p>오사카 성</p>
            </div>
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="../images/japan/castle2.JPG" style="width: 100%; border-radius: 10px;">
                <p>둘레 호수</p>
            </div>`;

            castleBox.style.left = e.clientX;
            castleBox.style.margin = "0 550px"
            castleBox.classList.remove('hide');
            castleBox.classList.add('show');
        })

        $(".castle").mouseout(() => {
            castleBox.classList.remove('show');
            castleBox.classList.add('hide');
        })

// 리팩토링
// const travelSpots = [
//     {
//         element : '.kiyo',
//         images : [
//             {
//                 src: '../images/japan/kiyo1.JPG',
//                 alt: '기요미즈데라 가는길'
//             },
//             {
//                 src: '../images/japan/kiyo2.JPG',
//                 alt: '기요미즈데라'
//             },
//             {
//                 src: '../images/japan/kiyo3.JPG',
//                 alt: '기요미즈데라 경치'
//             }
//         ]
//     },
//     {
//         element : '.gold',
//         images : [
//             {
//                 src: '../images/japan/gold1.JPG',
//                 alt: '금각사'
//             }
//         ]
//     },
//     {
//         element : '.mall',
//         images : [
//             {
//                 src: '../images/japan/mall1.JPG',
//                 alt: '신쿄고쿠'
//             },
//             {
//                 src: '../images/japan/mall2.JPG',
//                 alt: '교토 최대 쇼핑몰'
//             }
//         ]
//     },
//     {
//         element : '.fox',
//         images : [
//             {
//                 src: '../images/japan/fox1.JPG',
//                 alt: '여우신사'
//             },
//             {
//                 src: '../images/japan/fox2.JPG',
//                 alt: '여우신사'
//             },
//             {
//                 src: '../images/japan/fox3.JPG',
//                 alt: '여우신사'
//             }
//         ]
//     },
//     {
//         element : '.studio',
//         images : [
//             {
//                 src: '../images/japan/studio1.JPG',
//                 alt: '유니버셜 스튜디오'
//             },
//             {
//                 src: '../images/japan/studio2.JPG',
//                 alt: '유니버셜 스튜디오'
//             },
//             {
//                 src: '../images/japan/studio3.JPG',
//                 alt: '유니버셜 스튜디오'
//             }
//         ]
//     },
//     {
//         element : '.harukas',
//         images : [
//             {
//                 src: '../images/japan/harukas1.JPG',
//                 alt: '하루카스'
//             },
//             {
//                 src: '../images/japan/harukas2.JPG',
//                 alt: '하루카스 300'
//             },
//             {
//                 src: '../images/japan/harukas3.JPG',
//                 alt: '야경보러가기 좋음'
//             }
//         ]
//     },
//     {
//         element : '.doton',
//         images : [
//             {
//                 src: '../images/japan/doton1.JPG',
//                 alt: '이치란 라멘'
//             },
//             {
//                 src: '../images/japan/doton2.JPG',
//                 alt: '시그니쳐'
//             }
//         ]
//     },
//     {
//         element : '.umeda',
//         images : [
//             {
//                 src: '../images/japan/umeda1.JPG',
//                 alt: '우메다 대관람차'
//             },
//             {
//                 src: '../images/japan/umeda2.JPG',
//                 alt: '전경'
//             },
//             {
//                 src: '../images/japan/umeda3.JPG',
//                 alt: '근처 스시'
//             }
//         ]
//     },
//     {
//         element : '.castle',
//         images : [
//             {
//                 src: '../images/japan/castle1.JPG',
//                 alt: '오사카 성'
//             },
//             {
//                 src: '../images/japan/castle2.JPG',
//                 alt: '둘레 호수'
//             }
//         ]
//     }
// ];

// travelSpots.forEach((travelSpot) => {
//     const container = document.querySelector(travelSpot.element);
//     const box = document.createElement('div');
//     box.id = "travelSpotBox";

//     container.append(box);
//     box.classList.add('hide');

//     container.addEventListener('mouseover', (e) => {
//         box.innerHTML = travelSpot.images.map((image) =>  `
//             <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
//                 <img src="${image.src}" style="width: 100%; border-radius: 10px;">
//                 <p>${image.alt}</p>
//             </div>
//         `).join('');

//         box.style.left = e.clientX;
//         box.style.margin = '0 60px';
//         box.classList.remove('hide');
//         box.classList.add('show');

//     });

//     container.addEventListener('mouseout', (e) => {
//         box.classList.remove('show');
//         box.classList.add('hide');
//     });

// });

