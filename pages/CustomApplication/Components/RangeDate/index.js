



Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {            // 属性名
      type: Object,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {}    // 属性初始值（可选），如果未指定则会根据类型选择一个
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    dateStart: "年-月-日",
    dateEnd: "年-月-日"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindStartChange: function (e) {
      this.setData({
        dateStart: e.detail.value
      })
    },
    bindEndChange: function (e) {
      this.setData({
        dateEnd: e.detail.value
      })
    }
  },

  ready() {

    this.setData({
      dateStart: this.properties.data.value[0] || '年-月-日',
      dateEnd: this.properties.data.value[1] || '年-月-日'
    });

  }

})
