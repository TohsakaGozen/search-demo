<template>
  <div class="imbox">
    <div
      v-show="users.length"
      v-for="user in users"
      :key="user.login"
      class="card"
    >
      <a target="_blank" :href="user.html_url">
        <img :src="user.avatar_url" alt="" />
      </a>
      <p>{{ user.login }}</p>
    </div>
    <h1 v-show="isFirst && users.length == 0 && isEmpty == false">欢迎使用</h1>
    <h1 v-show="isLoading">正在加载中</h1>
    <h1 v-show="isEmpty">未搜索到该用户</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")) || [],
      isLoading: false,
      isFirst: true,
      isEmpty: false,
    };
  },
  mounted() {
    this.$bus.$on("Tohsaka", (users, isLoading, isEmpty, isFirst, isError) => {
      console.log("我是list组件,我收到了", users);
      this.users = users;
      this.isLoading = isLoading;
      this.isFirst = isFirst;
      this.isError = isError;
      this.isEmpty = false;
      if (this.users.length == 0 && isLoading == false) {
        this.isEmpty = true;
      }
    }),
      this.$bus.$on("delete", (isFirst, isError, isEmpty) => {
        this.users = [];
        this.isFirst = isFirst;
        this.isEmpty = isEmpty;
      });
  },
  watch: {
    users: {
      deep: true,
      handler(value) {
        localStorage.setItem("users", JSON.stringify(value));
      },
    },
  },
};
</script>

<style scoped>
.imbox {
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  background-color: rgba(73, 76, 76, 0.6);
  box-shadow: 0 0 30px black;
}
h1 {
  width: 100%;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
  z-index: 99;
}
img:hover {
  width: 130%;
  height: 130%;
}
.card {
  width: 128px;
  height: 130px;
  position: relative;
  margin: 29.5px;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
}
p {
  position: relative;
  top: 100%;
  color: white;
  text-align: center;
}
</style>