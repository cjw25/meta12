let heading = document.querySelector('#heading');
heading.onclick = function () {
    heading.style.color = 'red';
}

// alert("오늘은 자바스크립트 첫날")
confirm("확인 좀 하자");

document.write("<h1>어서오세요</h1>");

// 유저입력창
let username = prompt("이름을 입력하세요", "아무개");
// 콘솔창에 보이는 역할. 콘솔창은 개발자도구
console.log(username + "님, 환영합니다");

console.log('I\`m studying Javascript');