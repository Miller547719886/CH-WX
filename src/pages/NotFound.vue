<template lang="jade">
  .page-not-found
    h1 Not Found
    router-link(to="/")
      button.btn-cover go to pageView
</template>

<script>
  export default {
    name: 'notFound',
    components: {
    }
  }
</script>

<style scoped lang="scss">
  .page-not-found {
    padding: 15px;
    text-align: center;
  }
</style>
