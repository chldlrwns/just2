(function($){

    const shop = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        },
        header(){
            // 네비게이션
            // 1. 메인메뉴에 마우스 오버시(올리면) => 서브메뉴 보인다.
            $('.menu-btn').on({
                mouseenter(){
                    // $('.sub').stop().slideDown(300);
                    $('.sub').stop().show(0);
                },
                focus(){ //키보드로 선택 가능 탭키 선택 포커스인(focus===focusin) 반대 (blur === focusout)
                    // $('.sub').stop().slideDown(300);
                    $('.sub').stop().show(0);
                }
            });

            // 2. 서브메뉴에 마우스 아웃시(떠나면) => 서브메뉴 숨긴다.
            // 2. 수정보완 nav(네비게이션)에 마우스 아웃시(떠나면) => 서브메뉴 숨긴다.
            $('#nav').on({
                mouseleave(){
                    // $('.sub').stop().slideUp(300);
                    $('.sub').stop().hide(0);
                }
            });

        },
        section1(){
            //1. 변수   
            let cnt=0;

            //2. 메인슬라이드함수 3개 우측에서 좌측으로 이동  0 1 2
            function mainSlide(){ 
               $('.slide-wrap').stop().animate({top:`${-300*cnt}px`}, 600,function(){
                    if(cnt>2) cnt=0;
                    $('.slide-wrap').stop().animate({top:`${-300*cnt}px`}, 0);
               });
            }

            //3. 다음카운트함수
            function mextCount(){
                cnt++;
                mainSlide();
            }

            //4. 자동타이머함수
            function autotimer(){
                setInterval(mextCount, 3000);
            }
            autotimer();

        },
        section2(){
           
            // 갤러리버튼 클릭 이벤트
            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn').addClass('on');
                    $('.notice-btn').addClass('on');
                    $('.notice-box').hide(0);
                    $('.gallery-box').show(0);
                }
            })

             // 공지사항버튼 클릭 이벤트
             $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.notice-box').show(0);
                    $('.gallery-box').hide(0);
                }
            })


            //팝업버튼 클릭이벤트
            $('.popup-btn').on({
                click(){
                    $('.popup').css({display:'flex'});//show를 쓰면 플렉스가 풀린다 => 다시 플렉스 입력한다 show().css({display:'flex'});
                }
            });
            //팝업 닫기 이벤트
            $('.close-btn').on({
                click(){
                    /* $('.popup').hide(); */
                    $('.popup').css({display:'none'}); //hide 는 디스플레이 none과 같다.
                }
            });

        },
        footer(){
            
        }
    }
    shop.init();

})(jQuery);