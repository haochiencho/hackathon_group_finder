/**
 * Created by briancho on 4/30/16.
 */

var myDataRef = new Firebase('https://dazzling-torch-3292.firebaseio.com/');

$( "#next1" ).click(function() {
    email = $('#email').val();
    password = $('#password').val();
});

$( "#next2" ).click(function() {
    twitter = $('#twitter').val();
    facebook = $('#facebook').val();
    google = $('#google').val();
});


$( "#next3" ).click(function() {
    alert('Hello');

    var first_name = $('#firstNameInput').val();
    var last_name = $('#lastNameInput').val();
    myDataRef.push({ email: email, password: password, twitter: twitter, facebook: facebook, google: google, first_name: first_name, last_name: last_name});
    first_name.val('');
    last_name.val('');


});

myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
});

function displayChatMessage() {
    alert('Hello');
}

