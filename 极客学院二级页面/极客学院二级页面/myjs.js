/**
 * Created by Administrator on 2017/4/26.
 */
$(document).ready(function () {
    var arr = new Array();
    arr=[]
    $(".curriculumBlock").each(function(index){
        // var i= $(this).index();
        arr.push($(".curriculumBlock").eq(index).html());
    })
    alert(arr);

    // $('.tabPage li').each(function (index) {
    //     var linode=$(this);
    //     $(this).click(function () {
    //         $('.tabPage li.tabHover').removeClass('tabHover');
    //         $('.recommend_content').removeClass('contentShow');
    //         $('.tabPage li.tabIn').removeClass('tabIn');
    //         $('.recommend_content').eq(index).addClass('contentShow');
    //         linode.addClass('tabIn');
    //     });
    //


});