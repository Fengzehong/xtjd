        $('html').css('fontSize', ($(window).width()>750?750:$(window).width())/750*100);
        $(function(){
            $('html').css('fontSize', $('body').width()/750*100);
        });