/**
 * Created by briancho on 4/30/16.
 */

var my_data = new Firebase('https://dazzling-torch-3292.firebaseio.com/');

myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();

});

var users = angular.module('users', []);

users.controller('user', function ($scope) {
    $scope.phones = [
        {'first_name': 'Ashley',
            'last_name': 'Tsao',
            'areas_of_interest': 'Front End',
            'email': 'something@gmail.com',
            'phone_number': '18005555'
        },
        {'first_name': 'Brian',
            'last_name': 'Cho',
            'areas_of_interest': 'Front End',
            'email': 'something@gmail.com',
            'phone_number': '18005555'
        },
        {'first_name': 'Will',
            'last_name': 'Yu',
            'areas_of_interest': 'Front End',
            'email': 'something@gmail.com',
            'phone_number': '18005555'
        }
    ];
});

