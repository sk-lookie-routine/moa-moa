<template>
  <auth-header></auth-header>
  <div class="signup_form">
    <div class="title">회원가입</div>
    <div class="decoration"></div>
    <div class="profile_img"></div>
    <div class="profile_info">
      <div class="nickname">
        닉네임 :
        <input
          type="text"
          v-model="nickname"
          placeholder="최대 N자"
          class="text_ph"
        />
        <div class="decoration"></div>
      </div>
      <div class="description">
        한줄 소개 :
        <input
          type="text"
          v-model="desc"
          placeholder="한줄로 소개하세요."
          class="desc_ph"
        />
        <div class="decoration"></div>
      </div>
    </div>
    <div class="moaBtn">
      <button v-if="nickname !== '' && desc !== ''" @click="changePage">
        <img src="../assets/startBtn.svg" />
      </button>
      <button v-else>
        <img src="../assets/startBtnDeactive.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import AuthHeader from "../components/nav/AuthHeader.vue";
export default {
  components: { AuthHeader },
  data() {
    return {
      nickname: "",
      desc: "",
    };
  },
  methods:{
    changePage(){
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.signup_form {
  padding: 10.8rem 12rem 0 12rem;
  display: float;
}
.title {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3.4rem;
  color: #4e4e4e;
}
.decoration {
  margin: 1.6rem 0 0 0;
  padding: 0;
  border: 1px solid #d8d8d8;
  background: #d8d8d8;
}
.nickname {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: #4e4e4e;
}
.description {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: #4e4e4e;
  margin-top: 5.4rem;
}
.text_ph,
.desc_ph {
  font-family: Spoqa Han Sans Neo;
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: #bebebe;
  border: none;
}
.moaBtn {
  justify-content: center;
  display: flex;
}
button {
  margin-top: 10rem;
  border: none;
  background: none;
}
button:hover{
  cursor:pointer;
}
</style>
