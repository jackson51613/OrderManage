<template>
    <div>
        <div style="margin-top: 100px;">
            确认
        </div>
        <div style="position: fixed; bottom: 0; right: 0; margin-right: 50px; margin-bottom: 50px;">
            <el-button v-if="showBackButton" type="primary" @click="back">戻る</el-button>
            <el-button type="primary" @click="next">次の手順</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderList",
    data() {
        return {
            showBackButton: true, // 控制是否显示 "戻る" 按钮的变量
            returnData: ''
        }
    },
    props: {
        data: String
    },
    created() {
    },
    methods: {
        next() {
            this.showBackButton = false;
            this.returnData = this.data + '->OrderConfirmation';
            this.$emit('next', this.returnData);
        },
        back() {
            this.$emit('back');
        }
    }
}
</script>