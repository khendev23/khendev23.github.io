const firstBox = document.querySelector(".first");
const thirdBox = document.querySelector(".third");
const fifthBox = document.querySelector(".fifth");
const seventhBox = document.querySelector(".seventh");
const tenthBox = document.querySelector(".tenth");

const boxes = [firstBox, thirdBox, fifthBox, seventhBox, tenthBox];
for(let i = 0; i<boxes.length; i++) {
    boxes[i].addEventListener('mouseover', () => {
        boxes[i].style.opacity = '1';
    })
}

let isOpen = false;
$(".ffmpeg").click(() => {
    const ffmpegBox = document.createElement('div');
    ffmpegBox.id = 'ffmpegBox';
    ffmpegBox.innerHTML = `
    <h3>FFMPEG?</h3>
    <p>마이클 니더마이어(Michael Niedermayer)의 주도하에 개발되고 있는 모든 동영상, 음악, 사진 포맷들의 디코딩과 인코딩을 목표로 만들어지고 있는 오픈 소스</p>`;
    if(!isOpen) {
        $(".section").append(ffmpegBox);
        isOpen = true;
    }
})