<template>
  <view>
    tab-5
    <view>
      <text class="title" @click="goto('page-1')">page-1</text>
    </view>
    <view>
      <text class="title" @click="goto('page-2')">page-2</text>
    </view>
    <view>
      <text class="title" @click="goto('page-3')">page-3</text>
    </view>
    <view>
      <text class="title" @click="goto('page-4')">page-4</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goto(name) {
      this.$Router.push({ name });
    },
  },
};
</script>

<style></style>
