// pages/catalog/catalog.js
import {tagInfoList} from "../../utils/tagList.js"
import {subscribe} from "../../models/subscribe.js"
const subscribeModel = new subscribe();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList,
    myTagList:[],
    searchWord:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
 getData(){
  const myTagList = subscribeModel.getMyTagList();
    this.setData({
      myTagList
    })
},
 onSubscribeTap(){
   this.getData();
 },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     this.setData({
      searchWord:''
    })
  },

})