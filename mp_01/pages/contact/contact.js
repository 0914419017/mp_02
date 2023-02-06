// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList:[],
        isloding:false
    },

    getColors(){
        this.setData({
            isloding:true
        })

        wx.showLoading({
          title: '数据加载中...'//展示 loading 效果
        })
        //发起请求 获取随机颜色值
        wx.request({
          url: 'https://www.escook.cn/api/color',
          method:"GET",
          success:({data:res})=>{
              this.setData({
                  colorList:[...this.data.colorList,...res.data]
              })
          },

          complete:()=>{
              wx.hideLoading()//隐藏 loading 效果
              this.setData({
                  isloding:false
              })
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColors()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if(this.data.isloding) return
        //调用获取随机颜色的方法
        this.getColors()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})