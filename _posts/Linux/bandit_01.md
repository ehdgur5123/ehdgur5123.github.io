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

- cat 명령어 : 파일의 내용을 터미널에 출력 

- `.`은 현재 디렉토리를 의미

	```bash
	cat ./-
	```

- password : 263JGJPfgU6LtdEvgfWU1XP5yac29mFx

## Level2 -> Level3

- 비밀번호는 홈디렉토리의 파일명이 `spaces in this filename`인 파일 안에 있다.

- 파일명에 공백이 있을 시, `\ `을 입력해야 공백이 인식된다.

- `cat ./spa`만 입력하고 `Tab`을 누르면 자동으로 입력된다.

	```bash
	cat ./spaces\ in\ this\ filename 
	```

- password : MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx

## Level3 -> Level4

- 비밀번호는 'inhere' 디렉토리의 숨겨진 파일에 있다.

	```bash
	cd inhere # 'inhere' 디렉토리로 이동
	ls -a # 숨겨진 파일을 포함한 모든 파일 목록을 출력
	cat ./...Hiding-From-You # 숨겨진 파일(...Hiding-From-You)의 내용을 출력
	```

- password : 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ

## Level4 -> Level5

- 비밀번호는 'inhere' 디렉토리의 사람이 읽을 수 있는 파일에 있다.

- file 명령어 : 파일의 종류와 파일 정보를 출력 

- `file ./-file0*`은 *-file0*로 시작하는 모든 파일의 정보를 출력

	```bash
	bandit4@bandit:~$ cd inhere/
	Pbandit4@bandit:~/inhere$ ls
	-file00  -file02  -file04  -file06  -file08
	-file01  -file03  -file05  -file07  -file09
	bandit4@bandit:~/inhere$ file ./-file0*
	./-file00: data
	./-file01: data
	./-file02: data
	./-file03: data
	./-file04: data
	./-file05: data
	./-file06: data
	./-file07: ASCII text
	./-file08: data
	./-file09: data
	bandit4@bandit:~/inhere$ cat ./-file07
	4oQYVkxZOOEOO5pTW81FB8j8lxXGUQw
	```

- password : 4oQYVkxZOOEOO5pTW81FB8j8lxXGUQw

## Level5 -> Level6





























