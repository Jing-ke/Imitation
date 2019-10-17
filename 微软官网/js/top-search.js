
                    // 获取到top栏中的
                    var Top = document.getElementsByClassName('top')[0],
                        topNav = Top.getElementsByClassName('top_nav')[0],
                        rightTools = Top.getElementsByClassName('right-tools')[0],
                        searchBtn = rightTools.getElementsByClassName('top_search')[0],
                        searchCon = Top.getElementsByClassName('search')[0] ,
                        foSearch =Top.getElementsByClassName('search-con')[0],
                        searchCancel = Top.getElementsByClassName('cancel')[0],
                        searchIconBtn = Top.getElementsByClassName('searchIconBtn')[0]
                        ;
                    // console.log(Top)
                    // console.log(topNav)
                    // console.log(rightTools)
                    // console.log(searchCon)
                    // console.log(searchCancel)
                    // 当搜索框按钮被点击时
                    searchBtn.onclick = function(){
                        topNav.style.display = 'none';
                        rightTools.style.display = 'none';
                        searchCon.style.display = 'block';
                        // foSearch.focus();      //点击后默认将焦点放置在搜索框中
                    }
                    searchCancel.onclick = function(){
                        topNav.style.display = 'block';
                        rightTools.style.display = 'block';
                        searchCon.style.display = 'none';
                        
                    }
                    //设置定时器，每0.21s一运行
                    setInterval(checked,210) 
                    // 判断搜索框内容 是否有内容
                    function checked(){
                        if(foSearch.value ==''){  //当为空时失去焦点，搜索框消失
                            foSearch.onblur = function(){
                                topNav.style.display = 'block';
                                rightTools.style.display = 'block';
                                searchCon.style.display = 'none';
                            }
                        }else{//当不为空时，失去焦点，为搜索框还在
                            foSearch.onblur = function(){
                                topNav.style.display = 'none';
                                rightTools.style.display = 'none';
                                searchCon.style.display = 'block';
                            }
                        }
                    }
               