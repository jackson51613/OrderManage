<template>
    <div>
        <div style="text-align: center;">
            <div style="display: inline-block; text-align: left; width: 50%;">
                <el-steps :active="active" finish-status="success">
                    <el-step title="手順1"></el-step>
                    <el-step title="手順2"></el-step>
                    <el-step title="手順3"></el-step>
                </el-steps>
            </div>
        </div>
        <div>
            <router-view @next="next" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        }
    },
    created() {

    },
    methods: {
        next(data) {
            console.log(data);
            if (this.active++ > 2) this.active = 0;
            if (this.active == 0) {
                this.$router.push('orderlist');
            }
            if (this.active == 1) {
                this.$router.push({ name: 'ShippingAndBilling', params: { data: data } });
            }
            if (this.active == 2) {
                this.$router.push({ name: 'OrderConfirmation', params: { data: data } });
            }
        }
    }
}
</script>