$( document ).ready(function() {
    function intolondonCOM(){

        printInfo('Filtering...');

        try {

            //	INTOLONDON.COM
            //	(31 Oct 2013)
            /////////////////

            // remove early bird
            $(".plainadrow .listingage .listingnew").each(function(){
                if($(this).css('background-image') == 'url(http://images2.intolondon.com/images/intolondon/earlybird2.gif)')
                    //$(this).css('color', 'yellow');
                    $(this).remove();
            });

            // just missed it
            $('div div div div div:contains("Just missed it!")').remove();

            // adv
            $('div div a:contains("Find out more")').parent().parent().remove();

        }
        catch(err){
            //Skip if "pagelet_ego_pane_w" div tag isn't on this page
            printError('And error occurred filtering');
        }

        printInfo('All ads have been removed.');
    }

    if(document.domain == 'www.intolondon.com')
        intolondonCOM();
});