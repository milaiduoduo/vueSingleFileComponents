<template>
  <div class="tabs">
    <div class="tabs-bar">
      <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)">
        <span class="closeShow" v-if="item.closable">X</span>
        {{item.label}}
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    props: {
      value: {type: [String, Number]}
    },
    data(){
      return {
        currentValue: this.value,
        navList: []
      }
    },
    methods: {
      tabCls: function (item) {
        return [
          'tabs-tab',
          {
            'tabs-tab-active': item.name === this.currentValue
          }
        ]
      },
      getTabs(){
        return this.$children.filter(function (item) {
          return item.$options._componentTag === 'pane';
        })
      },
      updateNav(){
//        console.log('in updateNav!');
        this.navList = [];
        let _this = this;
//        console.log('this.getTabs:', this.getTabs());
        this.getTabs().forEach(function (pane, index) {
          _this.navList.push({
//            label,name是pane组件上的属性
            label: pane.label,
            name: pane.name || index,
            closable: pane.closable
          });
//          if (!pane.name) pane.name = index;
          if (index === 0) {
            console.log('currentValue:', _this.currentValue);
            if (!_this.currentValue) {
              _this.currentValue = pane.name || index;
            }
          }
        });
        this.updateStatus();
      },
      updateStatus(){
        let tabs = this.getTabs();
        let _this = this;
        tabs.forEach(function (tab) {
          return tab.show = tab.name === _this.currentValue;
        })
      },
      handleChange(index){
        let nav = this.navList[index];
        let name = nav.name;
        this.currentValue = name;
        /*在调用组件时，给上的v-model中的变量传值的，且是双向绑定值。*/
        this.$emit('input', name);
//        this.$emit('on-click', name);
      }
    },
    watch: {
      currentValue: function () {
        console.log('currentValue:', this.currentValue);
        this.updateStatus();
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">
  .closeShow {
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0px;
    right: 2px;
  }
</style>
