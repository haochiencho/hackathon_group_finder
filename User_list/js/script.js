/**
 * Created by briancho on 4/30/16.
 */

var users = angular.module('users', []);

users.controller('user', function ($scope) {
    $scope.phones = [
        {'first_name': 'Ashley',
            'last_name': 'Tsao',
            'thing': 'f'
        },
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
});

