<template>
  <div style="text-align: left">
    <div style="padding: 10px">
      見積ID:<el-input style="font-size: 12px; width: 110px; margin-right: 40px"  ></el-input>
      見積作成日:<el-input style="font-size: 12px; width: 110px"></el-input>
      <el-dropdown>
        <el-button style="margin-left: 30px">
          状態<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>承認待ち</el-dropdown-item>
          <el-dropdown-item>差戻し</el-dropdown-item>
          <el-dropdown-item>承認済み</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown><br>
      顧客名:<el-input style="font-size: 12px; width: 110px"></el-input>
      営業者名:<span></span><el-input style="font-size: 12px; width: 110px"></el-input>

    </div>
    <el-row>
      <br>
      <br>
      <el-button type="success" @click="select" style="transform: translateX(400px); ">検索<i class="el-icon-search;"
          style="margin-left: 5px"></i></el-button>
    </el-row>
    <div style="margin-top: 10px">
      <el-table :data="items" border stripe :header-cell-style="{ background: '#eee' }"
        @selection-change="handleSelectionChange">
        <!-- <el-table-column type="selection"> </el-table-column> -->
        <el-table-column prop="quotationId" label="見積ID" min-width="10%" header-align="left" style="height: 50px;">
        </el-table-column>
        <el-table-column prop="orderId" label="注文ID" min-width="10%" header-align="left">
        </el-table-column>
        <el-table-column prop="customerName" label="顧客名" min-width="10%" header-align="left">
        </el-table-column>
        <el-table-column prop="salesmanId" label="営業者名" min-width="10%" header-align="left">
        </el-table-column>
        <el-table-column prop="quotationCreationDate" label="見積作成日" min-width="10%" header-align="left">
        </el-table-column>
        <el-table-column prop="status" label="状態" min-width="10%" header-align="left">
          <template slot="header">
            <el-dropdown>
              <el-button type="text" style="">
                状態 <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>承認待ち</el-dropdown-item>
                <el-dropdown-item>差戻し</el-dropdown-item>
                <el-dropdown-item>承認済み</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column prop="memo" label="メモ" min-width="10%" header-align="center">
        </el-table-column>
      </el-table>
      <div style="padding: 10px">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
          :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "abc",
  data() {
    const end = new Date(); // 当前日期
    const start = new Date(end.getFullYear(), end.getMonth() - 1, 1); // 上个月的第一天
    return {
      total: 0,
      pageNum: 1,
      pageSize: 5,
      defaultMonthDate: start, // 设置默认值为上个月的第一天
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },

      items: [
        {
          quotationId: <a href="https://www.baidu.com">A001</a>,

          orderId: "A001",
          customerName: "A",
          salesmanId: "伊藤",
          quotationCreationDate: "2024年5月9日",
          status: "承認待ち",
          memo: "aaaaa",
        },
        {
          quotationId: <a href='https://www.4399.com' >A002</a>,
          orderId: "A002",
          customerName: "B",
          salesmanId: "鶴澤",
          quotationCreationDate: "2024年5月9日",
          status: "差戻し",
          memo: "bbbbbb",
        },
        {
          quotationId: "A003",
          orderId: "A003",
          customerName: "C",
          salesmanId: "山本",
          quotationCreationDate: "2024年5月9日",
          status: "承認済み",
          memo: "ccccc",
        },
        {
          quotationId: "A004",
          orderId: "A004",
          customerName: "D",
          salesmanId: "本田",
          quotationCreationDate: "2024年5月9日",
          status: "承認済み",
          memo: "dddd",
        },
        {
          quotationId: "A005",
          orderId: "A005",
          customerName: "E",
          salesmanId: "安西",
          quotationCreationDate: "2024年5月9日",
          status: "承認済み",
          memo: "eeeeee",
        },


      ],
      value2: "",
    };
  },
  props: {},
  methods: {
    handleSelectionChange(val) {
      console.log(val);
    },
    edit(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      /*传递过来当前是第几页*/
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //获取当前每页显示条数
      this.load();
    },
    handleCurrentChange(val) {
      /*传递过来当前是第几页*/
      console.log(`当前页: ${val}`);
      this.pageNum = val; //获取当前第几页
      this.load();
    },
    select() {
      console.log("select");
    },
    reset() {
      console.log("reset");
    },
    newOrder() {
      console.log("newOrder");
      this.$router.push({ name: "NewOrder" });
    },

    editOrder() { },
    cancelOrder() { },
    reBuy() { },
  },
};
</script>
