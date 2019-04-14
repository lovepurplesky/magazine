// components/articleList/cmp.js
import { IndexModel } from "../../models/index"
import { SearchModel } from "../../models/search.js"
const indexModel = new IndexModel();
const Search = new SearchModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:Array,
    more:{
      type:String,
      value:'',
      observer:"loadMore"
    },
    magazineId:{
      type:Number,
      observer:"resetNoMoreData"
    },
    word:String
  },
  attached(){
    const curPage = getCurrentPages();
    const index = curPage.length - 1 ;
    let type = '';
     if(curPage[index].route == 'pages/search/search'){
        type = 'search'
     }else{
      type = 'index'
     }
     this.setData({
       type
     })
  },
  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    noMoreData:false,
    // 定义当前是哪个页面使用articleList组件
    type:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(){
      // 优化1：判断是否正在加载数据，如果正在加载就不请求数据
      if(this._isLock() || this.data.noMoreData){
        return 
      }
      // 加锁
      this._loadLock();
      // console.log('loading:'+this.data.loading)
      // console.log(this.data.type)
      this.getMoreData();
     
    },
    getMoreData(){
      const start = this.data.articleList.length;
      let getMore = null;
        if(this.data.type == 'search'){
          const word = this.data.word;
          getMore = Search.getSearchArticleList(word,start);
      }else{
        const magazineId = this.properties.magazineId;
        getMore = indexModel.getArticleList(magazineId,start);
      
      }
      getMore.then(res=>{
        this._setMoreData(res);
        this._unLoadLock();
      });
    },
    _isLock(){
      return this.data.loading
    },
    _loadLock(){
      this.setData({
        loading:true
      })
    },
    _unLoadLock(){
      this.setData({
        loading:false
      })
    },
    _setMoreData(list){
      const combineList = this.data.articleList.concat(list);
      // 优化2：判断是否还有数据
      if(combineList.length == this.data.articleList.length){
        this.setData({
          noMoreData:true
        })
      }
      this.setData({
          articleList:combineList,
        }
      )
    },
    resetNoMoreData(){
      this.setData({
        noMoreData:false
      })
    }
  }
})
