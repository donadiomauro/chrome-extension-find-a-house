$(function() {

    window.quarantine  = [];

    var messageStyle    = 'style="font-family:Verdana; color: #336699; background: #dcedff; font-size: 80%; border: 1px solid #CCCCCC; padding: 5px; margin: 0 auto; margin-bottom: 10px; display:none"';
    $('html').prepend('<div class="quarantine" ' + messageStyle + '></div>');

    function printInfo(message){
        //$('html').prepend('<div class="quarantine" ' + messageStyle + '>' + message + '</div>');
        $('.quarantine').html('Info: ' + message);
        $('.quarantine').slideDown();
    }

    function printError(message){
        $('.quarantine').css('background', '#FDD7E4');
        /*
         $('.quarantine').css('position', 'absolute');
         */

        $('.quarantine').html('Error: ' + message);
        $('.quarantine').slideDown();
    }

    function addScript(scriptName){

        quarantine.push(scriptName);
    }

    // associate the functions to the global Window element
    window.printInfo    = printInfo;
    window.printError   = printError;
    window.addScript    = addScript;

    //addScript('Mauro');

});

$( window ).ready(function() {

    //console.log('localStorage ------> ' + localStorage.getItem("source"));
    console.log('localStorage ------> ' + quarantine);
});