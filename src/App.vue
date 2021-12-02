<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tokenType: null,
      token: ''
    }
  },
  methods: {
    isLogin() {
      return (this.token !== null)
    }
  }
}
</script>
