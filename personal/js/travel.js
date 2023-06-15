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
        traveler.src = "images/avatar.png";
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
const travelSpots = [
    {
        element : '.kiyo',
        images : [
            {
                src: '../images/japan/kiyo1.JPG',
                alt: '기요미즈데라 가는길'
            },
            {
                src: '../images/japan/kiyo2.JPG',
                alt: '기요미즈데라'
            },
            {
                src: '../images/japan/kiyo3.JPG',
                alt: '기요미즈데라 경치'
            }
        ],
        margin : '0'
    },
    {
        element : '.gold',
        images : [
            {
                src: '../images/japan/gold1.JPG',
                alt: '금각사'
            }
        ],
        margin : '0 60px'
    },
    {
        element : '.mall',
        images : [
            {
                src: '../images/japan/mall1.JPG',
                alt: '신쿄고쿠'
            },
            {
                src: '../images/japan/mall2.JPG',
                alt: '교토 최대 쇼핑몰'
            }
        ],
        margin : '0 20px'
    },
    {
        element : '.fox',
        images : [
            {
                src: '../images/japan/fox1.JPG',
                alt: '여우신사'
            },
            {
                src: '../images/japan/fox2.JPG',
                alt: '여우신사'
            },
            {
                src: '../images/japan/fox3.JPG',
                alt: '여우신사'
            }
        ],
        margin : '0 60px'
    },
    {
        element : '.studio',
        images : [
            {
                src: '../images/japan/studio1.JPG',
                alt: '유니버셜 스튜디오'
            },
            {
                src: '../images/japan/studio2.JPG',
                alt: '유니버셜 스튜디오'
            },
            {
                src: '../images/japan/studio3.JPG',
                alt: '유니버셜 스튜디오'
            }
        ],
        margin : '0 110px'
    },
    {
        element : '.harukas',
        images : [
            {
                src: '../images/japan/harukas1.JPG',
                alt: '하루카스'
            },
            {
                src: '../images/japan/harukas2.JPG',
                alt: '하루카스 300'
            },
            {
                src: '../images/japan/harukas3.JPG',
                alt: '야경보러가기 좋음'
            }
        ],
        margin : '0 210px'
    },
    {
        element : '.doton',
        images : [
            {
                src: '../images/japan/doton1.jpg',
                alt: '이치란 라멘'
            },
            {
                src: '../images/japan/doton2.JPG',
                alt: '시그니쳐'
            }
        ],
        margin : '0 450px'
    },
    {
        element : '.umeda',
        images : [
            {
                src: '../images/japan/umeda1.JPG',
                alt: '우메다 대관람차'
            },
            {
                src: '../images/japan/umeda2.JPG',
                alt: '전경'
            },
            {
                src: '../images/japan/umeda3.JPG',
                alt: '근처 스시'
            }
        ],
        margin : '0 400px'
    },
    {
        element : '.castle',
        images : [
            {
                src: '../images/japan/castle1.JPG',
                alt: '오사카 성'
            },
            {
                src: '../images/japan/castle2.JPG',
                alt: '둘레 호수'
            }
        ],
        margin : '0 550px'
    }
];

travelSpots.forEach((travelSpot) => {
    const container = document.querySelector(travelSpot.element);
    const box = document.createElement('div');
    box.id = "travelSpotBox";

    container.append(box);
    box.classList.add('hide');

    container.addEventListener('mouseover', (e) => {
        box.innerHTML = travelSpot.images.map((image) =>  `
            <div style="width: 200px; margin: 15px; text-align: center; border-radius: 10px;">
                <img src="${image.src}" style="width: 100%; border-radius: 10px;">
                <p>${image.alt}</p>
            </div>
        `).join('');

        box.style.left = e.clientX;
        box.style.margin = travelSpot.margin;
        box.classList.remove('hide');
        box.classList.add('show');

    });

    container.addEventListener('mouseout', (e) => {
        box.classList.remove('show');
        box.classList.add('hide');
    });

});

