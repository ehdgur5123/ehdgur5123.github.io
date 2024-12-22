// 배열에 미리 저장된 값
const validValues = ['banana', 'apple', 'cherry'];

// 입력 이벤트 처리 함수
function checkAndHighlight(event) {
    // 현재 입력된 값 가져오기
    const inputValue = event.target.value.trim().toLowerCase(); // 공백 제거 및 소문자 변환

    // 부모 <td> 요소 선택
    const cell = event.target.parentNode;

    // 일치 여부 확인
    if (validValues.includes(inputValue)) {
        // 값이 일치하면 클래스 추가
        cell.classList.add('match');
    } else {
        // 값이 일치하지 않으면 클래스 제거
        cell.classList.remove('match');
    }
}

// 테이블의 모든 <input> 요소에 이벤트 리스너 추가
const inputs = document.querySelectorAll('#myTable input');
inputs.forEach(input => {
    input.addEventListener('input', checkAndHighlight); // 입력할 때마다 확인
});
