/**
 * Created by mauro donadio on 01/11/13.
 */

// Saves options to localStorage.
function save_options() {
    //var select = document.getElementById("color");
    document.getElementById("status").style.display="block";

        var checkboxes  = document.getElementsByName("source");

        localStorage["source"]  = '';

        var s = [];

        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked){
                //val += ","+checkboxes[i].value;
                //console.log(checkboxes[i].value);
                //localStorage["source"][i]    = checkboxes[i].value;
                s[i]        = checkboxes[i].value;
            }
        }

        localStorage["source"]      = s;

    //status.innerHTML = "Options Saved.";
    //document.getElementById("status").innerHTML = "Options Saved";
    /*
    setTimeout(function() {
        status.innerHTML = "";
        //document.getElementById("status").style.display="hidden";
        document.getElementById("status").style.display="none";
        document.getElementById("status").innerHTML = "";
    }, 750);
    */
    setTimeout(function() {
        status.innerHTML = "";
        document.getElementById("status").style.display="none";
    }, 100);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var s = localStorage["source"];
    if (!s) {
        return;
    }

    var sources = s.split(',');

    var checkboxes  = document.getElementsByName("source");
    for (var i = 0; i < checkboxes.length; i++) {

        if (sources.indexOf(checkboxes[i].value) != -1) {
            checkboxes[i].checked   = "true";
        }
    }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);