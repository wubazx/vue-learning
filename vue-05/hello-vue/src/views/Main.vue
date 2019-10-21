<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>博客信息</template>
              <router-link to="/blog/newBlog"><el-menu-item index="1-1">写博客</el-menu-item></router-link>
              <router-link :to="{name: 'BlogList',params: {id:1}}"><el-menu-item index="1-2">博客列表</el-menu-item></router-link>
              <el-menu-item index="1-3">博客分类</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>网站管理</template>
              <el-menu-item index="2-1">网站介绍</el-menu-item>
              <el-menu-item index="2-2">友情链接</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <router-link to="/goHome1">首页</router-link>
          <router-link to="/goHome2/wuba">首页</router-link>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>wuba</span>
        </el-header>

        <el-main>
          <!--展示路由信息-->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>
  export default{
    name: "Main"
  }
<style>
</style>
