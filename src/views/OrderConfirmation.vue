<template>
    <div>
        <div style="margin-top: 100px;">
            确认
        </div>
        <div style="position: fixed; bottom: 0; right: 0; margin-right: 50px; margin-bottom: 50px;">
            <el-button type="primary" @click="next">次の手順</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderList",
    data() {
        return {
            returnData: ''
        }
    },
    props: {
        data: String
    },
    created() {
        console.log(this.data);
    },
    methods: {
        next() {
            this.returnData = this.data + '->OrderConfirmation';
            this.$emit('next', this.returnData);
        }
    }
}
</script>