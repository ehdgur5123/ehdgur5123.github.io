// 배열에 미리 저장된 값
const Day01Values = ['capable', 'capture', 'anticipate', 'participate', 'conceive', 'deceive','perceive', 'receive', 'accept', 'contraception', 'except', 'intercept', 'susceptible', 'capital', 'cap', 'cape', 'cabbage', 'chief', 'achieve', 'chef', 'precede', 'recede', 'proceed', 'exceed', 'succeed', 'access', 'predecessor', 'incessant'];
const Day02Values = ['educate', 'introduce', 'reduce', 'produce', 'seduce', 'induce','deduce', 'duct', 'abduct', 'conduct', 'deduct', 'facility', 'facsimile', 'fact', 'factor', 'manufacture', 'faculty', 'affect', 'effect', 'defect', 'infect', 'artificial', 'deficient', 'sufficient', 'magnificent', 'proficient', 'profit', 'feat', 'defeat'];
const Day03Values = ['offer', 'transfer', 'refer', 'prefer', 'confer', 'defer', 'differ', 'suffer', 'infer', 'fertile', 'autograph', 'photograph', 'biography', 'calligraphy', 'geography', 'diagram', 'program', 'telegram', 'grammar', 'project', 'reject', 'inject', 'subject', 'object', 'adjective', 'jet'];
const Day04Values = ['prologue', 'dialogue', 'monologue', 'apology', 'logic', 'geology', 'physiology', 'psychology', 'theology', 'admit', 'commit', 'emit', 'omit', 'permit', 'remit', 'submit', 'transmit', 'mission', 'intermission', 'missile', 'dismiss', 'premise', 'promise', 'compromise', 'mess'];
const Day05Values = ['depend', 'expend', 'suspend', 'ponder', 'compensate', 'pension', 'complicate', 'duplicate', 'replicate', 'complicity', 'explicit', 'reply', 'apply', 'imply', 'deploy', 'employ', 'diploma', 'exploit', 'perplex', 'complex', 'simple', 'multiple'];

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
    } else if (table.id === 'Day03') {
        ValidValues = Day03Values;
    } else if (table.id === 'Day04') {
        ValidValues = Day04Values;
    } else if (table.id === 'Day05') {
        ValidValues = Day05Values;
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
