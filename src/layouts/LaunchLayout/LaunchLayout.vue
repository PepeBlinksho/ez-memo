<template>
  <div class="launch_layout">
    <router-view></router-view>
    <version />
  </div>
</template>

<script>
import Version from "../../components/Version/Version";
export default {
  components: { Version },
  name: "LaunchLayout",
  created() {
    document.body.classList.add("launch_layout_body");
  },
};
</script>

<style src="./LaunchLayout.scss" lang="scss" />
