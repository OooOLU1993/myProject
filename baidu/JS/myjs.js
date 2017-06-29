/**
 * Created by Administrator on 2017/4/24.
 */
$(document).ready(function () {

    // 更多菜单JS  start
    $('#item_more_class').mouseover(function () {
       $('.nav_submenu').addClass('nav_submenu_open');
    });
    $('.nav_submenu').mouseover(function () {
        $('.nav_submenu').addClass('nav_submenu_open');
    });
    $('.nav_submenu').mouseout(function () {
        $('.nav_submenu').removeClass('nav_submenu_open');
    });
    // 更多菜单JS  END
    // 推荐模块TAB页切换  start 1、标签切换  2、悬浮更改background，注意判断当前标签页的标签不需要加悬浮样式
    $('.tabPage li').each(function (index) {
        var linode=$(this);
        $(this).click(function () {
                $('.tabPage li.tabHover').removeClass('tabHover');
                $('.recommend_content').removeClass('contentShow');
                $('.tabPage li.tabIn').removeClass('tabIn');
                $('.recommend_content').eq(index).addClass('contentShow');
                linode.addClass('tabIn');
            });
        $(this).mouseover(function () {
            if($(this).hasClass('tabIn')){
            }else {
                linode.addClass('tabHover');
            }
        }).mouseout(function () {
            $('.tabPage li.tabHover').removeClass('tabHover');
        });
    });
    // 推荐模块TAB页切换  END
    // 推荐模块WEB导航  start
    $('.myFollowNav').click(function () {
        $('.myNav').fadeToggle();
        $('.myFollowNav img').toggleClass('imgTransform');

    });
    $('.webNav li').mouseover(function () {
        $(this).addClass('myNavHover');
    }).mouseout(function () {
        $(this).removeClass('myNavHover');
    });
    // 推荐模块WEB导航  END
    $('#changeSkinBtn').click(function () {
        $('#changeSkin').slideUp(2000);
        $('.logo img').attr('src','img/logo.png');
        $('.nav_left_menu li').css('color','#ffffff');
        $('.nav_right_menu li').css('color','#ffffff');
        $('.nav_right_menu li a').css('color','#ffffff');
    });

    $('.myskin').css('background-image',localStorage.getItem("bgimg")) ;
    if(localStorage.bgimg != null){
        $('.logo img').attr('src','img/logo.png');
        $('.nav_left_menu li').css('color','#ffffff');
        $('.nav_right_menu li a').css('color','#ffffff');
        $('.foot>span,.foota').css('color','#ffffff');
    }
    // 换肤新

    $('.selectSkin li').each(function (index) {
        var linode = $(this);
        $(this).click(function () {
            $('.skinClass').removeClass('skinShow');
            $('.selectSkin li').removeClass('changeSkinTabIn');
            $('.skinClass').eq(index).addClass('skinShow');
            linode.addClass('changeSkinTabIn');
        });
    });
    $('.skinPreview div').mouseover(function () {
        $(this).addClass('imgHover');
        var tempImg=$(this).css('background-image');
        $('.selectSkinPreview').css('background-image','url("img/pww.png")')
        $('.bgskin').css('background-image',tempImg);
    }).mouseout(function () {
        $(this).removeClass('imgHover');
    })

    $('.skinPreview div').click(function () {
        var tempClickImg=$(this).css('background-image');
        $(".myskin").css('background-image',tempClickImg);
        $('#sure').click(function () {
            $('#changeSkin').slideUp(2000);
            localStorage.setItem("bgimg", tempClickImg);
            $('.logo img').attr('src','img/logo.png');
            $('.nav_left_menu li').css('color','#ffffff');
            $('.nav_right_menu li a').css('color','#ffffff');
            $('.foot>span,.foota').css('color','#ffffff');
        })
    })
    $('#cancle').click(function () {
        $('#changeSkin').slideUp(2000);
        $('.myskin').css('background-image',localStorage.getItem("bgimg")) ;
    })

       // 换肤新---end

    $('.weatherP').mouseover(function () {
        $('.weather').addClass('weatherShow');
        $('.weather').mouseover(function () {
            $('.weather').addClass('weatherShow');
        }).mouseout(function () {
            $('.weather').removeClass('weatherShow');
        })

    }).mouseout(function () {
        $('.weather').removeClass('weatherShow');
    })

    $('.weatherList div').each(function (index) {
        var linode=$(this);
        $(this).mouseover(function () {
            $($('.dateList').eq(index).find('span')).css('color','dodgerblue')
        }).mouseout(function () {
            $($('.dateList').eq(index).find('span')).css('color','#727272');
        });
    });
      $(window).scroll(function(event){
          if ($(window).scrollTop()>50){
            $('.comeBack').addClass('comeBackShow');
          }else {
              $('.comeBack').removeClass('comeBackShow');
          };
          $('.comeBack').click(function () {
              // var speed=50;//滑动的速度
              $('body','html').animate({ scrollTop: 0 }, 50,function () {
                  $('body','html').stop(true);
              });
          });

    });








});
function changeSkin(){
    $('#changeSkin').slideDown(2000);
}
