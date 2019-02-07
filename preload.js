/*
 * 图片预加载css方法
 *
 */

body:after{
	content: "";
	display: block;
	position: absolute;
	background: url("") no-repeat -10000px -1000px;
	width: 0;
	height: 0;
}

/*
 * 图片预加载JavaScript方法
 * 用了jQUERY库
 */

//存放图片路径的数组
    var imgSrcArr = [
        'imgsrc1',
        'imgsrc2',
        'imgsrc3',
        'imgsrc4'
    ];

    var imgWrap = [];

    function preloadImg(arr) {
        for(var i =0; i< arr.length ;i++) {
            imgWrap[i] = new Image();
            imgWrap[i].src = arr[i];
        }
    }

    preloadImg(imgSrcArr);

    //或者延迟的文档加载完毕在加载图片

    $(function () {
        preloadImg(imgSrcArr);
    })


/*
 * css + javaScript方式
 *
 */

 .preload-img:after{
            content:"",
            background: url("../image/manage/help/help_item2_01.png?v=201707241359") no-repeat -10000px -1000px,url("../image/manage/help/help_item2_02.png?v=201707241359") no-repeat -10000px -1000px,url("../image/manage/help/help_item2_03.png?v=201707241359") no-repeat -10000px -1000px,url("../image/manage/help/help_item2_04.png?v=201707241359") no-repeat -10000px -1000px,url("../image/manage/help/help_item2_05.png?v=201707241359") no-repeat -10000px -1000px,url("../image/manage/help/help_item2_06.png?v=201707241359") no-repeat -10000px -1000px,url("../image/manage/help/help_item2_07.png?v=201707241359") no-repeat -10000px -1000px,url("../image/manage/help/help_item2_01.png?v=201707241359") no-repeat -10000px -1000px;
        }

/*
    比如我们写了上面的这样一个类，但是页面中没有用到，我们在文档加载完毕之后，给某个元素添加该类
*/

$(function(){
    $("#target").addClass("preload-img")
})
