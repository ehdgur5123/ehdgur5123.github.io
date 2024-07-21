# Bandit Wargames

사이트 주소 : [Bandit Wargames](https://overthewire.org/wargames/bandit/)

## Level0

- 반딧 워게임에 접속하려면 ssh로 해당 서버에 접속해야함
- 터미널에 입력하면 된다

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

- username : `bandit0`  
- host : `bandit.labs.overthewire.org`  
- port : `2220`  
- password : `bandit0`  

## Level0 -> Level1

- 비밀번호는 홈디렉터리의 readme 파일에 있다.

```bash
cd ~ # 홈 디렉토리로 이동  
ls # 현재 디렉토리 목록 확인  
cat readme # readme 파일 보기  
```

- password : `ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If`

- 다음 레벨 진입을 위해 현재 ssh 종료

```bash
exit
```

- Level1 진입  
	- username : `bandit1`  
	- password : `ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If`

```bash
ssh bandit1@bandit.labs.overthewire.org -p 2220  
ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If  
```

## Level1 -> Level2

- 비밀번호는 홈디렉토리의 파일명이 `-`인 파일 안에 있다.
- 







































