Page({
  data: {
    film: {},
    options: null
  },
  onReady: function(){
    var that = this
    if(this.data && this.data.options)
    wx.setNavigationBarTitle({
      title: that.data.options.title
    })
  },
  onLoad: function (options) {
    var that = this
    var id = options.id

    fetch('https://api.getweapp.com/thirdparty/douban/subject?id=' + id).then(function(response){
      if(response.status !== 200){
        console.log("error："+ response.status)
        return
      }
      response.json().then(function(data){
        that.setData({
          film: data,
          options: options
        })
      })
    })
  }
})
