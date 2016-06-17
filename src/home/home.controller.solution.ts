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
                img: 'http://hordur.me/img/tutorial-assets/nandos.jpg',
                title: 'Glorious chicken',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            },
            {
                img: 'http://hordur.me/img/tutorial-assets/pancakes.jpg',
                title: 'Pancakes',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            },
            {
                img: 'http://hordur.me/img/tutorial-assets/hotpot.jpg',
                title: 'Hot Pot',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            },
            {
                img: 'http://hordur.me/img/tutorial-assets/porter.jpg',
                title: 'Tokyo Black Porter',
                caption: 'Vista google is not a real company leadership microsoft word linux is not in the public domain innovation. '
            }
        ];
    }

    toggleSidenav(menuId: string) {
        this.$mdSidenav(menuId).toggle();
    };
}

HomeCtrl.$inject = deps;