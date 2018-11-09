// pages/component_1/com_1.js
Component({
  externalClasses: ['my-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    contentOut: {
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text: '我是内部的数据',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
