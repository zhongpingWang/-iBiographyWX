var wxCharts = require('../../utils/wxcharts.js');
var lineChart = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    res: {
      a: 1
    },
    styleStr: 'font-size:1rem'

  },

  testaaa(){
     console.log(1)
  },

  createSimulationData: function () {

    var categories = [];

    var data = [];

    for (var i = 0; i < 15; i++) {
      categories.push((i + 1)+"时");
      data.push(Math.random() * (20 - 10) + 10);
    }
    
    return {
      categories: categories,
      data: data
    }
  },

  tapNavigate(event){ 

    
   

    wx.navigateTo({
      url: '../index/index?a='+event.target.dataset.sid,
    })
  },

  canvasTest(){
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.canvasTest();

    var windowWidth = 200;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.screenWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
  
    var simulationData = this.createSimulationData();

    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [ {
        name: '天气',
        data: simulationData.data,
        format: function(val, name) {
          return val.toFixed(2) + 'oc';
        }
      }], 
      dataLabel:true,
      xAxis:{
        disableGrid:false,
      },
      width: windowWidth,
      height: 120,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
    // wx.showToast({
    //   title:"abc"
    // })

    // wx.showLoading({
    //   title:"ja"
    // })

    // wx.showModal({
    //   title:"abc",
    //   content:"cdf"
    // })
    // wx.setNavigationBarTitle({
    //   title: '当前页面'
    // })
    // wx.showNavigationBarLoading()
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // wx.getLocation({
    //   success(res) { 
    //     wx.openLocation({
    //       longitude: res.longitude,
    //       latitude: res.latitude
    //     })
    //     console.log(res)
    //   }
    // })

    // wx.getNetworkType({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})