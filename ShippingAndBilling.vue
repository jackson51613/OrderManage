<template>
    <div>
      <div style="text-align: left; margin-top: 30px; margin-bottom: 30px">
        ご配送：
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="お名前:"
          prop="name"
          style="width: 300px; margin-top: 30px"
        >
          <el-input v-model="ruleForm.name" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item
          label="お郵便番号:"
          prop="postCode"
          style="width: 300px; margin-top: 30px"
        >
          <el-input v-model="ruleForm.postCode" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item
          label="お住所:"
          prop="address"
          style="width: 300px; margin-top: 30px"
        >
          <el-input v-model="ruleForm.address" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item
          label="配送方法:"
          prop="deliveryMethod"
          style="width: 300px; margin-top: 30px"
        >
          <div style="text-align: left">
            <span class="demonstration"></span>
            <el-cascader
              placeholder=""
              v-model="deliveryMethod"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"
              aria-required="true"
            >
            </el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery" style="width: 50px">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
      </el-form>
      <div
        style="
          position: fixed;
          bottom: 0;
          right: 0;
          margin-right: 50px;
          margin-bottom: 50px;
        "
      >
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
        returnData: "",
        deliveryData: "",
        value: [],
  
        ruleForm: {
          name: "",
          postCode: "",
          address: "",
          deliveryMethod: "",
          delivery: false,
        },
        rules: {
          name: [
            {
              required: true,
              message: "お名前を入力してください",
              trigger: "blur",
            },
            {
              min: 1,
              max: 50,
              message: "入力値の範囲は1から50まで",
              trigger: "blur",
            },
          ],
          deliveryMethod: [
            { required: true, message: "请选择配送方式", trigger: "blur" },
          ],
          postCode: [
            {
              required: true,
              message: "郵便番号を入力してください",
              trigger: "blur",
            },
            {
              pattern: /^[0-9]{3}-[0-9]{4}$/,
              message: "郵便番号の形式が正しくありません（例：114-0002）",
              trigger: "blur",
            },
          ],
          address: [
            {
              required: true,
              message: "お住所を入力してください",
              trigger: "blur",
            },
          ],
        },
  
        options: [
          {
            value: "haiwai",
            label: "海外",
            children: [
              {
                value: "yamato",
                label: "ヤマト運輸",
                children: [
                  { value: "yamatohaiyun", label: "海上輸送" },
                  { value: "yamatokongyun", label: "航空輸送" },
                ],
              },
              {
                value: "youbianju",
                label: "郵便局",
                children: [
                  { value: "youbianjuhaiyun", label: "海上輸送" },
                  { value: "youbianjukongyun", label: "航空輸送" },
                ],
              },
              {
                value: "zuochuanjibian",
                label: "佐川急便",
                children: [{ value: "zuochuankongyun", label: "航空輸送" }],
              },
              {
                value: "xinongyunshu",
                label: "西濃運輸",
                children: [{ value: "xinongkongyun", label: "航空輸送" }],
              },
            ],
          },
          {
            value: "guonei",
            label: "国内",
            children: [
              {
                value: "yamato",
                label: "ヤマト運輸",
                children: [
                  { value: "yamatozhaijibian", label: "宅急便" },
                  { value: "yamatohaiyun", label: "海上輸送" },
                  { value: "yamatokongyun", label: "航空輸送" },
                ],
              },
              {
                value: "youbianju",
                label: "郵便局",
                children: [
                  { value: "youbianjuzhaijibian", label: "宅急便" },
                  { value: "youbianjukuaisu", label: "スピード便" },
                  { value: "youbianjuhaiyun", label: "海上輸送" },
                  { value: "youbianjukongyun", label: "航空輸送" },
                ],
              },
              {
                value: "zuochuanjibian",
                label: "佐川急便",
                children: [
                  { value: "zuochuanzhaijibian", label: "宅急便" },
                  { value: "zuochuankongyun", label: "航空輸送" },
                ],
              },
              {
                value: "xinongyunshu",
                label: "西濃運輸",
                children: [
                  { value: "xinongkuaisu", label: "スピード便" },
                  { value: "xinongkongyun", label: "航空輸送" },
                ],
              },
            ],
          },
        ],
      };
    },
    props: {
      data: String,
    },
    created() {},
    methods: {
      handleChange(value) {
        this.deliveryData = value;
      },
      next() {
        this.returnData =
          this.data + "->ShippingAndBilling(" + this.deliveryData + ")";
        this.$emit("next", this.returnData);
      },
      back() {
        this.$emit("back");
      },
    },
  };
  </script>
  
  