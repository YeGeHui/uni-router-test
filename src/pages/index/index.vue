<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <!-- <text class="title">{{ title }}</text> -->
    </view>
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
    <view v-if="!show">没有执行 onLoad</view>
    <view v-if="show"> onLoad 已执行</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      show: false,
    };
  },
  onLoad() {
    this.show = true;
  },
  methods: {
    goto(name) {
      this.$Router.push({ name });
    },
  },
};
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  /* color: #8f8f94; */
}
</style>
