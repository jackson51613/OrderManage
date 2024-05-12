<template>
    <div>
        <div style="margin-top: 100px;">
            <span class="demonstration"></span> <el-cascader placeholder="配送方式" v-model="value" :options="options"
                :props="{ expandTrigger: 'hover' }" @change="handleChange"> </el-cascader>
        </div>
        <div style="position: fixed; bottom: 0; right: 0; margin-right: 50px; margin-bottom: 50px;">
            <el-button type="primary" @click="back">戻る</el-button>
            <el-button type="primary" @click="next">次の手順</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderList",
    data() {
        return {
            returnData: '',
            deliveryData: '',
            value: [], options: [{ value: "haiwai", label: "海外", children: [{ value: "yamato", label: "ヤマト運輸", children: [{ value: "yamatohaiyun", label: "海上輸送", }, { value: "yamatokongyun", label: "航空輸送", },], }, { value: "youbianju", label: "郵便局", children: [{ value: "youbianjuhaiyun", label: "海上輸送", }, { value: "youbianjukongyun", label: "航空輸送", },], }, { value: "zuochuanjibian", label: "佐川急便", children: [{ value: "zuochuankongyun", label: "航空輸送", },], }, { value: "xinongyunshu", label: "西濃運輸", children: [{ value: "xinongkongyun", label: "航空輸送", },], },], }, { value: "guonei", label: "国内", children: [{ value: "yamato", label: "ヤマト運輸", children: [{ value: "yamatozhaijibian", label: "宅急便", }, { value: "yamatohaiyun", label: "海上輸送", }, { value: "yamatokongyun", label: "航空輸送", },], }, { value: "youbianju", label: "郵便局", children: [{ value: "youbianjuzhaijibian", label: "宅急便", }, { value: "youbianjukuaisu", label: "スピード便", }, { value: "youbianjuhaiyun", label: "海上輸送", }, { value: "youbianjukongyun", label: "航空輸送", },], }, { value: "zuochuanjibian", label: "佐川急便", children: [{ value: "zuochuanzhaijibian", label: "宅急便", }, { value: "zuochuankongyun", label: "航空輸送", },], }, { value: "xinongyunshu", label: "西濃運輸", children: [{ value: "xinongkuaisu", label: "スピード便", }, { value: "xinongkongyun", label: "航空輸送", },], },], },],
        }
    },
    props: {
        data: String
    },
    created() {
    },
    methods: {
        handleChange(value) {
            this.deliveryData = value;
        },
        next() {
            this.returnData = this.data + '->ShippingAndBilling(' + this.deliveryData + ')';
            this.$emit('next', this.returnData);
        },
        back() {
            this.$emit('back');
        }
    }
}
</script>
