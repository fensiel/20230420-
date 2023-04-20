// let 참조변수 = setInterval(function(){코드},시간 간격(ms));
// let 참조변수 = setInterval("코드",시간간격(ms));


// let addNum = 0;
// let subNum = 1000;


// let auto_1 = setInterval(function(){
//     addNum++;
//     console.log("addNum:" + addNum);
//     // 이 코드는 문자열과 변수를 결합하는 것으로 문자열과 변수를 "+" 기호로
//     // 이어 붙이는 것이다.
//     // 문자열과 변수를 이어붙인 문자열을 콘솔에 출력하는 것이다.
//     // ex) "addNum:5"
// },3000);

// let auto_2 = setInterval(function(){
//     subNum--;
//     console.log("subNum:"+subNum);
// },3000);

// let PhoneNum = "010-2345-1234"
// let result_1 = PhoneNum.substring(0,PhoneNum.length-4)
// //PhoneNum의 인덱스 값인(0~PhoneNum)
// document.write(result_1,"****<br>");

let menu = ["짜장면","돈가스","된장국","김치찌개","회덮밥"];
let menuNum = Math.floor(Math.random() * menu.length);
let slectedMenu = menu[menuNum];
console.log(slectedMenu);
// Math.random은 0 이상 1미만의 난수를 생성하므로 이 값에 menu.length를 곱한뒤(5)
// ** menu.length는 menu의 배열의 길이 즉 요소의 개수를 나타내는 속성이다.
// Math.floor()를 이용하여 정수값을 얻는다.

