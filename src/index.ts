'use strict';

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-material-icons';

import 'angular-material/angular-material.css';

import { routing } from './index.config';

import { homeModule } from './Home';

const requires: string[] = [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMdIcons',
    homeModule
];

angular.module('app', requires).config(routing);

angular.bootstrap(document, ['app'], {
    strictDi: true
});