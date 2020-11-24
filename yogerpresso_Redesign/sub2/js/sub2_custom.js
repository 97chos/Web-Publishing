$(document).ready(function(){
      $("header").each(function(){
        var $window = $(window),
            $header = $(this),
            //헤더 복제
            $headerClone = $header.contents().clone(),
            //헤더 복제 컨테이너
            $headerCloneContainer = $('<div class="header-clone"></div>'),
            //컨테이너를 나타나게할 위치
            threshold = 110;

        //컨테이너 헤더의 복제 삽입
        $headerCloneContainer.append($headerClone);
        //컨테이너를 body 마지막에 삽입
        $headerCloneContainer.appendTo("body");

        $window.on('scroll',function(){
          //현재 스크롤 위치가 목표 위치보다 낮으면 
          if ($window.scrollTop()>threshold)
            $headerCloneContainer.addClass('visible');
          else 
            $headerCloneContainer.removeClass('visible');
        });
      });
      
      if($(window).width()<721) {
        //좌측 메뉴 호출 버튼
        var trigger = $(".trigger"),
            menu = $(".menu-wrap"),
            span = $("header span");
        var navHeight=$(window).height();
        $("header .menu-wrap").height(navHeight);

        $(trigger).on('click',function(e) {
          e.preventDefault();
          menu.stop().animate({"left":"0px"});
          $(span).addClass("visible"); 
        });

        $(span).on("click",function(e){
          e.preventDefault();
          menu.stop().animate({"left":"-100%"});
          $(this).removeClass("visible");
          $(".sub-menu").removeClass("on");
        });
          $(window).resize(function(){
            var w = $(window).width();
            if (w>320 && menu.is(':hidden')) {
              menu.removeAttr('style');
            }
          });
          
        //메뉴 li 버튼
        var mainMenu = $(".main-menu li");
        $(".main-menu>li>a").prop("href","#");    //li 버튼의 링크 해제
        
        mainMenu.on("click",function(e){
          $(".sub-menu").removeClass("on");
          var subMenu = $(this).find(".sub-menu");
          subMenu.addClass("on");        
        });
      }


});