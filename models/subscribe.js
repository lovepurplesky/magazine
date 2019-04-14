class subscribe{
    setMyTagList(value){
         wx.setStorageSync("markTagList",value) ;
    }
    getMyTagList(){
        return wx.getStorageSync('markTagList') || [];
    }
    removeMyTag(tagId){
        const myTagList = this.getMyTagList();
        let myIndex = 0;
        myTagList.forEach((item,index)=>{
            if(item.tagId == tagId){
                myIndex = index;
            }
        })
        myTagList.splice(myIndex,1);
        this.setMyTagList(myTagList);
    }
}
export {subscribe}