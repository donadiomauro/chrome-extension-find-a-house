$( document ).ready(function() {
    function gumtreeCOM(){

        printInfo('Filtering...');

        try {

            //	GUMTREE.COM
            //	(1 Nov 2013)
            /////////////////

            // remove header adv
            $('#ad-slot-srp_topText').remove();
            // remove sponsored links
            $('iframe').remove();

            $('#header-adspace').remove();
            $('#footer-adspace').remove();

            $('#adsensecsa_srp_top').remove();
            $('#bottom-banner').remove();
            $('#adsensecsa_srp_bottom').remove();

        }
        catch(err){
            //Skip if "pagelet_ego_pane_w" div tag isn't on this page
            printError('And error occurred filtering');
        }

        printInfo('All ads have been removed.');
    }

    if(document.domain == 'www.gumtree.com')
        gumtreeCOM();
});