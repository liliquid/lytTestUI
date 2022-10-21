<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <m-demo />
    <m-card imgSrc="logo.png" summary="小鲸向海顶呱呱，logo图" />
    <br />

    <m-card imgSrc="banner.png" summary="1118献礼司庆，吹响重逢号角">
      <template #footer>
        <div class="footer">
          <div class="level">终极 777报名</div>
          <div class="level">299</div>
        </div>
      </template>
    </m-card>
    <br />

    <m-card imgSrc="logo.png" :width="380" :imgHeight="90"
      >吹响重逢号角，站在荣誉巅峰
      <template #footer>
        <div class="footer-spring">
          <div class="level">g g g</div>
          <div class="level">2023000售出</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer,
.footer-spring {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 10px;
}
</style>
