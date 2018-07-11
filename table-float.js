// /*global table表头浮动*/
new Vue({
  el: '#app',
  data: {
    users:[],
    userCount: 100
  },
  methods:{
      startFloat(){
        var $thead = $(this.$el).find('thead')

        $thead.data('isFloat',true)

        // console.log('开始浮动')

        $thead.css({
          position:'fixed',
          top:'0px',
          background:'#dff0d8',
          'z-index':10,
          width:'100%',
          'box-shadow':'0 2px 4px -1px rgba(0,0,0,0.3)'
        })

        $thead.find('th').each(function (i, n) {
          var obj = $(n)
          obj.css("width", $('.table >tbody >tr > td').eq(i).css("width"))
        })
        
      },
      removeFloat(){
        var $thead = $(this.$el).find('thead')

        if(!$thead.data('isFloat')){
            return 
        }

        $thead.data('isFloat',false)

        $thead.css({
          background:'',
          position:'',
          'z-index':'',
          'box-shadow':'',
          'z-index':''
        })
      },
      checkPosition(){
        var $body = $(this.$el).find('tbody')
        var offset = $body.offset()
        if(offset.top - document.documentElement.scrollTop < 0){
            this.startFloat()
        }else{
           this.removeFloat()
        }
      },
      initData(){
          for (let i = 0; i < this.userCount; i++) {
            this.users.push({
              id:faker.random.uuid(),
              name:faker.name.findName(),
              age:faker.random.number(),
              addr:faker.address.city(),
              phone:faker.phone.phoneNumber()
            })
          }
      },
      onScroll: _.throttle(function () {
       this.checkPosition()
      }, 500),
      bindScroll(){
        window.addEventListener('scroll',this.onScroll)
      }
  },
  created:function(){
    this.initData()
  },
  mounted:function(){
    this.bindScroll()
  }
})



/* global Vue, faker, _, $*/
// new Vue({
//   el: '#app',
//   data: {
//     users: [],
//     userCount: 100
//   },
//   methods: {
//     startFloat () {
//       var $head = $(this.$el).find('thead')
//       var thWidth = []

//       if ($head.data('isFloat')) {
//         return
//       }

//       $head.data('isFloat', true)
//       $head.addClass('z-depth-2')

//       $head.find('th').each(function () {
//         thWidth.push($(this).outerWidth())
//       })

//       $head.css({
//         position: 'fixed',
//         top: '0px',
//         background: '#ffffff'
//       })

//       $head.find('th').each(function (index) {
//         $(this).outerWidth(thWidth[index])
//       })
      
//       console.log(thWidth)
//     },
//     removeFloat () {
//       var $head = $(this.$el).find('thead')

//       if (!$head.data('isFloat')) {
//         return
//       }

//       $head.data('isFloat', false)
//       $head.removeClass('z-depth-2')

//       $head.css({
//         position: '',
//         top: '',
//         background: ''
//       })
//       $head.find('th').each(function () {
//         $(this).outerWidth('')
//       })
//     },
//     checkPosition () {
//       var $body = $(this.$el).find('tbody')
//       var offset = $body.offset()
//       // console.log(offset.top - document.documentElement.scrollTop)
//       if (offset.top - document.documentElement.scrollTop < 0) {
//         this.startFloat()
//       } else {
//         this.removeFloat()
//       }
//     },
//     initUsers () {
//       for (let i = 0; i < this.userCount; i++) {
//         this.users.push({
//           id: faker.random.uuid(),
//           name: faker.name.findName(),
//           age: faker.random.number(),
//           addr: faker.address.city(),
//           phone: faker.phone.phoneNumber()
//         })
//       }
//     },
//     onScroll: _.throttle(function () {
//       this.checkPosition()
//     }, 500),
//     bindScroll () {
//       window.addEventListener('scroll', this.onScroll)
//     }
//   },
//   created: function () {
//     this.initUsers()
//   },
//   mounted: function () {
//     this.bindScroll()
//   }
// })
