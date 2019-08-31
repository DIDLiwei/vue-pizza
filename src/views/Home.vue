<template>
  <div>
    <div class="landing">
      <div class="landing-content">
        <p>欢迎大家品尝pizza!</p>
        <p>这里有你非常喜欢的pizza!</p>
        <router-link to="/menu">Let's order</router-link>
      </div>
    </div>
    <div class="landing-info">
      <ul>
        <li>
          <span>点餐文档</span>
          <h2>点餐文档</h2>
          <p>623790416@qq.com</p>
        </li>
        <li>
          <span>快递信息</span>
          <h2>快递信息</h2>
          <p>623790416@qq.com</p>
        </li>
        <li>
          <span>历史订单</span>
          <h2>历史订单</h2>
          <p>623790416@qq.com</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style scoped>
.landing {
  margin: 0 auto;
  text-align: center;
  background: url("../assets/pizza.jpg") no-repeat;
  height: 85vh;
}
.landing-content {
  padding: 1.5rem 5rem;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  background: rgba(228, 223, 223, 0.8);
  position: relative;
  top: 100px;
}
.landing-content p:nth-of-type(1) {
  font-size: 2.5rem;
  opacity: 0.7;
}
.landing-content p:nth-of-type(2) {
  font-size: 1.8rem;
  opacity: 0.7;
  padding: 1rem 0 2rem 0;
}
.landing-content a {
  background-color: #28a745;
  font-size: 1.3rem;
  padding: 0.6rem;
  border-radius: 10px;
  opacity: 0.9;
  text-decoration: none;
  opacity: 0.6;
}
.landing-content a:hover {
  opacity: 1;
}
.landing-content a:active {
  color: white;
}
.landing-info {
  max-width: 1000px;
}
.landing-info ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.landing-info ul li {
  border: 1px solid #cccccc;
}
.landing-info ul li span {
  display: block;
  padding: 0.5rem;
  background: rgb(0, 0, 0, 0.03);
  color: #343a40;
  border-bottom: 1px solid #cccccc;
}
.landing-info ul li h2 {
  color: #343a40;
  font-weight: 400;
  padding: 0.5rem 0.5rem;
}
.landing-info ul li p {
  color: #343a40;
  font-size: 1rem;
  padding: 0 0.5rem 1rem 0.5rem;
}
</style>
