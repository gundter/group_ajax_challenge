/**
 * Created by codymisura on 5/1/15.
 */

function getUser (){
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/tgun6144?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
        crossDomain: true,
        //accept: "application/vnd.github.v3+json",
        dataType: 'json',
        success: function (response) {
            console.log(response);
            displayInfo(response);
            return response;
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        }
    });
}

function displayInfo (data){
    // username (login)
    // link to github page (url)
    // profile image (avatar_url)
    // some public info? (name, company, location, bio)
}

$(document).ready(function(){
    getUser();
});