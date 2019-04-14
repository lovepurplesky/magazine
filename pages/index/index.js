//index.js
import { IndexModel } from "../../models/index"
import {random}  from '../../utils/randomStr.js'
const indexModel = new IndexModel();
Page({
  data:{
    articleList:[],
    markList:[],
    recommend:{},
    getMore:'',
    magazineId:0,
    loading:true
  },
  onLoad: function () {
    this.getData(this.data.magazineId);
    // wx.showLoading()
  },
  onReachBottom(){
    // console.log(111)
    // 通知组件进行数据加载（如果在这里进行数据请求，那么在搜索页面还会进行一次请求，代码重复）
    this.setData({
      getMore:random(20)
    })
  },
  onCatalog(){
   wx.switchTab({
     url:"/pages/catalog/catalog"
   })
  },
  onNav(e){
    // console.log(e)
    const index = e.detail.index;
    // 重置articleList，markList,recommend才会出现骨架图
    this.setMagazineId(index);
    this.resetData();
    this.getData(index);
    this.pageScrollToTop();
   
  },
  getData(magazineId) {
    const articleList = indexModel.getArticleList(magazineId);
    const markList = indexModel.getMarkList(magazineId);
    const recommend= indexModel.getRecommendInfo(magazineId);

    Promise.all([articleList, markList, recommend]).then(res => {
      // console.log(res[0], res[1], res[2])
      this.setData({
        articleList: res[0],
        markList: res[1],
        recommend: res[2]
      })
      // wx.hideLoading()
      this.hideLoading();
    })
  },
  hideLoading(){
    this.setData({
      loading:false
    })
  },
  resetData(){
    this.setData({
      articleList:[],
      markList:[],
      recommend:{},
    })
  },
  pageScrollToTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      // duration: 300
    })
  },
  setMagazineId(index){
    this.setData({
      magazineId:index,
    })
  }


})
