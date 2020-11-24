$(document).ready(function(){  
    $("header").each(function(){
        if($(window).width()>721){

            setTimeout(function(){
            $("#menu li:nth-child(1)").stop().animate({"bottom":"20px","opacity":"0.7"},1000);},2500);
            setTimeout(function(){
            $("#menu li:nth-child(2)").stop().animate({"top":"20px","opacity":"0.7"},1000);},3000);
            setTimeout(function(){
            $("#menu li:nth-child(3)").stop().animate({"bottom":"20px","opacity":"0.7"},1000);},3500);
            setTimeout(function(){
            $("#menu li:nth-child(4)").stop().animate({"top":"20px","opacity":"0.7"},1000);},4000);
            setTimeout(function(){
            $("#menu li:nth-child(5)").stop().animate({"bottom":"20px","opacity":"0.7"},1000);},4500);

            setTimeout(function(){
                $("#menu li").hover(function(){
                    $(this).stop().css({"opacity":"1"});
                },function(){
                    $(this).stop().css({"opacity":"0.7"});
                });  
            },4500);

            setTimeout(function(){
            $(".sns").stop().animate({"opacity":"0.7"},2000);},5000);
            
        } 
    });

    var navHeight=$(window).height(),
        navWidth=$(window).width();
        $("header").height(navHeight).width(navWidth);
        $("section").height(navHeight).width(navWidth);

    $(window).on("resize",function(){
        $("header,section").height(navHeight).width(navWidth);
    });

    scrollPage();

    function scrollPage(){
        //header,section 위에서 마우스 휠을 움직이면 함수 실행
        //event = 마우스 휠의 행위에 대한 변수, delta = 마우스 휠을 인지하는 값을 담는 변수
        $("header,section").on("mousewheel",function(event){
            var delta = event.originalEvent.wheelDelta;
            //마우스 휠을 올렸을 때
            if ( delta>0 ){
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop":prev},1400);
            //마우스 휠을 내렸을 때
            }else if ( delta<0 ){
                var next = $(this).next().offset().top;
                //변수 next에 대상 섹션의 다음 섹션의 offset.top 값 저장
                $("html,body").stop().animate({"scrollTop":next},1400);
                //문서 전체를 next에 저장된 값의 위치로 이동
            }  
            // console.log(delta);  
       }); 
    }

    $(".profile").each(function(){
        var $profile = $(this).attr("href");
        if($(window).width()>721){
            $(".list li a").hover(function(e){
                e.preventDefault();
                $($(this).attr("href")).stop().css({"opacity":"1"});},function(){
                $($(this).attr("href")).css({"opacity":"0"});
            });
        }
        else {
            $(".list li a").on("click",function(e){
                e.preventDefault();
                $(".member").stop().css({"visibility":"hidden","opacity":"0"});
                $($(this).attr("href")).stop().css({"opacity":"1","visibility":"visible"});
            });
            $(".exit").on("click",function(e){
                e.preventDefault();
                $(".member").stop().css({"visibility":"hidden","opacity":"0"});
            });
        } 
    });

    $("#menu li").on("click",function(e){
        e.preventDefault();
        //변수 ht에 브라우저의 높이값 저장
        var ht = $(window).height();
        //변수 i에 현재 클릭한 li의 인덱스 값을 저장 (0,1,2,3)
        var i = $(this).index()+1;
        //브라우저의 높이값*박스의 인덱스값은 현재 박스
        var nowTop = i*ht+i*2;
    
        //해당 스크롤 위치 값으로 문서를 이동 (html,body 둘 중 하나만 써도 상관X)
        $("html,body").stop().animate({"scrollTop":nowTop},1400/*,"easeInOutCubic"*/);
    });

    $(".logo").on("click",function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},1400/*,"easeInOutCubic"*/);
    });

    function wrapWindowByMask(){
 
        //화면의 높이와 너비를 구한다.
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width(); 
 
        //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
        $(".mask").css({"width":maskWidth,"height":maskHeight});  
 
        //애니메이션 효과, 60% 불투명도
 
        $(".mask").fadeIn();      
        $(".mask").fadeTo("slow",0.6);    
 
        //내용 표시.
        $(".music").hide();
        $($this.attr('href')).fadeIn();

        $("header,section").off("mousewheel");        
        
        $('html,body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    }
 
    //opacity 배경 표시
    $(".albumList li a").click(function(e){
        $this=$(this);
        $tabAnchors=$(".albumList li a");
        e.preventDefault();
        wrapWindowByMask();
    });
 
    //닫기 버튼을 눌렀을 때
    $(".music .close").click(function (e) {  
        e.preventDefault();  
        $(".mask, .music").fadeOut();  
        $("header,section").on("mousewheel");
        scrollPage();
    });       
 
    //배경 클릭시
    $(".mask").click(function () {  
        $(this).fadeOut();  
        $(".music").fadeOut();
        $("header,section").on("mousewheel");
        scrollPage();
    }); 

    //masonry 플러그인 적용
    $("#gallerywrap").masonry({            //아이디 사용할 것
        itemSelector: '.masonry',          // 플러그인을 적용할 대상 요소들을 선택
        columnWidth: 0              // columnWidth = 한 요소가 움직일 때마다 차지하는 최소 공간
    });

    $(".video").each(function(){
        var $tabAnchors = $(this).find("a"),
            $tabPanels = $(this).find("li");
        $(".video .video-list").on("click","a",function(e){
            e.preventDefault();
            var $this=$(this);
            if($this.hasClass("on")) return;
            $tabPanels.removeClass("on");
            $this.parent().addClass("on");   

            $(".video-wrap div").hide();
            $($this.attr("href")).show();
            $($this.attr("href")).addClass("on");
        });
    }); 
});
 