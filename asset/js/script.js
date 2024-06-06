$(document).ready(function(){
    $(".nav-link").click(function(){
        $(".nav-link").removeClass("blue_menu");
        $(this).addClass("blue_menu");
    });

    // Position fixed into container
    {
        function adjustFixedDiv() {
            var $container = $('.container');
            var $fixedDiv = $('.profile');
            var containerRect = $container[0].getBoundingClientRect();
            
            $fixedDiv.css({
                'width': containerRect.width + 'px',
                'left': containerRect.left + 'px'
            });
        }

        $(window).on('resize', adjustFixedDiv);
        $(window).on('load', adjustFixedDiv);
        $(document).ready(adjustFixedDiv);
    }
});