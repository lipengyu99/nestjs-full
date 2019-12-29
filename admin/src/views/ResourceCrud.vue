<template>
    <div>
        <avue-crud 
        v-if="option.column"
        :page="page"
        @on-load="onLoad"
        @size-change="sizeChange"
        @current-change="currentChange"
        @search-change="searchChange"
        :data="data.data" 
        :option="option" 
        @row-save="create"
        @row-update="update"
        @row-del="remove">

        </avue-crud>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceCrud extends Vue {
  @Prop(String) resource!: string;

  data: any = {};
  option: any = {};
  page: any = {
    currentPage: 1,
    // pageSize:2,
    // pageSizes:[2,5,10],
    total: 0
  };
  query: any = {
    page: 1
    // limit:2
  };
  async onLoad(page: any) {
    this.query.page = this.page.currentPage;
    this.query.limit = this.page.pageSize;
    this.fetch();
    // window.console.log(this.page)
  }

  async currentChange(val: any) {
    this.page.currentPage = val;
    this.fetch();
    this.query.page = this.page.currentPage;
    this.query.limit = this.page.pageSize;
    this.$message.success("页码" + val);
  }

  async sizeChange(val: any) {
    this.page.currentPage = 1;
    this.query.page = this.page.currentPage;
    this.page.pageSize = val;
    this.query.limit = this.page.pageSize;
    this.fetch();
    this.$message.success("行数" + val);
  }

  async fetch() {
    const res = await this.$http.get(this.resource, {
      params: {
        query: this.query
      }
    });
    this.page.total = res.data.total;
    this.data = res.data;
    //window.console.log(this.data)
  }
  async fetchOption() {
    const res = await this.$http.get(this.resource + "/option");
    this.option = res.data;
  }

  async create(row: any, done: any, loading: any) {
    await this.$http.post(this.resource, row);
    this.$message.success("success!");
    this.fetch();
    done();
  }

  async update(row: any, index: any, done: any, loading: any) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(this.resource + "/" + row._id, data);
    this.$message.success("success!");
    this.fetch();
    done();
  }

  async remove(row: any) {
    this.$confirm("此操作将永久删除该文件是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(async () => {
        await this.$http.delete("/" + this.resource + "/" + row._id);
        this.fetch();
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }

  async searchChange(params: any, done: any) {

  //  window.console.log(params);
    done();
    //模糊查询
    params.title = { $regex: params.title };
    this.query.where = params;
    this.fetch();
    this.$message.success(JSON.stringify(params));
    // window.console.log(params)
  }

  created() {
    this.fetch();
    this.fetchOption();
  }
}
</script>

<style>
</style>
