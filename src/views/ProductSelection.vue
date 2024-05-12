<template>
    <div>
        <div style="text-align: left;">
            <el-input placeholder="请输入内容" style="width: 200px;"></el-input>
            <el-button>默认按钮</el-button>

        </div>

        <div style="margin-top: 50px;">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="商品名" width="180">
                </el-table-column>
                <el-table-column prop="name" label="商品単価" width="180">
                </el-table-column>
                <el-table-column prop="address" label="商品数量">
                </el-table-column>
                <el-table-column prop="specification" label="商品規格">
                </el-table-column>
                <el-table-column label="操作">
                    <el-button type="warning" size="mini" icon="el-icon-plus" circle></el-button>
                </el-table-column>
            </el-table>
        </div>
        <div style="position: fixed; bottom: 0; right: 0; margin-right: 50px; margin-bottom: 50px;">
            <el-button @click="drawer = true" style="margin-left: 16px;">
                注文確認
            </el-button>
        </div>
        <div style="padding: 10px;position: fixed; bottom: 0; margin-right: 50px; margin-bottom: 50px;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
                :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        <el-drawer title="注文リスト" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="商品名" width="180">
                </el-table-column>
                <el-table-column prop="name" label="商品単価" width="180">
                </el-table-column>
                <el-table-column prop="address" label="商品数量">
                </el-table-column>
                <el-table-column prop="specification" label="商品規格">
                </el-table-column>
                <el-table-column label="操作">
                    <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
                </el-table-column>
            </el-table>
            <div style="position: fixed; bottom: 0; right: 0; margin-right: 50px; margin-bottom: 50px;">
                <el-button type="primary" @click="next">次の手順</el-button>
            </div>
        </el-drawer>
    </div>
</template>


<script>
export default {
    name: "OrderList",
    data() {
        return {
            total: 0,
            pageNum: 1,
            pageSize: 5,
            tableData: [
                {
                    date: '2024-05-12',
                    name: '商品A',
                    address: '¥100',
                    specification: 'Small'
                },
                {
                    date: '2024-05-11',
                    name: '商品B',
                    address: '¥200',
                    specification: 'Medium'
                },
                {
                    date: '2024-05-10',
                    name: '商品C',
                    address: '¥150',
                    specification: 'Large'
                }
            ],
            drawer: false,
            direction: 'rtl',
        }
    },
    created() {
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        next() {
            const data = 'OrderList';
            this.$emit('next', data);
        }
    }
}
</script>