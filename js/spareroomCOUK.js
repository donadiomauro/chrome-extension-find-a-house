$( document ).ready(function() {
    function spareroomCOUK(){

        printInfo('Filtering...');

        try {

            //	SPAREROOM.CO.UK
            //	(1 Nov 2013)
            /////////////////

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

        }
        catch(err){
            //Skip if "pagelet_ego_pane_w" div tag isn't on this page
            printError('And error occurred filtering');
        }

        printInfo('All ads have been removed.');
    }

    //addScript('spare');

    if(document.domain == 'www.spareroom.co.uk')
        spareroomCOUK();
});