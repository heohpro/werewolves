import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {DataService} from './role.service'
import {GameComponent} from './app.game'


@Component({
    template: `
    <div class="index-body">
        <!--<role-detail [role]="role" [roles]="roles" *ngIf="role"></role-detail>-->
        <div class="list-area" *ngIf="!isShow">
            <div class="list-span">点击查看玩家角色</div>
            <div class="col-xs-4" *ngFor="#role of roleList">
                <div class="list-item" (click)="previewRole(role)">
                    <span class="span-item">{{role.index}}号玩家</span>
                </div>
            </div>
        </div>
        <div class="info-area" *ngIf="isShow">
            <div>
                <img [src]="role.url" [alt]="role.name"/>
                <span>{{role.name}}</span>
            </div>
            <button class="btn-index btn-index-begin" (click)="isShow = !isShow">记住了</button>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES,GameComponent],
})
export class ListComponent implements OnInit{

    public roles = new Array();
    private roleList = new Array();
    private role = new Object();
    private index=1;
    private isShow = false;
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

    previewRole(role) {
        console.log("previewRole!!!")
        this.role = role;
        this.isShow = true;
    }

    ngOnInit() {
        console.log("Game is ready!");
        this.roleList = this._dataService.getData();
        //if(this.roles.length==0){
        //    this.roles.push({'name':"村民",'code':'villager'});
        //}
        for(var item of this.roleList){
            item.url = '/image/'+item.code+'.jpg';
            item.next = false;
        }
        //this.role = this.roles[0];
    }
}