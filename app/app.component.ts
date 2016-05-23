/**
 * Created by heqingyang on 16/2/2.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppIndexComponent} from './app.index';
import {AboutComponent} from './app.about';
import {ConfigComponent} from './app.config';
import {GameComponent} from './app.game';
import {ListComponent} from './app.list';



interface Role {
    id: number;
    name: string;
    camp: number;
}

@Component({
    selector: 'my-app',
    template: `
    <!--<h1>123123</h1>-->
    <!--<nav>-->
      <!--<a [routerLink]="['Index']">Mobile List</a>-->
      <!--<a [routerLink]="['AboutAuthor']">CEO List</a>-->
    <!--</nav>-->
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/index',
        name: 'Index',
        component: AppIndexComponent,
        useAsDefault: true
    },
    {
        path: '/about',
        name: 'AboutAuthor',
        component: AboutComponent,
    },
    {
        path: 'config',
        name: 'ConfigGame',
        component: ConfigComponent,
    },
    {
        path: 'game',
        name: 'GameIndex',
        component: GameComponent
    },
    {
        path: 'list',
        name: 'ListPage',
        component: ListComponent
    }
])
export class AppComponent {}