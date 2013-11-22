$( document ).ready(function() {
    function rightmoveCOUK(){

        printInfo('Filtering...');

        try {

            //	RIGHTMOVE.CO.UK
            //	(1 Nov 2013)
            /////////////////
/*
            // remove early bird
            $('.early_bird_icon').closest('li').remove();

            // unsuitable
            $('li:contains("Unsuitable")').remove();

            // just missed it
            $('li:contains("Just missed it!")').remove();

            // adv
            $('.listing_sfm_Regional').remove();
            $('.listing_sfm_Local').remove();

            //$('body').hide();
            $('.filtering').html('Content Filtered!');
*/
            // remove NO IMAGE
            $('.moredetails ul li:first-child').each(function(){
                if($.trim($(this).text()) == 'Photos: 0')
                    $(this).parent().closest('li').remove();
            });

        }
        catch(err){
            //Skip if "pagelet_ego_pane_w" div tag isn't on this page
            printError('And error occurred filtering');
        }

        printInfo('All ads have been removed.');
    }

    if(document.domain == 'www.rightmove.co.uk')
        rightmoveCOUK();
});