// components/subscribe/cmp.js
import {subscribe} from '../../models/subscribe.js'
const subscribeModel = new subscribe();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class:"common",
    myTagList:[]
  },
  attached(){
    this.judgeMyTagList();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){ 
      const mark = {
        tag:this.data.tag,
        tagId:this.data.tagId
      }
      // 进行缓存
      if(this.data.class=="common"){   
        // 存
        const myTagList = this.getMyTagList();
        myTagList.push(mark)
        subscribeModel.setMyTagList(myTagList)
       }else{
        //  取
        subscribeModel.removeMyTag(mark.tagId);
       }
      this.toggleClass();
      this.triggerEvent('tap')
    },
    getMyTagList(){
      const myTagList = subscribeModel.getMyTagList();
      this.setData({
        myTagList
      })
      return myTagList;
    },
    judgeMyTagList(){

      const myTagList = this.getMyTagList();
      myTagList.forEach(item=>{
        if(item.tagId == this.data.tagId){ 
          this.setData({
            class:"subscribe"
          })
        }
      })
    },
    toggleClass(){
      let className = '';
      if(this.data.class=="common"){   
        className = "subscribe"
       }else{
        className = 'common'
       }
       this.setData({
         class:className
       })
    }
  }
})
