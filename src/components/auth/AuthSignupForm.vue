<template>
  <div class="auth_form">
    <div class="auth_text">소셜 계정으로 간편 회원가입</div>
    <div class="auth_text_decoration"></div>
    <div class="auth_buttons">
      <button><img src="../../assets/kakaoSignup.svg" /></button>
      <button><img src="../../assets/googleSignup.svg" /></button>
    </div>
    <div class="auth_isMember">
      이미 MOAMOA의 회원이신가요?
      <router-link to="/login" class="auth_link">로그인</router-link>
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
.auth_text {
  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  margin: 16.6rem 62.3rem 0 62.2rem;
  width: 21.7rem;
  height: 2.7rem;
  text-align: center;
  color: #4e4e4e;
}
.auth_text_decoration {
  border: 1px solid #d8d8d8;
  background: #d8d8d8;
  width: 50rem;
  margin: 0.7px 47rem 0 47rem;
}
.auth_buttons {
  margin:6rem 57.2rem 7.8rem 57.6rem;
  display: flex;
  flex-direction: column;
}
button {
  background: none;
  border: none;
  width:29.2rem;
  height:4.4rem;
  margin-bottom: 1.2rem;
}
button:hover {
  cursor: pointer;
}
.auth_isMember {
  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 300;
  font-style: normal;
  display: flex;
  margin: 1.4rem 56.9rem 0 56.9rem;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.7rem;
  width: 30.2rem;
  height: 2.9rem;
  background: #fbfbfb;
  border-radius: 1rem;
  justify-content: center;

  color: #a1a1a1;
}
.auth_link {
  padding-left: 2.2rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.7rem;
  color: #ff5c4e;
  text-decoration: none;
}
.auth_etc {
  margin: 7.6rem 48.1rem 19rem 48.1rem;
  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #a1a1a1;
  width: 48rem;
  height: 1.8rem;
}
</style>
