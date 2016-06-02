import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
    <a [routerLink]="['Index']">
        <div class="about-close">x</div>
    </a>
    <div class="about-title">作者介绍</div>
    <img class="about-logo" src="../img-hd/logo.gif" alt="作者头像"/>
    <div class="about-name">伟大的HeOH</div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class AboutComponent implements OnInit{
    ngOnInit() {
        console.log("About is ready!");
    }
}