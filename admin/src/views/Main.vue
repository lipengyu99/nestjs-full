<template>
 <el-container>
  <el-aside width="200px">
    <el-menu style="height:100vh" mode="vertical" :default-active="$route.path" router >
      <el-submenu v-for="(item, index) in menu.items" 
      :index="'menu-item-${index}'" 
      :key="index">
        <template slot="title">{{item.title}}</template>
        <el-menu-item v-for="(subItem, subIndex) in item.items" 
        :key="subIndex" 
        :index="subItem.path">
        {{subItem.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      <h3>后台管理界面</h3>
      <!-- header content -->
      </el-header>
    <el-main>
      <!-- main content -->
      <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          {
            title: "首页",
            path: "/"
          },
       
          {
            title: "资讯分类",
            path: "/courses/list"
          },
          {
            title: "资讯详情",
            path: "/episodes/list"
          },
          {
            title:'意向用户',
            path:'/hidden/list'
          }
        ]
      },
      {
        title: "运营管理",
        items: [
          {
            title: "用户管理",
            path: "/users/list"
          }
        ]
      }
    ]
  };
}
</script>

<style>
</style>
