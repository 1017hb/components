//index.js
//获取应用实例
// pages/prize/prize.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollData:[
      {
        id:1,
        title:'你好1'
      },
      {
        id: 2,
        title: '你好1'
      },
      {
        id: 3,
        title: '你好1222'
      },
      {
        id: 4,
        title: '你好1大2'
      },
      {
        id: 5,
        title: '你好1阿斯顿发文'
      },
      {
        id: 7,
        title: '你好1安慰过往'
      },
      {
        id: 8,
        title: '你好1埃尔文干完'
      },
      {
        id: 9,
        title: '你好额1'
      },
      {
        id: 10,
        title: '你好二位1'
      },
      {
        id: 11,
        title: '你好1www'
      }

    ],
    title:'你好',
    tags: [
      "smile牛BUI哦啊是的",
      "smill按揭无配偶贾平凹",
      "smile楼盘违法",
      "smileaway",
      "smile家坡人",
      "smile 怕是冬",
      "smile居安思危",
      "smile打死了房间爱我",
      "smile卡普股份礼品网",
      "smile；数量",
      "smilef就拉我"
    ],
    left: 0,
    circular: false,
    autoplay: false,
    interval: 3000,
    duration: 500,
    clientHeight: "",
    good_list:[
      { 
        list: [
          { 
            id:298,                 
            image:'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price:'100.00',
            price:"21.00",
            store_name:"辣妈小品牌童装"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装"
          },
          {
            id: 298, 
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装2"
          },
          {
            id: 298, 
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装3"
          },
          {
            id: 298, 
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装4"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装5"
          }
        ]
      },
      {
        list: [
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装2"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装3"
          },
          {
            id: 298,
            image: 'http://www.gzggtp.com/uploads/attach/2020/03/20200307/0aebc6865c800f5172cf1258c7865a5d.jpg',
            ot_price: '100.00',
            price: "21.00",
            store_name: "辣妈小品牌童装4"
          },
          
        ],

      }
    ]
  },

  setClientHeight: function () {
    if (!this.data.good_list.length) return;
    var query = wx.createSelectorQuery().in(this);
    query.select("#list").boundingClientRect();
    var that = this;
    query.exec(function (res) {
      that.setData({
        clientHeight: res[0].height + 20
      });
    });
    console.log(this);
  },

  /**
   * 传递导航key
   */
  // 导航条鼠标跟随
  fnclick(ev) {
  

    console.log(ev)
    ev.detail.x - ev.target.offsetLeft
    this.setData({
      //left: ev.target.offsetLeft
      left: ev.detail.x
    })

  },
  setScrollItem:function(e){
    console.log(e.detail.index)
    console.log(this.data.scrollData[e.detail.index])
    
    //this.data.scrollData[e.detail.index]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setClientHeight();
  },

  
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: "这个是我分享出来的东西",
      success: function (res) {
        console.log(res, "转发成功")
      },
      fail: function (res) {
        console.log(res, "转发失败")
      }
    }
  }
})
