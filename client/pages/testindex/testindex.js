Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '《中国共产党章程》',
    time: '2018-02-03',
    organize: '全国人民代表大会',
    content: '第一章 总 则 第一条　为坚持党的领导，加强党的建设，全面从严治党，强化党内监督，保持党的先进性和纯洁性，根据《中国共产党章程……',
  },

  tocolection: function () {
    wx.navigateTo({
      url: '../collection/collection'
    })
  },
  todetail: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  tofeedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this//不要漏了这句，很重要
    // wx.request({
    //   // url: 'https://www.apiopen.top/novelApi',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     //将获取到的json数据，存在名字叫zhihu的这个数组中
    //     that.setData({
    //       test: res.data.stories,
    //       //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    //     })
    //   },
    //   fail: function (res) {
    //     console.log("failed")
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})