<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.loadToken()
  },
  data() {
    return {
      tokenType: null,
      token: null,
      memos: [],
      pageLinks: {
        first: null,
        last: null,
        prev: null,
        next: null
      }
    }
  },
  methods: {
    isLogin() {
      return (this.token !== null)
    },
    syncToken() {
      window.localStorage.setItem('token', this.token)
      window.localStorage.setItem('tokenType', this.tokenType)
    },
    loadToken() {
      this.token = window.localStorage.getItem("token") === 'null' ?
          null : window.localStorage.getItem("token")
      this.tokenType = window.localStorage.getItem("tokenType") === 'null' ?
          null : window.localStorage.getItem("tokenType")
    }
  }
}
</script>
