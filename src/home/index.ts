'use strict';

import * as angular from 'angular';

import { routes } from './home.routes';
import { HomeCtrl } from './home.controller';
import { HomeService } from './home.service';

export const homeModule = angular.module('home', [])
    .config(routes)
    .controller('HomeCtrl', HomeCtrl)
    .service('HomeService', HomeService)
    .name;