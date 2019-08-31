<template>
  <div class="manage">
    <div class="manage-l">
      <h1>添加新的Pizza</h1>
      <table>
        <tr>
          <td>
            品
            <br />种
          </td>
          <td>
            <input type="text" v-model="menu.type" />
          </td>
        </tr>
        <tr>
          <td>
            描
            <br />述
          </td>
          <td>
            <textarea rows="8" v-model="menu.describe"></textarea>
          </td>
        </tr>
        <tr>
          <th>选项1</th>
        </tr>
        <tr>
          <td>
            尺
            <br />寸
          </td>
          <td>
            <input type="text" v-model="menu.size1" />
          </td>
        </tr>
        <tr>
          <td>
            价
            <br />格
          </td>
          <td>
            <input type="text" v-model="menu.price1" />
          </td>
        </tr>
        <tr>
          <th>选项2</th>
        </tr>
        <tr>
          <td>
            尺
            <br />寸
          </td>
          <td>
            <input type="text" v-model="menu.size2" />
          </td>
        </tr>
        <tr>
          <td>
            价
            <br />格
          </td>
          <td>
            <input type="text" v-model="menu.price2" />
          </td>
        </tr>
        <tr class="manage-l-join">
          <td colspan="2">
            <button @click="addMenus">添加</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="manage-r">
      <h1>菜单</h1>
      <table>
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        <tr v-for="(menu,index) in menus" :key="index">
          <td>{{menu.type}}</td>
          <td>
            <span @click="setDeleteMenusAsync(menu.type)" class="manage-delete">x</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "manage",
  computed: mapGetters(["menus"]),
  data() {
    return {
      menu: {
        type: "",
        describe: "",
        size1: "",
        price1: "",
        count1: "",
        size2: "",
        price2: "",
        count2: ""
      },
      errors: {}
    };
  },
  methods: {
    ...mapActions(["setAddMenusAsync", "setDeleteMenusAsync"]),
    addMenus() {
      this.setAddMenusAsync(this.menu);
    }
  }
};
</script>

<style scoped>
.manage {
  max-width: 1050px;
  margin: 0 auto;
}
h1 {
  color: rgb(0, 0, 0, 0.5);
  font-weight: 400;
  padding: 1.5rem 0;
}
.manage-l {
  float: left;
}
.manage-r {
  float: left;
  padding-left: 1.5rem;
}
.manage .manage-l table td {
  padding: 0.5rem 0;
  vertical-align: top;
}
input[type="text"],
textarea {
  color: rgb(0, 0, 0, 0.6);
  font-size: 1rem;
  width: 28rem;
  padding: 0.8rem;
  border: 1px solid #cccccc;
  border-radius: 0.3rem;
  margin-left: 1.5rem;
}
.manage-l-join button {
  font-size: 1rem;
  padding: 0.6rem 16rem;
  border: 0;
  background-color: #28a745;
  cursor: pointer;
  border-radius: 0.4rem;
  color: #fff;
}
.manage-r table tr {
  margin-top: 0.4rem;
  display: block;
  border-top: 1px solid #cccccc;
  padding: 0.5rem 0;
}
.manage-r table th,
.manage-r table td {
  width: 7rem;
  text-align: left;
}
.manage-delete {
  display: block;
  width: 1.5rem;
  height: 1.8rem;
  border: 1px solid #b92626;
  color: #b92626;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
.manage-delete:hover {
  color: #ffffff;
  background-color: #b92626;
  transition: 0.5s;
}
</style>