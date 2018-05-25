<template>
  <div>
    <tabs v-model="activeKey">
      <pane label="标签一" name="1" :closable="false">
        <input type="text" placeholder="输入点什么...">
        <p>标签一的内容1</p>
        <p>标签一的内容2</p>
        <p>标签一的内容3</p>
      </pane>
      <pane label="标签二" name="2">标签二的内容</pane>
      <pane label="标签三" name="3">标签三的内容</pane>
      <pane label="标签四" name="4">标签四的内容</pane>
      <h1>我是打酱油的,每个标签里能看到我！</h1>
    </tabs>
  </div>
</template>
<script type='text/ecmascript-6'>
  import tabs from '@/components/tab';
  import pane from '@/components/pane';

  export default {
    data(){
      return {
        activeKey: '1'
      }
    },
    components: {
      pane,
      tabs
    },
    watch: {
      activeKey(){
        console.log("activeKey: ", this.activeKey);
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">
  [v-cloak] {
    display: none;
  }

  .tabs {
    font-size: 14px;
    color: #657180;
  }

  .tabs-bar:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #d7dde4;
    margin-top: -1px;
  }

  .tabs-tab {
    display: inline-block;
    padding: 4px 16px;
    margin-right: 6px;
    background: #fff;
    border: 1px solid #d7dde4;
    cursor: pointer;
    position: relative;
  }

  .tabs-tab-active {
    color: #3399ff;
    border-top: 1px solid #3399ff;
    border-bottom: 1px solid #fff;
  }

  .tabs-tab-active:before {
    content: '';
    display: block;
    height: 1px;
    background: #3399ff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .tabs-content {
    padding: 8px 0;
  }
</style>
