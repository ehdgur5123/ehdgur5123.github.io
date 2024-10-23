---
layout: single
title: "리눅스 명령어의 종류"
categories: Linux
tag: [Linux]
permalink : /posts/LinuxCommand-List/
classes : custom-style
toc: true
author_profile: false
sidebar:
  nav: "Linux"
---

<hr>

# 1. 파일 및 디렉토리 관리

- `ls`: 디렉토리 내 파일 및 폴더 목록을 표시합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-ls))
- `cd`: 디렉토리 이동 명령어입니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-cd))
- `pwd`: 현재 작업 중인 디렉토리의 절대 경로를 출력합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-pwd))
- `mkdir`: 새로운 디렉토리를 생성합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-mkdir))
- `rmdir`: 비어 있는 디렉토리를 삭제합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-rmdir))
- `rm`: 파일 또는 디렉토리를 삭제합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-rm))
- `cp`: 파일이나 디렉토리를 복사합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-cp))
- `mv`: 파일이나 디렉토리를 이동하거나 이름을 변경합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-mv))
- `touch`: 새로운 빈 파일을 생성하거나 기존 파일의 타임스탬프를 변경합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-touch))
- `find`: 파일 및 디렉토리를 검색합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-find))
- `du`: 디스크 사용량을 확인합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-du))
- `df`: 파일 시스템의 디스크 사용량을 확인합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-df))
- `ln`: 하드 링크 및 심볼릭 링크를 생성합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-ln))
- `file` : 파일의 타입을 식별할 때 사용합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-file))
- `rename` : 파일명 또는 디렉토리명을 일괄적으로 변경합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-rename))

# 2. 파일 내용 관리

- `cat`: 파일 내용을 출력합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-cat))
- `more`: 파일 내용을 페이지 단위로 출력합니다.
- `less`: more 명령어와 비슷하지만, 더 다양한 탐색 기능을 제공합니다.
- `head`: 파일의 처음 몇 줄을 출력합니다.
- `tail`: 파일의 마지막 몇 줄을 출력합니다.
- `grep`: 텍스트 파일에서 특정 패턴을 검색합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-grep))
- `sort`: 파일의 내용을 정렬합니다.
- `wc`: 파일의 라인, 단어, 문자 개수를 계산합니다.
- `diff`: 두 파일의 차이점을 비교합니다.
- `uniq`: 중복된 줄을 제거하여 유일한 줄만 출력합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-uniq))
- `sed`: 파일의 내용을 검색, 변환, 필터링하는 스트림 편집기입니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-sed))

# 3. 프로세스 관리

- `ps`: 현재 실행 중인 프로세스 목록을 표시합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-ps))
- `top`: 실시간으로 시스템의 프로세스 상태를 모니터링합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-top))
- `htop`: top 명령어의 개선된 버전으로, 더 직관적인 인터페이스를 제공합니다.
- `kill`: 프로세스를 종료합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-kill))
- `pkill`: 이름을 기반으로 프로세스를 종료합니다.
- `bg`: 백그라운드에서 작업을 실행합니다.
- `fg`: 포어그라운드에서 백그라운드 작업을 가져옵니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-fg))
- `jobs`: 현재 쉘 세션에서 백그라운드 작업을 나열합니다.

# 4. 사용자 관리

- `useradd`: 새로운 사용자를 생성합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-useradd))
- `usermod`: 기존 사용자 정보를 수정합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-usermod))
- `userdel`: 사용자를 삭제합니다.
- `passwd`: 사용자의 비밀번호를 변경합니다.
- `groupadd`: 새로운 그룹을 생성합니다.
- `groupdel`: 그룹을 삭제합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-groupdel))
- `groups`: 사용자가 속한 그룹 목록을 출력합니다.
- `id`: 사용자 및 그룹 정보를 확인할 때 사용하는 명령어(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-id))

# 5. 네트워크 관리

- `ifconfig`: 네트워크 인터페이스 설정 및 상태를 확인합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-ifconfig))
- `ip`: 네트워크 인터페이스, 라우팅, 네트워크 장치 관리 등을 수행(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-ip))
- `ping`: 특정 호스트에 대한 네트워크 연결을 확인합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-ping))
- `netstat`: 네트워크 연결, 라우팅 테이블 등을 표시합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-netstat))
- `ssh`: 원격 서버에 안전하게 접속합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-ssh))
- `scp`: 원격 서버와 파일을 안전하게 복사합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-scp))
- `wget`: 웹에서 파일을 다운로드합니다.
- `curl`: 데이터를 전송하거나 다운로드합니다.
- `host`: DNS의 정보를 조회합니다(비대화형 모드).(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-host))
- `nslookup`: DNS의 정보를 조회합니다(대화형 모드).(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-nslookup))
- `whois`: 도메인 이름 또는 IP 주소에 대한 등록 정보를 조회(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-whois))

# 6. 시스템 정보 확인

- `uname`: 시스템 정보를 확인합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-uname))
- `hostname`: 시스템의 호스트네임을 표시하거나 변경합니다.
- `uptime`: 시스템의 가동 시간과 로드 평균을 확인합니다.
- `dmesg`: 시스템 부팅 로그를 확인합니다.
- `free`: 시스템의 메모리 사용량을 확인합니다.
- `vmstat`: 시스템 성능을 모니터링합니다.
- `lscpu`: CPU 정보를 확인합니다.
- `lsblk`: 블록 장치 정보를 확인합니다.

# 7. 압축 및 아카이브

- `tar`: 파일을 아카이브하고 압축합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-tar))
- `zip`: 파일을 압축합니다.
- `unzip`: 압축된 파일을 해제합니다.
- `gzip`: 파일을 gzip 형식으로 압축합니다.
- `gunzip`: gzip 압축을 해제합니다.

# 8. 패키지 관리

- `apt-get`: Debian 계열 시스템에서 패키지를 설치, 업그레이드 및 제거합니다.
- `yum`: RedHat 계열 시스템에서 패키지를 설치, 업그레이드 및 제거합니다.
- `dnf`: yum의 차세대 패키지 관리 도구로, RedHat 계열에서 사용됩니다.
- `pacman`: Arch Linux에서 패키지를 관리합니다.

# 9. 권한 및 사용자 관리
- `sudo`: 슈퍼유저 권한으로 명령어를 실행합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-sudo))
- `su`: 사용자 전환 명령어로, 다른 사용자로 전환합니다.
- `chmod`: 파일 및 디렉토리 권한을 변경합니다.
- `chown`: 파일 또는 디렉토리의 소유자 및 그룹을 변경합니다.

# 10. 디스크 관리
- `fdisk`: 디스크 파티션을 관리합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-fdisk))
- `mkfs`: 파일 시스템을 생성합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-mkfs))
- `mount`: 파일 시스템을 마운트합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-mount))
- `umount`: 파일 시스템을 언마운트합니다.(👉 [자세히 보기](https://ehdgur5123.github.io/posts/LinuxCommand-umount))