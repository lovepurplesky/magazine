class likeModel{
    getLikeList(){
        return wx.getStorageSync("likeList") || [];
    }
    setLikeList(value){
        wx.setStorageSync('likeList',value);
    }
    addLikeList(articleDetail){
        const likeList = this.getLikeList();
        likeList.unshift(articleDetail);
        this.setLikeList(likeList);
    }
    removeLikeList(artId){
        const likeList = this.getLikeList();
        let myIndex = 0;
        likeList.forEach((item,index)=>{
            if(item.artId == artId){
                myIndex = index
            }
        })
        likeList.splice(myIndex,1);
        this.setLikeList(likeList);
    }
    getLikeStatus(artId){
        const likeList = this.getLikeList();
        let likeStatus = false;
        likeList.forEach((item,index)=>{
            if(item.artId == artId){
               likeStatus = true;
            }
        })
        return likeStatus;

    }

}
export {likeModel}