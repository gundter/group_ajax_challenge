/**
 * Created by codymisura on 5/1/15.
 */
$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/cmmisura14/orgs/repos',
        crossDomain: true,
        Accept: "application/vnd.github.v3+json",
        dataType: 'text',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        }
    });
});