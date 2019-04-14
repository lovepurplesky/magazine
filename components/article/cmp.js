// components/article/cmp.js
import {likeModel} from '../../models/like.js'
const indexModel = new likeModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus:false
  },
  attached(){
    //  console.log('attache')
      const articleDetail = this.data.articleDetail;
      const artId = articleDetail.artId;
      const likeStatus = indexModel.getLikeStatus(artId);
      this.setData({
        likeStatus
      })
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      const like = e.detail.like;
      // console.log(like)
      const articleDetail = this.data.articleDetail;
      const likeList = wx.getStorageSync('likeList') || [];
      const artId = articleDetail.artId;
      if(like){
        // 缓存文章 
        indexModel.addLikeList(articleDetail);
        
      }else{
        // 移除文章
        indexModel.removeLikeList(artId)
      }
    }
  }
})
