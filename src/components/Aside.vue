<template>
    <el-menu :default-openeds="['1']" style="min-height: 100%" background-color="rgb(48, 65, 86)" text-color="#fff"
        :collapse-transition="false" router>
        <div style="height: 60px;line-height: 60px;text-align: center;font-size: 18px;">
            <img src="../assets/logo.png" alt="" style="width: 25px;position: relative;top: 8px;margin-right: 5px;">
            <b style="color: #fff">受発注システム</b>
        </div>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>
                <span slot="title">見積</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组二</template>
                <el-menu-item index="/user">営業見積一覧</el-menu-item>
                <el-menu-item index="/">営業見積明細</el-menu-item>
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

</script>
