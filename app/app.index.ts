import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

@Component({
    template: `
    <div class="index-body">

        <div class="index-logo-div">
            <img class="index-logo-img" src="../img-hd/logo.jpg" alt=""/>
        </div>
        <button (click)="gotoConfig()" class="btn-index">开始游戏</button>
        <button (click)="gotoAbout()" class="btn-index btn-index-about">关于作者</button>
    </div>
    `
})
export class AppIndexComponent implements OnInit{

    constructor(
        private _router: Router
    ){}

    ngOnInit() {
        console.log("List is ready!");
    }

    gotoAbout() {
        this._router.navigate(['AboutAuthor']);
    }

    gotoConfig() {
        this._router.navigate(['ConfigGame']);
    }
}