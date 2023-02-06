// components/test/test.js
Component({
    //指以_开头的为纯数字字段
    options:{
        multipleSlots:true,
        pureDataPattern:/^_/
    },

    /**
     * 是否启用样式隔离
     */
    options:{
        styleIsolation:'apply-shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        //第一种方法：简化的方式
        //max:Number
        //第二种方式:完整的定义方式
        max:{
            type:Number,
            value:10
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count:0,
        n1:0,
        n2:0,
        sum:0,
        _rgb:{
            r:0,
            g:0,
            b:0
        },
        fullColor:'0, 0, 0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeR(){//修改rgb对象上r属性的值
            this.setData({
                '_rgb.r':this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
            }) 
        },
        changeG(){//修改rgb对象上g属性的值
            this.setData({
                '_rgb.g':this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
            }) 
        },
        changeB(){//修改rgb对象上b属性的值
            this.setData({
                '_rgb.b':this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
            }) 
        },

        //生成随机rgb颜色的方法 非事件处理函数建立以_开头
        _randomColor(){
            this.setData({//为data里面的_rgb纯数字段重新赋值
                _rgb:{
                    r:Math.floor(Math.random() * 256),
                    g:Math.floor(Math.random() * 256),
                    b:Math.floor(Math.random() * 256)
                }
            })
        },

        addN1(){
            this.setData({
                n1:this.data.n1 + 1
            })
        },
        addN2(){
            this.setData({
                n2:this.data.n2 + 1
            })
        },

        //点击事件处理函数
        addCount(){
            if(this.data.count >= this.properties.max) return
            this.setData({
                count:this.data.count + 1
            })

            this._showCount()
        },
        _showCount(){
            wx.showToast({
              title: 'count是' + this.data.count,
              icon:'none'
            })
        }
    },

    //自定义组件的数据监听器的和
    observers:{
        //监听rgb对象r g b三个子属性的变化
        // 'rgb.r,rgb.b,rgb.b':function(r,g,b){
        //     this.setData({
        //         //为data中的fullColor重新赋值
        //         fullColor:`${r},${g},${b}`
        //     })
        // },
        //相对于上面的方法 当遇到复杂的数值时 下面可以直接采用通配符
        '_rgb.**':function(obj){
            this.setData({
                fullColor:`${obj.r},${obj.g},${obj.b}`
            })
        },

        'n1, n2':function(newN1,newN2){
            this.setData({
                sum:newN1 + newN2
            })
        }
    },

    lifetimes:{
        created(){
            console.log('created')
        },
        attached(){
            console.log('attached')
        },
    },
    
    pageLifetimes:{
        show(){console.log('show')
        this._randomColor()
    },
        hide(){console.log('hide')},
        resize(){console.log('resize')}
    },
})
