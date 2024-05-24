<template>
    <el-menu :default-openeds="['1']" style="min-height: 100%" background-color="rgb(255, 147, 180)" text-color="#fff"
        :collapse-transition="false" router>
        <div style="height: 60px;line-height: 60px;text-align: center;font-size: 18px;">
            <img src="../assets/abcdef.png" alt="" style="width: 150px;position: relative;top: -20px;margin-right: -50px;">
            <b style="color: #fff">受発注</b>
        </div>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>
                <span slot="title">リスト</span>
            </template>
            <el-menu-item-group>
                <template slot="title">グループ</template>
                <el-menu-item index="/user">在庫確認</el-menu-item>
                <el-menu-item index="/">受注管理</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'Aside',
    props: {
    }
}

