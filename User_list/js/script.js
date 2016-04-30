/**
 * Created by briancho on 4/30/16.
 */

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

