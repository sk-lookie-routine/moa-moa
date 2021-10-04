<template>
  <div class="auth_form">
    <div class="auth_text">소셜 계정으로 간편 로그인</div>
    <div class="auth_text_decoration"></div>
    <div class="auth_buttons">
      <button><img src="../../assets/kakaoLogin.svg" /></button>
      <button><img src="../../assets/googleLogin.svg" /></button>
    </div>
    <div class="auth_isMember">
      아직 MOAMOA의 회원이 아니신가요?
      <router-link to="/signup" class="auth_link">회원가입</router-link>
    </div>
    <div class="auth_etc">
      귀하는 MOAMOA의 이용약관과 개인정보처리방침을 읽고 이해했으며 그에
      동의함을 확인합니다.
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  font-family: Noto Sans KR;
}
.auth_form {
  padding: 0 40px;
}
.auth_text {
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  padding-top: 166px;
  padding-left: 582px;
}
.auth_text_decoration {
  border: 1px solid #d8d8d8;
  background: #d8d8d8;
  margin-top: 7px;
  margin-left: 430px;
  margin-right: 430px;
}
.auth_buttons {
  padding: 60px 532px;
  display: flex;
  flex-direction: column;
}
button{
  background: none;
  border:none;
}
button:hover{
  cursor:pointer;
}
.auth_isMember {
  display: flex;
  padding-left: 529px;
  align-items: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  line-height: 17px;

  color: #a1a1a1;
}
.auth_link {
  padding-left: 22px;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #ff5c4e;
  text-decoration: none;
}
.auth_etc {
  padding-top: 76px;
  padding-left: 441px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #a1a1a1;
}
</style>
