/**
 * Created by heqingyang on 16/2/2.
 */
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {DataService} from './role.service'



bootstrap(AppComponent,[ROUTER_PROVIDERS,DataService]);