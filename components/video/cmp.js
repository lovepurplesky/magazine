// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },
 
  lifetimes:{
    attached(){
      this._getVideoInfo();
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onplay() {
      this._taggleVideo();
      this.video.play();
    },
    onMaskTap() {
      this._taggleVideo();
      // 视频描述归0
      video.seek(0);
      // 每次都重第0s开始
      this.video.stop;
    },
    // 私有方法在名字前面加上_
    _taggleVideo() {
      // 首先隐藏封面
      this.setData({
        showPoster: !this.data.showPoster
      })
    },
    onVideoEnd(){
      // 视频播放完成触发
      this._taggleVideo();
    },
    _getVideoInfo(){
      const id = this.properties.videoId;
     this.video = wx.createVideoContext(id, this);
    }
  },

})
