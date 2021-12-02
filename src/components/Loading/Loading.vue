<template>
  <div class="loading" v-if="!isHide" :style="{'opacity': (isShow || progress < 99) ? 1 : 0}">
    <div class="glow-bg">
      <div class="glow"></div>
    </div>
    <div class="loading_mask">
      <p class="loading_title" :style="{'opacity': opacity}">Loading...</p>
      <div class="progress">
        <div class="corner left_top"></div>
        <div class="corner left_bottom"></div>
        <div class="corner right_top"></div>
        <div class="corner right_bottom"></div>
        <div class="progress-bar" role="progressbar" :style="{'width': progress + '%'}">{{ progress }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      opacity: 0,
      progress: 0,
      isShow: true,
      isHide: false
    }
  },
  created() {
    setInterval(() => {
      this.opacity = this.opacity === 0 ? 1 : 0
    }, 500)
    setInterval(() => {
      this.progress += this.progress === 99 ? 0 : 1
    }, 10)
  },
  methods: {
    hide() {
      this.isShow = false
      setTimeout(() => {
        this.isHide = true;
      }, 300)
    },
    show() {
      this.progress = 0
      this.isHide = false
      setTimeout(() => {
        this.isShow = true
      }, 300)
    }
  }
}
</script>

<style src="./Loading.scss" lang="scss" scoped />