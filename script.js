/**
 * Created by codymisura on 5/1/15.
 */

function getUser (query){
    console.log(query);
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/'+query+'?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
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
    // link to github page (html_url)
    // profile image (avatar_url)
    // some public info? (name, company, location, bio)

    var avatar_url = data.avatar_url.toString();
    console.log(avatar_url);
    $('.results').find("img").attr("src", avatar_url);
    $('.results').append("<a href='"+data.html_url+"'>"+data.login+"</a> <p><strong>"+data.name+"</strong>, "+data.company+", "+data.location+"</p><p>"+data.bio+"</p>");

}

$(document).ready(function(){
    // Start the search here!
    $('.controls').on('click', '.searchBtn', function(){
        var searchTerm = $(".controls").find("#searchField").val();
        console.log(searchTerm);
        $(".controls").find("#searchField").val('');
        getUser(encodeURI(searchTerm));
    });
});