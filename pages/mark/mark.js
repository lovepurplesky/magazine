// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    // 判断用户是否授权
    authorized: false,
    likeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this. userAuthorized();

  },
  getMyLike(){
     // 从缓存中取数据
     const likeList = wx.getStorageSync("likeList") || [];
     this.setData({
       likeList
     })
  },
  userAuthorized(){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // console.log(res.userInfo)
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
              this.getMyLike();
            }
          })
        }
      }
    })
  },
  onGetUserInfo(e) {
    // console.log(e)
    const userInfo = e.detail.userInfo;
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
      this.getMyLike();
    }

  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   if(this.data.authorized){
    this.getMyLike();
   }
   
  },

 

})