
# 하루, 셈
[작성 중....]
> FlowCamp Week3 2분반

- React-Native 기반의 안드로이드 일기 작성 어플리케이션입니다.
- 시간이 지나며, 동일한 질문에 따른 답변의 변화를 보고 싶어서 시작하게 된 앱입니다.
- 응답을 바탕으로 점수가 계산되어 사용자는 하루의 인상깊음의 정도를 한눈에 확인할 수 있게 됩니다.
  
- 질문 템플릿을 만들어, 설정한 주기에 따라 동일한 질문에 대한 답변을 계속해서 작성할 수 있습니다.
- 그룹에 가입, 생성 및 탈퇴할 수 있습니다.
- 그룹 멤버들 간 미션에 맞게 공유되는 한줄 일기를 작성하고 좋아요로 상호작용할 수 있습니다.
- 그룹 별로 닉네임과 한 줄 소개를 다르게 설정하여 프로필을 만들 수 있습니다.

### A. 개발 팀원

- [오지환](https://github.com/jihwan01)
- [엄창용](https://github.com/um8389)
- [백엔드 레포지토리]([https://github.com/weGround/weG_background](https://github.com/ImpDay/Imp_Server))

### B. 개발 환경

- OS: Windows 11(22H2)
- Framework : React-native, express.js
- Target : Android & IOS
- Language: Java Script
- IDE : Android Studio, VScode
- Database : Mysql
---

### C. 어플리케이션 소개

### 1. 로그인 화면

| ![KakaoTalk_20230717_220540837](https://github.com/ImpDay/Imp_Front/assets/61741090/64d6e6f8-e6bc-43b3-9328-0f38c86374d4) | ![KakaoTalk_20230717_220540837_01](https://github.com/ImpDay/Imp_Front/assets/61741090/5f7132ce-53c3-49b3-bc03-099c2b785048) |
| -------------------------- | ------------------------------------------------ |

#### Major features

- ID와 비밀번호를 입력한 후 sign up을 누르면 회원가입이 완료됩니다.
- 유효한 ID와 비밀번호를 입력한 후 sign in을 누르면 로그인이 완료됩니다.
- 유효하지 않은 ID와 비밀번호일 경우 로그인이 되지 않고 다시 로그인을 시도하게 됩니다.
- 카카오 버튼을 누르면 카카오 계정과 연동한 로그인 기능을 제공합니다.

### 2. Home 탭

| ![KakaoTalk_20230717_220540837_02](https://github.com/ImpDay/Imp_Front/assets/61741090/c0184d5b-86f9-413c-9770-dbe7a28ebcf5)  | ![KakaoTalk_20230727_194804668_10](https://github.com/ImpDay/Imp_Front/assets/61741090/5ff02d96-dbe1-4251-9032-bed954d142d2)|
| -------------------------- | ------------------------------------------------ |

#### Major features

- 사용자가 만든 질문 템플릿 목록을 보여줍니다.
  - 설정한 주기에 따라 남은 일자를 띄우고, 남은 일자에 따라 테두리를 초록색으로 강조해줍니다.
- 사용자의 하루 점수에 따라 색깔을 다르게 캘린더에 표시해줍니다.
- 템플릿을 누르면 기록들 목록과 함께 새로운 기록을 작성할 수 있는 화면이 표시됩니다.

### 3. Friends & Profile 탭

| ![KakaoTalk_20230717_220540837_03](https://github.com/ImpDay/Imp_Front/assets/61741090/e6a39c81-9113-4029-8b45-a2d5d4ad702c)| ![KakaoTalk_20230717_220540837_06](https://github.com/ImpDay/Imp_Front/assets/61741090/22478456-860d-46ca-b631-6b9b0c6c0524)| ![KakaoTalk_20230727_194804668](https://github.com/ImpDay/Imp_Front/assets/61741090/409f6f71-3349-457b-9814-2fd733cc54b8) |
| ---------------------------- | ---------------------------- | ---------------------------- |

- 내가 팔로우하는 친구들의 지난 7일 간의 하루 점수를 색깔로 확인할 수 있습니다.
- 내가 팔로우하는 사람들의 목록과, 나를 팔로우하는 사람들의 목록을 확인할 수 있습니다.
- 자신의 개인 정보를 변경할 수 있습니다.
- 친구 이름을 검색해서, 친구를 팔로우 할 수 있습니다.
