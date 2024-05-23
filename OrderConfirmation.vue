<template>
     <div style="margin-top: 50px;">
            <el-table :data="tableData" border stripe style="width: 100%" :header-cell-style="{ background: '#eee' }">
                <el-table-column prop="name" label="商品名" width="180">
                </el-table-column>
                <el-table-column prop="unitprice" label="商品単価" width="180">
                </el-table-column>
                <el-table-column prop="quantity" label="商品数量">
                </el-table-column>
                <el-table-column prop="specification" label="商品規格">
                </el-table-column>
                <el-table-column prop="stockstatus" label="在庫状況">
                </el-table-column>
            </el-table>

            <div style="text-align: left; margin-top: 20px">
        <span>配送方法：ヤマト運輸</span><span style="margin-left: 200px">届け予定日:2024/5/19</span>
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
            returnData: '',
            total: 0,
            pageNum: 1,
            pageSize: 5,
            tableData: [
                {
                    name: '商品A',
                    unitprice: '300',
                    quantity: '100',
                    specification: 'Small',
                    stockstatus: '在庫あり'
                },
                {
                    name: '商品B',
                    unitprice: '400',
                    quantity: '200',
                    specification: 'Medium',
                    stockstatus: '残りわずか'
                },
                {
                    name: '商品C',
                    unitprice: '500',
                    quantity: '300',
                    specification: 'Large',
                    stockstatus: '入荷待ち',
                }
            ],
            drawer: false,
            direction: 'rtl',

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