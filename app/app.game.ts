import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {DataService} from './role.service'


@Component({
    template: `
    <div class="index-body">
        <div class="info-area">
            <div *ngIf="role.next">
                <img [src]="role.url" [alt]="role.name"/>
                <span>{{role.name}}</span>
            </div>
            <div *ngIf="!role.next">
                <span></span>
            </div>
        </div>
        <button class="btn-index btn-index-begin" (click)="role.next = true" *ngIf="!role.next">查看</button>
        <button class="btn-index btn-index-begin" (click)="nextRole()" *ngIf="role.next">记住了</button>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class GameComponent implements OnInit{

    public roles = new Array();
    private role = new Object();
    private index=1;
    constructor(
        private _router: Router,
        private _dataService: DataService
    ){}

    nextRole() {
        if(this.index<this.roles.length){
            this.role = this.roles[this.index];
            this.index++;
        }else{
            this._router.navigate(['AboutAuthor']);
        }
    }

    ngOnInit() {
        console.log("Game is ready!");
        this.roles = this._dataService.getData();
        if(this.roles.length==0){
            this.roles.push({'name':"村民",'code':'villager'});
        }
        for(var item of this.roles){
            item.url = '/image/'+item.code+'.jpg';
            item.next = false;
        }
        this.role = this.roles[0];
    }
}