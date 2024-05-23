<template>
    <div style="text-align: left">
        <el-dialog @close="test" title="收货地址" :visible.sync="dialogTableVisible">

        </el-dialog>
    </div>
</template>




<script>
export default {
    name: 'Payment',
    props: {
        dialogTableVisible:
        {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        test() {
            this.$emit("update:dialogTableVisible", false);
        }
    },
}
</script>