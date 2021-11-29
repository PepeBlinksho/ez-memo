<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      token: null,
    }
  },
  methods: {
    isLogin() {
      return(this.token !== null)
    }
  }
}
</script>
