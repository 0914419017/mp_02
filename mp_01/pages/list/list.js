// pages/list/list.js
const myBehavior = require("../../behavior/my-behavior")
Page({

    /**
     * 挂载myBehavior
     */
    behaviors:[myBehavior],

    /**
     * 页面的初始数据
     */
    data: {
        info:'hello world',
        imgSrc:'http://www.itheima.com/images/logo.png',
        randomNum1:Math.random()*10,
        randomNum2:Math.random().toFixed(2),
        count: 0,
        msg:'你好,',
        type:1,
        flag:false,
        arr1:['苹果','华为','小米'],
        userList:[
            {id:1,name:"小红"},
            {id:2,name:"小明"},
            {id:3,name:"小白"}
        ],
        nickname:"wushuai"
    },

    syncCount(e){
        // console.log('syncCount')
        // console.log(e.detail.value)
        this.setData({
            count:e.detail.value
        })
    },

    getChild(){
        const child = this.selectComponent('.customA')
        // console.log(child)
        child.setData({
            count:child.properties.count + 1
        })
    },

    /**
     * 发起GET数据请求
     */
    getInfo(){
        wx.request({
          url: 'https://www.escook.cn/api/get',
          method:'GET',
          data:{
              name:'ws',
              age:20
          },
          success:(res)=>{
              console.log(res.data)
          }
        })
    },

    /**
     * 发起post请求
     */
    postInfo(){
        wx.request({
          url: 'https://www.escook.cn/api/post',
          method:"POST",
          data:{
              name:'sw',
              age:22
          },
          success:(res)=>{
              console.log(res.data)
          }
        })
    },

    /**
     * 定义按钮的事件处理函数
     */
    btnTapHandler(e){
        console.log(e)
    },
    /**
     * +1按钮的点击事件处理函数
     */
    CountChange(){
        this.setData({
            count: this.data.count + 1
        })
    },

    /**
     * 事件传参
     * e.target.dataset.info 可以获取到具体的值
     */
    btnTap2(e){
        this.setData({
            count:this.data.count + e.target.dataset.info
        })
    },

    /**
     * input输入框的事件处理函数
     */
    inputHandler(e){
        // console.log(e.detail.value)
        this.setData({
            mag:e.detail.value
        })
    },

    /**
     * 通过编程式导航跳转到tabBar页面
     */
    gotoMessage(){
        wx.switchTab({
          url: '/pages/test/test'
        })
    },

    /**
     * 通过编程式导航跳转到非tabBar页面
     */
    gotoInfo(){
        wx.navigateTo({
          url: '/pages/info/info'
        })
    },

    /**
     * 通过编程式导航 跳转到info页面并携带参数
     */
    gotoInfo2(){
        wx.navigateTo({
          url: '/pages/info/info?name=sw&age=22'
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getInfo()
        this.postInfo()
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
        console.log('触发了上拉触底事件')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})