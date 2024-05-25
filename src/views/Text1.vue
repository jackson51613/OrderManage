<!-- user.vue -->
<template>
  <div>
    <!-- 编辑按钮，点击时调用 showDialog 方法 -->
    <el-button type="primary" @click="showDialog">Edit</el-button>
    <!-- 引用 Text2 组件，使用 .sync 修饰符实现 isDialogVisible 的双向绑定 -->
    <Text2 :isVisible.sync="isDialogVisible" />
  </div>
</template>

<script>
import Text2 from '@/views/Text2.vue';

export default {
  name:"Text1",
  components: {
    Text2,
  },
  data() {
    return {
      isDialogVisible: false // 弹窗初始状态为隐藏sdfddddddddddddddddddddddddddd
    };
  },
  methods: {
    showDialog() {
      console.log("sb");
      this.isDialogVisible = true; // 显示弹窗
    }
  }
};
</script>

<style scoped>
/* 如果需要，可以在这里添加自定义样式 */
</style>
