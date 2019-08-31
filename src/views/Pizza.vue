<template>
  <div class="mr-menu">
    <div class="menu-l">
      <table>
        <thead>
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(menu,index) in menus" :key="index">
          <tr>
            <th>{{menu.type}}</th>
          </tr>
          <tr>
            <td>{{menu.size1}}</td>
            <td>{{menu.price1}}</td>
            <td>
              <span class="menu-join" @click="setAddCount1Async(index)">+</span>
            </td>
          </tr>
          <tr>
            <td>{{menu.size2}}</td>
            <td>{{menu.price2}}</td>
            <td>
              <span class="menu-join" @click="setAddCount2Async(index)">+</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="menu-r">
      <p v-if="sumPrice == 0">购物车没有任何商品</p>
      <table>
        <tr v-if="sumPrice > 0">
          <th>数量</th>
          <th>品种(尺寸)</th>
          <th>价格</th>
        </tr>
        <div v-for="(menu,index) in menus" :key="index">
          <tr v-if="menu.count1 > 0">
            <td>
              <span class="menu-click" @click="setCutCount1Async(index)">-</span>
              <span class="menu-num">{{menu.count1}}</span>
              <span class="menu-click" @click="setAddCount1Async(index)">+</span>
            </td>
            <td>{{menu.type}}({{menu.size1}})</td>
            <td>{{menu.price1}}</td>
          </tr>
          <tr v-if="menu.count2 > 0">
            <td>
              <span class="menu-click" @click="setCutCount2Async(index)">-</span>
              <span class="menu-num">{{menu.count2}}</span>
              <span class="menu-click" @click="setAddCount2Async(index)">+</span>
            </td>
            <td>{{menu.type}}({{menu.size2}})</td>
            <td>{{menu.price2}}</td>
          </tr>
        </div>
        <div v-if="sumPrice > 0">
          <tr class="tr-line">
            <label>总价:</label>
            <span>{{sumPrice}}RMB</span>
          </tr>
          <tr class="tr-line">
            <!-- <button>提交</button> -->
            <router-link to="/">提交</router-link>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "menus",
  computed: mapGetters(["menus", "sumPrice"]),
  methods: {
    ...mapActions([
      "setAddCount1Async",
      "setAddCount2Async",
      "setCutCount1Async",
      "setCutCount2Async"
    ])
  }
};
</script>

<style scoped>
.mr-menu {
  max-width: 1000px;
  margin: 0 auto;
}
.menu-l table tr {
  display: block;
  border-top: 1px solid #cccccc;
}
.menu-l table th,
.menu-l table td {
  padding: 0.5rem 0;
  text-align: left;
  width: 10rem;
  font-size: 1rem;
}
.menu-join {
  display: block;
  width: 1.5rem;
  height: 1.8rem;
  border: 1px solid #28a745;
  color: #28a745;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
.menu-click {
  display: inline-block;
  width: 1.5rem;
  height: 1.8rem;
  color: black;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  background-color: #cccccc;
}
.menu-num {
  padding: 0 0.2rem;
}
.menu-join:hover {
  color: #ffffff;
  background-color: #28a745;
  transition: 0.5s;
}
.menu-l {
  float: left;
}
.menu-r {
  float: left;
  margin-left: 2rem;
}
.menu-r table tr {
  display: block;
  border-top: 1px solid #cccccc;
}
.menu-r table th,
.menu-r table td {
  padding: 0.5rem 0;
  text-align: left;
  width: 5.6rem;
  font-size: 1rem;
}
.menu-r table tr.tr-line {
  border: 0;
}
.menu-r table tr.tr-line {
  display: block;
  padding: 0.6rem 0;
}
.menu-r table tr.tr-line a {
  text-decoration: none;
  border: 0;
  font-size: 1rem;
  background-color: #28a745;
  border-radius: 0.3rem;
  color: #ffffff;
  padding: 0.4rem 7.5rem;
  cursor: pointer;
}
</style>