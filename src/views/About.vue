<template>
  <div class="about">
    <div class="about-nav">
      <ul>
        <li @click="clickChange = 1">历史订单</li>
        <li @click="clickChange = 2">联系我们</li>
        <li @click="clickChange = 3">点餐文档</li>
        <li @click="clickChange = 4">快递信息</li>
      </ul>
    </div>
    <div class="about-content">
      <ul>
        <li v-show="clickChange == 1">
          <div class="about-content-t">历史订单</div>
          <div class="about-content-b">
            <p>历史订单</p>
            <p>623790416@qq.com</p>
          </div>
        </li>
        <li v-show="clickChange == 2">
          <div class="about-content-t">联系我们</div>
          <div class="about-content-b">
            <p>联系我们</p>
            <p>623790416@qq.com</p>
            <p>电话 联系人</p>
            <p>李伟</p>
          </div>
        </li>
        <li v-show="clickChange == 3">
          <div class="about-content-t">点餐文档</div>
          <div class="about-content-b">
            <p>点餐文档</p>
            <p>623790416@qq.com</p>
          </div>
        </li>
        <li v-show="clickChange == 4">
          <div class="about-content-t">快递信息</div>
          <div class="about-content-b">
            <p>快递信息</p>
            <p>623790416@qq.com</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      clickChange: 2
    };
  }
};
</script>

<style scoped>
ul {
  padding-inline-start: 0px;
}
.about-content-b a {
  text-decoration: none;
  padding-left: 10px;
}
.about {
  max-width: 1000px;
  margin: 0 auto;
}
.about-nav {
  float: left;
}
.about-nav ul {
  list-style-type: none;
}
.about-nav ul li {
  color: #495057;
  padding: 0.5rem 9rem 0.5rem 1rem;
  font-size: 1.1rem;
  display: block;
  border: 1px solid #cccccc;
  margin-top: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
.about-nav ul li:hover {
  background-color: rgb(0, 0, 0, 0.04);
}
.about-content {
  float: left;
  margin-left: 2rem;
}
.about-content ul {
  list-style-type: none;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
}
.about-content ul .about-content-t {
  width: 32rem;
  padding: 0.6rem 0 0.6rem 1rem;
  background-color: rgb(0, 0, 0, 0.03);
  border-bottom: 1px solid #cccccc;
}
.about-content ul .about-content-b p:nth-of-type(1) {
  color: #343a40;
  font-size: 30px;
  padding: 0.6rem 0 0.6rem 1rem;
}
.about-content ul .about-content-b p:nth-of-type(2) {
  color: #343a40;
  font-size: 18px;
  padding: 0.6rem 0 0.6rem 1rem;
}
.about-content ul .about-content-b p:nth-of-type(3) {
  color: #007bff;
  font-size: 20px;
  padding: 0.6rem 0 0.6rem 1rem;
}
.about-content ul .about-content-b p:nth-of-type(4) {
  color: #343a40;
  font-size: 40px;
  padding: 0.6rem 0 2rem 3rem;
}
</style>