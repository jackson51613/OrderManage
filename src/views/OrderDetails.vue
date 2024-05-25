<template>
  <el-dialog
    title="Edit User"
    :visible.sync="isVisible"
    width="30%"
    @close="closeDialog"
  >
    <span>编辑用户内容...</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">Cancel</el-button>
      <el-button type="primary" @click="confirmDialog">Confirm</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: "OrderDetails",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:isVisible", false); // 触发事件，将 isVisible 设置为 false
    },
    confirmDialog() {
      // 在这里处理确认逻辑
      this.$emit("update:isVisible", false); // 触发事件，将 isVisible 设置为 false
    },
  },
};
</script>