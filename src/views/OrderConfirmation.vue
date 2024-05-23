<template>
<<<<<<< HEAD
  <div style="margin-top: 50px">
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%"
      :header-cell-style="{ background: '#eee' }"
    >
      <el-table-column prop="name" label="商品名" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="unitprice"
        label="商品単価"
        width="180"
        align="right"
      >
      </el-table-column>
      <el-table-column prop="quantity" label="購入数量" align="right">
      </el-table-column>
      <el-table-column prop="specification" label="商品規格" align="center">
      </el-table-column>
      <el-table-column prop="stockstatus" label="産地" align="center">
      </el-table-column>
    </el-table>
    <div style="margin-bottom: 30px"></div>
    <el-descriptions title="配送方法">
      <el-descriptions-item label="郵便番号">
        <el-tag size="small">100-0001</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="予定配送日">
        <el-tag size="small">2024/05/14</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="配送方法">
        <el-tag size="small">ヤマト運輸</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="住所">
        <el-tag size="small">東京都台東区浅草橋3丁目12-13</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="電話番号">
        <el-tag size="small">01012345678</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="支払い方法">
        <el-tag size="small">クレジットカード</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    <div class="indent-top" style="text-align: left">
      <span>ご注文金額:</span>
      <el-tag size="small">260,000円</el-tag>
    </div>
    <div
      style="
=======
    <div style="margin-top: 50px;">
        <el-table :data="tableData" border stripe style="width: 100%" :header-cell-style="{ background: '#eee' }">
            <el-table-column prop="productName" label="商品名" width="180" align="center">
            </el-table-column>
            <el-table-column prop="salesPrice" label="販売価格" width="180" align="right">
            </el-table-column>
            <el-table-column prop="quantity" label="購入数量" align="right">
            </el-table-column>
            <el-table-column prop="standard" label="商品規格" align="center">
            </el-table-column>
            <el-table-column prop="origin" label="産地" align="center">
            </el-table-column>
            <el-table-column prop="itemTotal" label="単品合計金額" align="center">
            </el-table-column>
        </el-table>
        <div style="margin-bottom: 30px;"></div>
        <el-descriptions title="配送方法">
            <el-descriptions-item label="名前">
                <el-tag size="small">岸田太郎</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="郵便番号">
                <el-tag size="small">100-0001</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="配送方法">
                <el-tag size="small">ヤマト運輸</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="届け先">
                <el-tag size="small">東京都台東区浅草橋3丁目12-13</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="電話番号">
                <el-tag size="small">01012345678</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="支払い方法">
                <el-tag size="small">クレジットカード</el-tag>
            </el-descriptions-item>
        </el-descriptions>
        <div class="indent-top" style="text-align: left;">
            <span>ご注文金額:</span>
            <el-tag size="small">260,000円</el-tag>
        </div>
        <div style="position: fixed; bottom: 0; right: 0; margin-right: 50px; margin-bottom: 50px;">
            <el-button v-if="showBackButton" type="primary" @click="back">戻る</el-button>
            <el-button type="primary" @click="next">確定</el-button>
        </div>

        <div style="
>>>>>>> 66671b5 (aa)
        position: fixed;
        bottom: 0;
        right: 0;
        margin-right: 50px;
        margin-bottom: 50px;
<<<<<<< HEAD
      "
    >
      <el-button v-if="showBackButton" type="primary" @click="back"
        >戻る</el-button
      >
      <el-button type="primary" @click="next">確定</el-button>
    </div>
  </div>
=======
      ">
            <el-button v-if="showBackButton" type="primary" @click="back">戻る</el-button>
            <el-button type="primary" @click="next">確定</el-button>
        </div>
    </div>
>>>>>>> 66671b5 (aa)
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      showBackButton: true, // 控制是否显示 "戻る" 按钮的变量
      returnData: "",
      total: 0,
      pageNum: 1,
      pageSize: 5,
      tableData: [
        {
          name: "商品A",
          unitprice: "300",
          quantity: "100",
          specification: "Small",
          stockstatus: "アメリカ",
        },
        {
          name: "商品B",
          unitprice: "400",
          quantity: "200",
          specification: "Medium",
          stockstatus: "オーストラリア",
        },
        {
          name: "商品C",
          unitprice: "500",
          quantity: "300",
          specification: "Large",
          stockstatus: "ブラジル",
        },
      ],
      drawer: false,
      direction: "rtl",
    };
  },
  props: {
    data: String,
  },
  created() {},
  methods: {
    next() {
      this.showBackButton = false;
      this.returnData = this.data + "->OrderConfirmation";
      this.$emit("next", this.returnData);
    },
    back() {
      this.$emit("back");
    },
  },
};
</script>
