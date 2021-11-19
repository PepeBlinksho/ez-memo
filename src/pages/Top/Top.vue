<template>
  <div class="top">
      <div class="glow-bg">
        <div class="glow"></div>
      </div>
  </div>
  <logo/>
  <scene-nav>
    <scene-nav-link name="search">Search</scene-nav-link>
    <scene-nav-link name="memos">Memos</scene-nav-link>
    <scene-nav-link name="my_page">My Page</scene-nav-link>
    <scene-nav-link name="login">Login</scene-nav-link>
    <scene-nav-link name="register">Register</scene-nav-link>
    <scene-nav-link name="settings">Settings</scene-nav-link>
  </scene-nav>
</template>

<script>
import Logo from "../../components/Logo/Logo";
import SceneNav from "../../components/SceneNav/SceneNav";
import SceneNavLink from "@/components/SceneNav/SceneNavLink";
export default {
  name: "Top",
  components: {SceneNavLink, SceneNav, Logo}
}
</script>

<style src="./Top.scss" lang="scss" scoped/>