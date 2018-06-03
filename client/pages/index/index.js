Page({

  /**
   * 页面的初始数据
   */
  data: {
    file: {
      id : 'init data',
      title: 'init data',
      time: 'init data',
      organize: 'init data',
      summary: 'init data',
      content: 'init data',
    },
  },

  tocolection: function () {
    wx.navigateTo({
      url: '../collection/collection'
    })
  },
  todetail: function (e) {
    var id = e.currentTarget.id;
    var app = getApp();
    app.singlefileid = id;
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
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://0gwlwiqm.qcloud.la/weapp/demo',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // let file = res.data.data.file
        // file.forEach((item) => {
        //   item.title = item.title.substring(0, 18) + "...",
        //   item.content = item.content.substring(0, 65) + "..."
        // })
        // console.log(res.data)
        // 将获取到的json数据，存在这个数组中
        // res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        that.setData({
          'file': res.data.data.file,
          // 'file.content': res.data.data.file.content.substring(0,100)
        })
        // console.log(JSON.stringify(that.data.file))
        // console.log(that.data.file[0].id)
        // console.log(typeof(that.data.file[0].id))
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