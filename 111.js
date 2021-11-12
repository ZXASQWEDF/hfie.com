< scriptsrc = "/jquery/jquery-1.11.1.min.js" >
    <
    /script> <
    script >
    $(document).ready(function() {
        $("div").click(function() {
            $("div").animate({
                left: '250px',
                opacity: '0.5',
                height: '150px',
                width: '150px'
            });
        });
    }); <
/script>