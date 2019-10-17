
var data = [
    {
        "id":17,//项目id
        "userName":"Night夜",//发起人名称
        "companyName":"康佰裕",//发起人公司名称
        "ptypeName":"13",//发起项目类别
        "pask":"13",
        "pname":"13",
        "pdesc":"13"
    },
    {
        "id":16,
        "userName":"Night夜",
        "companyName":"康佰裕",
        "ptypeName":"12",
        "pask":"12",
        "pname":"12",
        "pdesc":"12"
    },
    {
        "id":15,
        "userName":"BB机",
        "companyName":"北京电影",
        "ptypeName":"11",
        "pask":"11",
        "pname":"11",
        "pdesc":"11"
    },
    {
        "id":14,
        "userName":"BB机",
        "companyName":"北京电影",
        "ptypeName":"9",
        "pask":"9",
        "pname":"9",
        "pdesc":"9"
    },
    {
        "id":13,
        "userName":"BB机",
        "companyName":"北京电影",
        "ptypeName":"7",
        "pask":"7",
        "pname":"7",
        "pdesc":"7"
    },
    {
        "id":12,
        "userName":"Night夜",
        "companyName":"康佰裕",
        "ptypeName":"6",
        "pask":"6",
        "pname":"6",
        "pdesc":"6"
    },
    {
        "id":11,
        "userName":"BB机",
        "companyName":"北京电影",
        "ptypeName":"5",
        "pask":"5",
        "pname":"5",
        "pdesc":"5"
    },
    {
        "id":10,
        "userName":"Night夜",
        "companyName":"康佰裕",
        "ptypeName":"4",
        "pask":"4",
        "pname":"4",
        "pdesc":"4"
    },
    {
        "id":9,
        "userName":"BB机",
        "companyName":"北京电影",
        "ptypeName":"3",
        "pask":"3",
        "pname":"3",
        "pdesc":"3"
    },
    {
        "id":8,
        "userName":"Night夜",
        "companyName":"康佰裕",
        "ptypeName":"2",
        "pask":"2",
        "pname":"2",
        "pdesc":"2"
    }

]

var init_data = function(){
      // 渲染数据
      var  num =data.length;
      for(var i=0; i<num; i++){
          var str = `
          <li>
              <div class="news-item">
                  <a class="news-name" href="info/1976/4957.htm" target="_blank">${data[i].companyName}</a>
                  <span class="news-date">${data[i].userName}<span>
              </div>
          </li>`
          console.log(str)
          $('#news-lis').append(str)
  
      }
}
init_data();
  

