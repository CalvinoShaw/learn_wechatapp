Page({

  /**
   * 页面的初始数据
   */
  data: {
    file: {
      id: '',
      title: '',
      time: '',
      organize: '',
      summary: '',
      content: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var singlefileid = getApp().singlefileid;
    var that = this
    wx.request({
      url: 'https://0gwlwiqm.qcloud.la/weapp/demo',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          'file': res.data.data.file[singlefileid]
        })
      },
      fail: function (res) {
        console.log("failed")
      }
    })
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