<template>
  <div class="box">
    <h1>Search Bilibili Users</h1>
    <div>
      <input
        ref="input"
        @keyup.enter="searchUsers"
        type="text"
        v-model="keyWord"
      />
      <button @click="searchUsers">Search</button>
      <button @click="deleteAll">清除记录</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("Tohsaka", [], true, false);
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (respnse) => {
          console.log("请求成功了");
          this.$bus.$emit("Tohsaka", respnse.data.items, false);
        },
        (error) => {
          console.log("请求失败", error.message);
          this.$bus.$emit("Tohsaka", [], false, false, true);
        }
      );
    },
    deleteAll() {
      this.$bus.$emit("delete", true, false, false);
      this.$refs.input.value = "";
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: white;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  box-shadow: 0 0 10px rgb(43, 85, 91);
  background-color: rgba(204, 210, 210, 0.9);
}
.box div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
input {
  width: 60%;
  height: 25px;
  border-radius: 5px;
  margin-right: 50px;
  margin-left: 20px;
}
button {
  background-color: rgba(254, 247, 247, 0.6);
  border-radius: 5px;
  width: 80px;
  margin-right: 10px;
}
button:hover {
  background-color: rgba(43, 53, 50, 0.6);
  border-radius: 5px;
}
</style>