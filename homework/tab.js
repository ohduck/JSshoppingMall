var 버튼들 = document.querySelectorAll('.tab-button');
var div들 = document.querySelectorAll('.tab-content');

for ( let i = 0; i < 3; i++ ){
  
  버튼들[i].addEventListener('click', function(){
    document.querySelector('.orange').classList.remove('orange');
    document.querySelector('.show').classList.remove('show');
    버튼들[i].classList.add('orange');
    div들[i].classList.add('show');
  });
}

for ( var i = 0; i < 3; i++ ){
  console.log(i)
}

//원리 : i = 0 부터 1더하면서 3되기 전까지 도셈 







//0번째버튼을 누르면..
//음... orange라는 클래스명이 있는 요소는 orange 제거 
//음... show라는 클래스명이 있는 요소는 show 제거
//0번째버튼에 오렌지색칠하고 (orange 클래스 추가)
//0번째div를 보여줌 (show 클래스 추가)

//1번째버튼을 누르면..
//음... orange라는 클래스명이 있는 요소는 orange 제거 
//음... show라는 클래스명이 있는 요소는 show 제거
//1번째버튼에 오렌지색칠하고 (orange 클래스 추가)
//1번째div를 보여줌 (show 클래스 추가)

