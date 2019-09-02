<template>
  <div class="login">
    <img src="../assets/login.png" />
    <div class="login-input">
      <label>邮箱</label>
      <input type="text" v-model="user.email" />
      <br />
      <label>密码</label>
      <input type="password" v-model="user.password" />
      <button @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    handleLogin() {
      this.$axios
        .get("/LWuser.json", this.user)
        .then(res => {
          console.log(res.data);
          // const { token } = res.data;
          // localStorage.setItem("jwtToken", token);
          // const decoded = jwt_decode(token);
          this.$store.dispatch("setUserAsync", this.user);
          // this.$store.dispatch("setIsLoginAsync", !this.isEmpty(decoded));
          this.$store.dispatch("setIsLoginAsync", true);
          this.errors = {};
          this.$router.push("/menu");
          this.user = res.data;
        })
        .catch(err => {
          if (err.response) {
            this.errors = err.response.data;
          }
        });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style scoped >
.login {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  border: 1px solid #cccccc;
  text-align: center;
  box-sizing: border-box;
}
.login-input label {
  text-align: left;
  display: block;
  color: #212529;
  font-size: 1.2rem;
}
.login-input input,
.login-input button {
  display: block;
  color: #212529;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.4rem 0.6rem;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
}
.login-input button {
  background: #28a745;
  color: #ffffff;
  margin-top: 1rem;
  cursor: pointer;
}
</style>
