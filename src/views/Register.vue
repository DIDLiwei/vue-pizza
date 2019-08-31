<template>
  <div id="register">
    <img src="../assets/login.png" />
    <div class="register-input">
      <label>邮箱</label>
      <input type="text" v-model="newUser.email" />
      <br />
      <label>密码</label>
      <input type="password" v-model="newUser.password" />
      <br />
      <label>确认密码</label>
      <input type="password" v-model="newUser.password2" />
      <button @click="handleSubmit">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post("/LWuser.json", this.newUser)
        .then(res => {
          console.log(res.data);
          this.errors = {};
          this.$router.push("/login");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    }
  }
};
</script>

<style scoped>
#register {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  margin-top: 0.5rem;
  border: 1px solid #cccccc;
  text-align: center;
  box-sizing: border-box;
}
.register-input label {
  text-align: left;
  display: block;
  color: #212529;
  font-size: 1.2rem;
}
.register-input input,
.register-input button {
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
.register-input button {
  background: #28a745;
  color: #ffffff;
  margin-top: 1rem;
  cursor: pointer;
}
</style>
