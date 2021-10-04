<template>
  <auth-header></auth-header>
  <div class="signup_form">
    <div class="title">회원가입</div>
    <div class="title_decoration"></div>
    <div class="profile_img"></div>
    <div class="profile_info">
      <div class="nickname">
        닉네임 :
        <input type="text" placeholder="최대 N자" />
        <div class="title_decoration"></div>
      </div>
      <div class="description">
        한줄 소개:
        <input type="text" placeholder="한줄로 소개하세요." />
        <div class="title_decoration"></div>
      </div>
    </div>
    <button><img src="../assets/start_moa_btn.svg"/></button>
  </div>
</template>

<script>
import AuthHeader from "../components/nav/AuthHeader.vue";
export default {
  components: { AuthHeader },
};
</script>

<style></style>
