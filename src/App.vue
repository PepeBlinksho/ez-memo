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
      keyword: '',
      activeFolder: null,
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
    },
    search() {
      if (this.isLogin()) {
        axios.get(this.routes.listUserMemo, {
          params: {
            keyword: this.keyword,
            folder_id: this.activeFolder
          },
          headers: {
            'Authorization': this.tokenType + ' ' + this.token
          }
        })
            .then((response) => {
              this.memos = response.data.data
              this.pageLinks = response.data.links
            })
            .catch((error) => {
              window.console.log(error)
            }).finally(() => {

        })
      } else {
        axios.get(this.routes.listMemo, {
          params: {
            keyword: this.keyword
          }
        })
            .then((response) => {
              this.memos = response.data.data
              this.pageLinks = response.data.links
            })
            .catch((error) => {
              window.console.log(error)
            }).finally(() => {

        })
      }
    }
  }
}
</script>
