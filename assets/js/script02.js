// 배열에 미리 저장된 값
const Day01Values = ['banana', 'apple', 'cherry'];
const Day02Values = ['induce', 'reduce', 'seduce'];

// 입력 이벤트 처리 함수
function checkAndHighlight(event) {
    // 현재 입력된 값 가져오기
    const inputValue = event.target.value.trim().toLowerCase(); // 공백 제거 및 소문자 변환

    // 부모 <table> 요소 확인
    const table = event.target.closest('table');
    let ValidValues = [];

    if (table.id === 'Day01') {
        ValidValues = Day01Values;
    } else if (table.id === 'Day02') {
        ValidValues = Day02Values;
    }

    // 부모 <td> 요소 선택
    const cell = event.target.parentNode;

    // 일치 여부 확인
    if (ValidValues.includes(inputValue)) {
        // 값이 일치하면 클래스 추가
        cell.classList.add('match');
    } else {
        // 값이 일치하지 않으면 클래스 제거
        cell.classList.remove('match');
    }
}

// 테이블의 모든 <input> 요소에 이벤트 리스너 추가
const inputs = document.querySelectorAll('table input');
inputs.forEach(input => {
    input.addEventListener('input', checkAndHighlight); // 입력할 때마다 확인
});
