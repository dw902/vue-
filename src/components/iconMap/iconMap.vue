<template lang="html">
  <span class="iconMap" :class="iconClassMap[iconType]"></span>
</template>

<script>
export default {
  props: {
    iconType: Number
  },
  created() {
    this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}

</script>

<style lang="less" scoped>
@import '../../common/styles/index';
.iconMap {
  display: inline-block;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  &.decrease {
    .bg-imagec('decrease_4');
  }
  &.discount {
    .bg-imagec('discount_4');
  }
  &.guarantee {
    .bg-imagec('guarantee_4');
  }
  &.invoice {
    .bg-imagec('invoice_4');
  }
  &.special {
    .bg-imagec('special_4');
  }
}

</style>
