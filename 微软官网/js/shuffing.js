var picLi = document.querySelectorAll('.picWrap li'),
        btnLi = document.querySelectorAll('.btnWrap li'),
        prve = document.getElementsByClassName('prve')[0],
        next = document.getElementsByClassName('next')[0],
        date = new Date(),
        index = 0;
        // console.log(next)
        console.log(picLi.length)

        for(var i = 0; i<btnLi.length;i++){
            (function(i){
                // 当btnLi[i]被点击时，默认index的btnLi消除类名
                btnLi[i].onclick = function(){
                    if(i !== index){  //判断此次index与上次index值是否相等，若不相等再运行animation方法
                        btnLi[index].className = '';
                        animation(picLi[index],{    //调用animation.js包中的animation方法，将点击前的index的图片隐藏
                            data:{
                                opacity: 0
                            },option:{

                            }
                        },1000)
                        index = i; //将上次的index重新赋值为当前点击的i
                        btnLi[index].className = 'on';  //为当前i的按钮添加类名
                        animation(picLi[index],{   //调用animation.js包中的animation方法，将当前点击的index的图片显示
                            data:{
                                opacity: 1
                            },option:{

                            }
                        },1000)
                    } 
                }
            })(i)
        }

        // 左侧按钮点击事件
        prve.onclick = function(){
            // console.log(new Date() -date > 500)
            if(new Date() -date >500 ){    //通过上次点击时设定的时间戳与此次点击的时间戳做差，当小于500毫秒时，下部的animation不执行
                btnLi[index].className ='';  //去除上次index的点状按钮的类名
                animation(picLi[index],{
                    data:{
                        opacity: 0
                    },option:{

                    }
                },1000)
                if(index == 0){  //判断当前index是否为初始值，是初始值的话点击左侧按钮，下一次出现最后一张图片
                    index = 1;
                }else{         //当index不为初始值时，点击左侧按钮，每次index递减
                    index --;  
                }
                btnLi[index].className = 'on';
                animation(picLi[index],{
                    data:{
                        opacity: 1
                    },option:{

                    }
                },1000)
                }
                date = new Date();  //每次点击之后将时间戳重新赋值
            }

        // 右侧按钮点击事件
        next.onclick = function(){
            if(new Date() - date > 500){
                btnLi[index].className = '';   //去除上次index对应的下部按钮类名
                animation(picLi[index],{        //调用animation方法，将上次的index对应的图片隐藏
                    data:{
                        opacity: 0
                    },option:{

                    }
                },1000)
                if(index == picLi.length - 1){    //判断当前index 是否在最后一个，若在说明图片到最后一张，此次就应该再次从第一张开始，index赋值0
                    index = 0;
                }else{
                    index++;    //若index不是最后一张则每次index递增
                }
                btnLi[index].className = 'on';
                animation(picLi[index],{   //调用animation方法将此次点击的index对应的图片显示出来
                    data:{
                        opacity: 1
                    },option:{

                    }
                },1000)
                }
                date = new Date();
            }

        // 定时器   
        function automatic(){
            btnLi[index].className = '';   //去除上次index对应的下部按钮类名
                animation(picLi[index],{        //调用animation方法，将上次的index对应的图片隐藏
                    data:{
                        opacity: 0
                    },option:{

                    }
                },1000)
                if(index == picLi.length - 1){    //判断当前index 是否在最后一个，若在说明图片到最后一张，此次就应该再次从第一张开始，index赋值0
                    index = 0;
                }else{
                    index++;    //若index不是最后一张则每次index递增
                }
                btnLi[index].className = 'on';
                animation(picLi[index],{   //调用animation方法将此次点击的index对应的图片显示出来
                    data:{
                        opacity: 1
                    },option:{

                    }
                },1000)
        }
        var autoT = setInterval(automatic,2500)
        // 当鼠标进入左右按钮以及下部按钮时定时器清除
        for(var i = 0;i<btnLi.length;i++){
            (function(i){
                btnLi[i].onmouseenter = function(){   //鼠标移入按钮时，定时器清除
                clearTimeout(autoT);
                btnLi[i].onmouseleave = function(){   //鼠标移除按钮时，定时器冲刺呢开始
                    autoT = setInterval( automatic,2500)
                }
            }
            })(i)
        }
        //左右按钮清除定时器
        next.onmouseenter = function(){
            clearTimeout(autoT);
        }
        next.onmouseleave = function(){
            autoT = setInterval(automatic,2500)
        }
        prve.onmouseenter = function(){
            clearTimeout(autoT);
        }
        prve.onmouseleave = function(){
            autoT = setInterval(automatic,2500)
        }









               