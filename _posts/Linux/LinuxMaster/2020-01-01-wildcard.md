---
layout: single
title: "와일드 카드"
categories: Linux
tag: [Linux]
permalink : /posts/LinuxMaster-01/
classes : custom-style
toc: true
author_profile: false
sidebar:
  nav: "Linux"
---

<hr>

# 와일드카드(wildcard)

**와일드카드(wildcard)**는 파일이나 디렉터리를 검색할 때 특정 패턴에 맞는 파일이나 디렉터리를 선택하기 위해 사용하는 특수 문자로 주로 **쉘(Shell)**에서 사용됨



* (asterisk):

의미: 0개 이상의 문자를 대체합니다.
사용 예시:
*.txt는 .txt로 끝나는 모든 파일을 의미합니다. (file.txt, document.txt 등)
file*는 file로 시작하는 모든 파일을 의미합니다. (file1.txt, file2.doc, file_data.csv 등)
? (question mark):

의미: 정확히 1개의 문자를 대체합니다.
사용 예시:
file?.txt는 file1.txt, file2.txt와 같은 1글자 차이의 파일을 의미합니다. (file12.txt는 포함되지 않음)
[] (square brackets):

의미: 대괄호 안에 있는 문자들 중 하나와 일치합니다.
사용 예시:
file[1-3].txt는 file1.txt, file2.txt, file3.txt를 의미합니다.
file[abc].txt는 filea.txt, fileb.txt, filec.txt를 의미합니다.
{} (curly brackets):

의미: 중괄호 안에 있는 여러 패턴 중 하나와 일치합니다.
사용 예시:
file{1,2,3}.txt는 file1.txt, file2.txt, file3.txt를 의미합니다.
file{a,b,c}.txt는 filea.txt, fileb.txt, filec.txt를 의미합니다.


1. [^] (negation in square brackets)
의미: 대괄호 안에 있는 문자들 중 하나가 아닌 것과 일치합니다.
사용 예시:
file[^1-3].txt는 file1.txt, file2.txt, file3.txt를 제외한 file4.txt, filea.txt 등과 일치합니다.
2. ** (double asterisk)
의미: 모든 디렉터리와 하위 디렉터리를 재귀적으로 검색합니다.

사용 예시:

**/*.txt는 현재 디렉터리와 모든 하위 디렉터리에서 .txt 파일을 검색합니다.
src/**/file*.c는 src 디렉터리 아래의 모든 하위 디렉터리에서 file로 시작하고 .c로 끝나는 파일을 검색합니다.
참고: 이 패턴은 주로 Bash의 "globstar" 옵션을 활성화했을 때 사용할 수 있습니다. 이 옵션을 활성화하려면 shopt -s globstar 명령을 사용합니다.

3. ~ (tilde)
의미: 사용자의 홈 디렉터리를 나타냅니다.
사용 예시:
~/*.txt는 현재 사용자의 홈 디렉터리에서 .txt 파일을 검색합니다.
~username/*.txt는 username 사용자의 홈 디렉터리에서 .txt 파일을 검색합니다.
4. $ (dollar sign)
의미: 정규 표현식(regular expression)에서 문자열의 끝을 나타냅니다.
사용 예시:
정규 표현식을 사용하여 파일 이름의 끝을 지정할 때 유용합니다.
5. ! (exclamation mark)
의미: 부정(Negation) 의미를 가집니다.
사용 예시:
find /path/to/search -not -name "*.txt"는 .txt로 끝나지 않는 모든 파일을 찾습니다.
6. + (plus sign)
의미: 정규 표현식에서 1개 이상의 문자가 반복되는 패턴을 나타냅니다.
사용 예시:
grep -E "file.+" directory/는 file로 시작하고 뒤에 1개 이상의 문자가 오는 모든 파일을 찾습니다.
7. {} (curly braces) with sequence
의미: 숫자 또는 문자 시퀀스를 생성합니다.
사용 예시:
file{1..5}.txt는 file1.txt, file2.txt, file3.txt, file4.txt, file5.txt를 생성합니다.
file{a..c}.txt는 filea.txt, fileb.txt, filec.txt를 생성합니다.
8. Regular Expressions (Regex)
정규 표현식은 와일드카드보다 훨씬 복잡하고 강력한 패턴 매칭 방법입니다. 쉘에서 grep, sed, awk 등의 명령어와 함께 사용됩니다.
예를 들어, grep -E "file[0-9]{2,}.txt"는 file로 시작하고 숫자가 2개 이상 이어지며 .txt로 끝나는 파일을 찾습니다.
이 외에도 특정 쉘이나 환경에서 제공하는 다양한 고급 패턴 매칭 기능이 있습니다. 그러나 일반적으로 많이 사용하는 와일드카드는 위에서 설명한 *, ?, [], {} 등입니다.