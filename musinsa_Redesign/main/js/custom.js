$(document).ready(function(){

	//award 클릭 선택 함수
	$('.main-contents').each(function(){
		var $tabList = $(this).find('.lank-list'),		//ul
			$tabAnchors = $tabList.find('a'),			//a
			$tabPanels = $(this).find('.lank-wrap');	//각각의 li

			//탭이 클릭되었을 때의 처리
			//function의 인자값(event)으로 a 태그의 클릭 이벤트를 받는다.
			$tabList.on('click','a',function(event){
				// 링크 클릭에 대한 기본 동작을 취소
				event.preventDefault();
				// $tabList에 ul '전체'가 대입되었고,
				//클릭된 $tabList(ul) 속 li 속 a가 this에 들어가게 됨 
				var $this = $(this);	
				// 만약 이미 선택된 탭이라면 아무것도하지 않고 처리 중지
				if ($this.hasClass('active'))
					return;
				//모든 탭의 선택 상태를 해제
				$tabAnchors.removeClass('active');
				//클릭 된 탭을 선택 상태로 변경
				$this.addClass('active');

				//모든 패널들을 비활성화
				//클릭 된 탭의 속성에 대응하는 패널을 표시
				$tabPanels.hide();
				$($this.attr('href')).show();	
				$		
			});
		});


      //슬라이드 플러그인
  $('.slides').slidesjs({
        width: 1663,
        height: 585,
        navigation: false,      //글자 생성
        start:1,
        play:{         
            interval:4000,
            active:false,     //navigation이랑 묶음
            auto:true,
            pauseOnHover:true,
            restartDelay:1000
        }
        });
      // popup
      // window.open("popup.html","naver","width=1352px, height=505px, left=200px, top=20px,scrollbars=no, toolbar=no, location=no");

});