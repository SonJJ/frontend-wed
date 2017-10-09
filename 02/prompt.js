// var sign = prompt("What's your sign?");
//
// if (sign.toLowerCase() == "scorpio") {
//     alert("Wow! I'm a Scorpio too!");
// }
//
// // there are many ways to use the prompt feature
// var sign = window.prompt(); // open the blank prompt window
// var sign = prompt();       //  open the blank prompt window
// var sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
// var sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"
//

// var temp = null;
//
// while(sum==null){
//     sum = prompt("더할 숫자를 입력해주세요~",0)
//     temp = temp+sum;
//     if (sum==0){
//         alert(temp);
//
//     }
// }
var temp = 0;
var sum = 0;

for (var check = 1; check != 0;){
    temp = Number(prompt("더할 숫자를 입력해주세요."));
    //입력시 문자열로 입력됨, 형변환 필요
    sum = sum+temp;
    check = temp;
    //입렵값을 check에 넣어 for문에 조건을 확인할때 사용
    console.log(check);
    //console창에서 입력값과 취소 버튼을 눌렀을때 반환되는 값을 확인하기 위해 사용.
}
var sign = alert("결과값 : "+sum);
//결과를 보여줌.




