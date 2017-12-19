//start...
console.log('todos.js'); //1.연결상태 확인

// //3.id가 string인 element를 가져옴
// var todoStringField = document.getElementById('String');
// console.log(todoStringField);//4.잘 가져왔는지 확인

//4. 3번을 함수화, 자주사용되서
function getDom(id){
    return document.getElementById(id);
}
var todoStringField = getDom('String');
console.log(todoStringField);

//6. 입력창 keyup 이벤트 생성
todoStringField.addEventListener('keyup', function(evnet){
    //키입력을 잘받는지 확인
    console.log('todoStringField keyup!');

    //7. 엔터키입력시 저장하기, 엔터키코드==13
    if(event.keyCode===13){
        //value에 들어온 데이터 확인, newTodo와 동일해서 주석처리
        // console.log(todoStringField.value);

        var newTodo = todoStringField.value;
        //빈공간으로 다시 초기화
        todoStringField.value ="";
        //newTodo에 들어간 데이터 확인
        console.log('새로운 Todo: ',newTodo);

        //9.newTodo를 리스트에 집어넣기
        var listDom = getDom('todoList');
        listDom.innerHTML += '\
            <li>\
                <button class="delete"></button>\
                <input type="checkbox" class="toggle-checked">\
                <span class="text">'+newTodo+'</span>\
            </li>';

    }
});




