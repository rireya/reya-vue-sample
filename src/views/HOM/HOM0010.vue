<template>
  <div>
    <h1>HOM0010</h1>
    <div>
      <button type="button" @click="$router.push({ name: 'ETC0010' })">Next Page</button>
      <button type="button" @click="test">기능 테스트</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    test() {
      console.log('test');
      this.$page.open();
    }
  }
};
</script>
