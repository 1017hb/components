var app = getApp();
Component({
  properties: {
    scrollData:{
      type:Array,
      value:[]
    },
    title:{
      type:String,
      value:''
    }
  },
  data: {
    currentIndex:0
  },
  ready: function () {
    
  },
  attached: function () {
    
  },
  methods: {
    setScrollItem:function(e){
      let index = e.currentTarget.dataset.scrollindex;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('setScrollItem', { index: index});
    }
  }
})