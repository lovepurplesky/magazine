// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array,
   
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    imgArr:["http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
    "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
    "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
    "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
    
    ]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    
    onTap(e){
      var imgArr = this.properties.imgArr;
      var index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls:imgArr ,
        current:imgArr[index]
      })
    }
  }
})
