/**
 * Created by Administrator on 2017/4/23.
 */
$(document).ready(function () {
   $('.tabPage li').each(function (index) {
     var linode=$(this);
       $(this).mouseover(function () {
           timoutid=setTimeout(function () {
               $('div.content').removeClass('content');
               $('.tabPage li.tabIn').removeClass('tabIn');
               $('div').eq(index).addClass('content');
               linode.addClass('tabIn');
           },300);
       }).mouseout(function () {
         clearTimeout(timoutid);
       })
   })
});