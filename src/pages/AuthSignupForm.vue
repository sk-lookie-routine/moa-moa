<template>
  <auth-header></auth-header>
  <div class="signup_form">
    <div class="title">회원가입</div>
    <div class="decoration"></div>
    <div class="profile_img">
      <img :src="randomProfile.name" />
      <button @click="randomImage">
        <img src="../assets/random_btn.svg" class="randomBtn" />
      </button>
    </div>
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
import AuthHeader from "../components/header/AuthHeader.vue";
export default {
  components: { AuthHeader },
  data() {
    return {
      nickname: "",
      desc: "",
      randomProfile: {
        name: require("../assets/profile_img/profile_sc_o.svg"),
      },
      imgList: [
        { name: require("../assets/profile_img/profile_sc_b.svg") },
        { name: require("../assets/profile_img/profile_sc_o.svg") },
        { name: require("../assets/profile_img/profile_sc_p.svg") },
        { name: require("../assets/profile_img/profile_sc_r.svg") },
        { name: require("../assets/profile_img/profile_sc_y.svg") },
        { name: require("../assets/profile_img/profile_sq_b.svg") },
        { name: require("../assets/profile_img/profile_sq_o.svg") },
        { name: require("../assets/profile_img/profile_sq_p.svg") },
        { name: require("../assets/profile_img/profile_sq_r.svg") },
        { name: require("../assets/profile_img/profile_sq_y.svg") },
        { name: require("../assets/profile_img/profile_tr_b.svg") },
        { name: require("../assets/profile_img/profile_tr_o.svg") },
        { name: require("../assets/profile_img/profile_tr_p.svg") },
        { name: require("../assets/profile_img/profile_tr_r.svg") },
        { name: require("../assets/profile_img/profile_tr_y.svg") },
      ],
    };
  },
  methods: {
    changePage() {
      this.$router.push("/login");
    },
    randomImage() {
      let randomNumber = Math.floor(Math.random() * this.imgList.length);
      this.randomProfile = this.imgList[randomNumber];
    },
  },
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
  border: 0.7px solid #d8d8d8;
  background: #d8d8d8;
}
.profile_img {
  margin-top: 4.9rem;
  margin-bottom: 6.1rem;
  position: relative;
  padding: 0;
  width: 14.4rem;
  height: 14.4rem;
}
.randomBtn {
  position: absolute;
  right: 0;
  bottom: 0;
  transition: all ease 0.5s;
}
.randomBtn:hover {
  transform: rotate(45deg);
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
.moaBtn img {
  width: 32rem;
  height: 5.8rem;
}
button {
  margin-top: 10rem;
  border: none;
  background: none;
}
button:hover {
  cursor: pointer;
}
</style>
