


# 아직 정리 중

## 4. 패턴 탐색

### 전방 탐색(패턴1(?=패턴2))

`패턴1(?=패턴2)`은 **전방 탐색**<sup>Lookahead</sup> 표현식으로, 뒤의 `패턴2`가 **일치할 경우** 앞의 `패턴1`에 해당하는 문자를 매칭

<small><b>패턴</b>이 문자가 될 수도 있고, 또 다른 표현식이 될 수도 있어 '패턴'이라고 표현하였음</small>

```python
import re
text = ['12txt34','12pdf34','1x23txt']

for i in text:
  result = re.search(r'\d+(?=txt)',i)
  print(i,': ',result)
```

`\d+(?=txt)`은 뒤에 `txt`가 있을 경우 '숫자 문자'(`\d`)가 '한 번 이상 반복되는 것'(`+`)을 매칭

```
12txt34 :  <re.Match object; span=(0, 2), match='12'>
12pdf34 :  None
1x23txt :  <re.Match object; span=(2, 4), match='23'>
```

- `12txt34`는 패턴2(`txt`) 앞의 패턴1(`\d+`)에 해당하는 숫자 `12`를 매칭
- `12pdf34`는 패턴2(`txt`)가 없으므로 `None`
- `1x23txt`는 패턴2(`txt`) 앞의 패턴1(`\d+`)에 해당하는 숫자 `23`을 매칭

### 부정 전방 탐색(패턴1(?!패턴2))

`패턴1(?!패턴2)`은 **부정 전방 탐색**<sup>Negative Lookahead</sup> 표현식으로, 뒤의 `패턴2`가 **일치하지 않을 경우** 앞의 `패턴1`에 해당하는 문자를 매칭

```python
import re
text = ['12txt34','12pdf34','txt1234txt']

for i in text:
  result = re.search(r'\d+(?!txt)',i)
  print(i,': ',result)
```

`\d+(?!txt)`은 뒤에 `txt`가 없을 경우 '숫자 문자'(`\d`)가 '한 번 이상 반복되는 것'(`+`)을 매칭

```
12txt34 :  <re.Match object; span=(0, 1), match='1'>
12pdf34 :  <re.Match object; span=(0, 2), match='12'>
txt1234txt :  <re.Match object; span=(3, 6), match='123'>
```

- `12txt34`는 패턴1(`\d+`)에 해당하는 숫자 `1`,`2` 중 `2` 뒤에 패턴2(`txt`)가 있으므로 숫자 `1`만 매칭(`match='1'`) 
- `12pdf34`는 패턴1(`\d+`)에 해당하는 숫자 `1`,`2` 다음에 패턴1(`\d+`)에 해당하지 않는 문자 `p`가 나오므로 숫자 `12`만 매칭(match='12')
- `txt1234txt`에서 처음의 `txt`는 패턴1(`\d+`)에 해당하지 않으므로 매칭하지 않고, 패턴1에 해당하는 숫자 `1234` 중 `4` 뒤에 패턴2(`txt`)가 있으므로 숫자 `123`만 매칭(`match='123'`)

### 후방 탐색((?<=패턴2)패턴1) 

`(?<=패턴2)패턴1`은 **후방 탐색**<sup>Lookbehind</sup> 표현식으로, 앞의 `패턴2`가 **일치할 경우** 뒤의 `패턴1`에 해당하는 문자를 매칭

```python
import re
text = ['12txt34','12pdf34','txt1234txt']

for i in text:
  result = re.search(r'(?<=txt)\d+',i)
  print(i,': ',result)
```

`(?<=txt)\d+`은 앞에 `txt`가 있을 경우 뒤의 '숫자 문자'(`\d`)가 '한 번 이상 반복되는 것'(`+`)을 매칭

```
12txt34 :  <re.Match object; span=(5, 7), match='34'>
12pdf34 :  None
txt1234txt :  <re.Match object; span=(3, 7), match='1234'>
```

- `12txt34`은 `txt` 뒤의 숫자 문자 `34`를 매칭
- `12pdf34`은 `txt`가 없으므로 `None`
- `txt1234txt`은 처음 `txt` 뒤의 숫자 문자인 `1234`를 매칭

### 부정 후방 탐색((?<!패턴2)패턴1) 

`(?<!패턴2)패턴1`은 **부정 후방 탐색**<sup>Negative Lookbehind</sup> 표현식으로, 앞의 `패턴2`가 **일치하지 않을 경우** 뒤의 `패턴1`에 해당하는 문자를 매칭

```python
import re
text = ['12txt34','12pdf34','txt1234txt']

for i in text:
  result = re.search(r'(?<!txt)\d+',i)
  print(i,': ',result)
```

`(?<!txt)\d+`은 앞에 `txt`가 없을 경우 뒤의 '숫자 문자'(`\d`)가 '한 번 이상 반복되는 것'(`+`)을 매칭

```
12txt34 :  <re.Match object; span=(0, 2), match='12'>
12pdf34 :  <re.Match object; span=(0, 2), match='12'>
txt1234txt :  <re.Match object; span=(4, 7), match='234'>
```

- `12txt34`은 숫자 문자인 `12` 앞에 `txt`가 없으므로 `12`를 매칭
- `12pdf34`은 숫자 문자인 `12` 앞에 `txt`가 없으므로 `12`를 매칭
- `txt1234txt`은 숫자 문자인 `1` 앞에 `txt`가 있으므로 `1`을 제외한 숫자 문자인 `234`를 매칭

## 6. 그룹 캡처 및 참조

9. 그룹 캡처 및 참조: ( )
정의: 괄호로 묶인 부분을 그룹으로 캡처하고, 나중에 참조할 수 있음.
예시: (a)(b)\1\2는 "abab"와 일치 (\1은 첫 번째 그룹, \2는 두 번째 그룹 참조).

10. (?:...) (Non-capturing Group)
정의: 그룹화는 하지만 캡처하지 않음.
예시: (?:a|b)c는 "ac" 또는 "bc"와 매칭하지만, 그룹으로 캡처하지 않음.

11. *?, +?, {m,n}? (Lazy Quantifiers)
정의: 기본적으로 *, +, {m,n}는 **greedy(탐욕적)**으로 가능한 많은 문자를 매칭하려고 하지만, lazy는 최소한의 매칭을 시도.
예시: a.*?b는 "a"와 "b" 사이의 최소한의 문자열을 매칭.

12. (?P<name>...) (Named Group)
정의: 그룹에 이름을 붙이고, 이름으로 참조할 수 있음.
예시: (?P<number>\d+)는 그룹에 "number"라는 이름을 붙임.

13. (?P=name) (Named Group Backreference)
정의: 앞서 명명된 그룹을 참조.
예시: (?P<number>\d+)-(?P=number)는 같은 숫자가 두 번 나오면 매칭.

14. (?#...) (Comment)
정의: 주석을 추가할 수 있는 기능.
예시: \d+(?#This is a digit)는 숫자를 매칭하면서 주석을 추가.

## PCRE 플래그

**PCRE(Perl Compatible Regular Expressions)**에서 **플래그**는 **정규 표현식의 동작을 제어**하거나 **특정 기능을 활성화**하는 옵션입니다. 이를 통해 대소문자 구분을 무시하거나, 멀티라인 매칭 등을 가능하게 할 수 있습니다. Python의 `re` 모듈이나 리눅스의 `grep -P` 명령어에서 사용되는 플래그와 매우 유사한 방식으로 PCRE에서도 동작합니다.

## 6. 패턴 매칭(m//)

`m//`는 **특정 패턴이 문자열 내에 존재하는지 확인**할 때 사용됩니다. `Perl`에서는 패턴 매칭을 수행할 때 `m`을 생략할 수 있으므로, 일반적으로는 `//` 형태로 사용합니다.

### 기본 구문

```bash
m/패턴/옵션
```

## 7. m{} 및 s{}와 m() 및 s(): 구분자 조합 사용

`Perl`에서는 `s///`와 `m//`에서 기본 구분자인 `/` 외에도, `{}`, `()`, `<>`와 같은 구분자를 사용할 수 있습니다. 이러한 대체 구문을 사용하면 구분자 자체가 패턴에 포함될 때 좀 더 명확하고 **가독성 높은 코드**를 작성할 수 있습니다.
