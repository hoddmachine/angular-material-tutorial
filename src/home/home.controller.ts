'use strict';

import { IScope } from 'angular';

const deps: string[] = [
    '$scope',
    '$mdSidenav'
];

export class HomeCtrl {
    menu: [{}];
    cards: [{}];

    constructor(
        private $scope: IScope,
        private $mdSidenav: any
    ) {
        this.menu = [
            {
                link: '',
                title: 'Dashboard',
                icon: 'dashboard'
            },
            {
                link: '',
                title: 'Friends',
                icon: 'group'
            },
            {
                link: '',
                title: 'Messages',
                icon: 'message'
            },
            {
                link: '',
                title: 'Trash',
                icon: 'delete'
            },
            {
                link: 'showListBottomSheet($event)',
                title: 'Settings',
                icon: 'settings'
            }
        ];
        this.cards = [
            {
                img: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12938173_10209183680818992_2149045541985998862_n.jpg?oh=2887b1ae64dd839413e891c2c1c01bda&oe=57E370A3'
                title: 'The pie',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            },
            {
                img: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13419198_10209703071843443_1822856454941920768_n.jpg?oh=733bbb1965a28f9ef9ff51839add237d&oe=57CC9A61',
                title: 'Pancakes',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            },
            {
                img: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13256290_10209525595446644_5885461328286239159_n.jpg?oh=57090d1b284a668f5caf0be0b9899ade&oe=57C87907'
                title: 'Hot Pot',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            }
            {
                img: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13244619_10209525594926631_6560789442970099412_n.jpg?oh=05e44b0840c659aa3ec7b1f922be592a&oe=57CC11D7'
                title: 'The Noooodles',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            }
        ];
    }

    toggleSidenav(menuId: string) {
        this.$mdSidenav(menuId).toggle();
    };
}

HomeCtrl.$inject = deps;