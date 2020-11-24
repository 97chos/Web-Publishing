$(document).ready(function(){

  $('.banner').each(function() {
      var $container=$(this),                                
          $slideGroup=$container.find('.slides'),   
          $slides=$slideGroup.find('.slide>a'),                
          $nav=$container.find('.banner-btn'),             
          $indicator=$container.find('.banner-indi'),
          
          slideCount=4, 
          // slideCount=$slides.length,          
          currentIndex=0,            
          duration=500,             
          interval=2000, 
          timer;


        function goToSlide (index) {
            // 슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.animate({ left: (-100 * index) + '%' }, duration);
            // 현재 슬라이드의 인덱스를 덮어쓰기
            currentIndex = index;
            // 탐색 및 표시 상태를 업데이트
            updateNav();
        }


        // 슬라이드의 상태에 따라 탐색 및 표시를 업데이트하는 함수
        function updateNav(){
           
            // 현재 슬라이드의 표시를 해제
            $indicator.find('a').removeClass('on')
            .eq(currentIndex).addClass('on');
            
        }   //updateNav(){

        // 타이머를 시작하는 함수
        function startTimer(){
            // 변수 interval에서 설정 한 시간이 경과 할 때마다 작업을 수행
            timer=setInterval(function(){
                // 현재 슬라이드의 인덱스에 따라 다음 표시 할 슬라이드의 결정
                // 만약 마지막 슬라이드이라면 첫 번째 슬라이드에
                var nextIndex=(currentIndex+1)%slideCount;
                goToSlide(nextIndex);
            }, interval);
        }   //startTimer(){

        // 타이머를 중지있는 함수
        function stopTimer(){
            clearInterval(timer);
        }   //stopTimer(){



    // 인벤토리 등록
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 네비게이션 링크를 클릭하면 해당 슬라이드를 표시
        $nav.on('click', 'a', function(event){
            event.preventDefault();
            if($(this).hasClass('prev')) {
              if(currentIndex==0){
                goToSlide(3);
              }else{
                goToSlide(currentIndex-1);
              }
            } else if($(this).hasClass('next')){
              if(currentIndex==3){
                goToSlide(0);
              }else{
                goToSlide(currentIndex+1);
              }
            }
        }); //$nav.on('click', 'a', function(event){

        // 인디게이터의 링크를 클릭하면 해당 슬라이드를 표시
        $indicator.on('click', 'a', function(event) {
            event.preventDefault();
            if (!$(this).hasClass('on')) {
                goToSlide($(this).index());
            }
        }); //$indicator.on('click', 'a',

        // 마우스오버를 하면 타이머를 정지 그렇지 않으면 시작
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        }); // $container.on({
    // 슬라이드 쇼 시작
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // 첫 번째 슬라이드를 표시
        goToSlide(currentIndex);
        // 타이머를 시작
        startTimer();
    });

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

      //좌측 메뉴 호출 버튼
      if ($(window).width() < 721) {
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
            if (w>320&& menu.is(':hidden')) {
              menu.removeAttr('style');
            }
          });


        //메뉴 li 버튼
        var mainMenu = $(".main-menu>li");
        $(".main-menu>li>a").prop("href","#");    //li 버튼의 링크 해제

          mainMenu.on("click",function(e){
          $(".sub-menu").removeClass("on");
          var subMenu = $(this).find(".sub-menu");
          subMenu.addClass("on");        
        });
      }

});