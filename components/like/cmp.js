// components/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached(){
    // console.log("like:" + this.data.like)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike(){
      const like = !this.data.like;
      this.setData({
        like
      })
      // 触发自定义事件，告诉文章组件是否喜欢
      this.triggerEvent('like',{
        like
      },{})
    }
  }
})
