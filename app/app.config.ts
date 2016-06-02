import {Component, OnInit, NgFor} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {DataService} from './role.service'

@Component({
    template: `
    <div class="index-body">
        <a [routerLink]="['Index']">
            <div class="about-close">x</div>
        </a>
        <div class="config-title col-xs-12">人数配置</div>
        <!--<div class="col-xs-6">-->
        <form class="form-horizontal form-validation ng-pristine ng-invalid ng-invalid-required" name="form">
            <div class="form-group">
                <label for="total" class="col-xs-3 config-label">总人数
                </label>
                <div class="col-xs-3">
                    <input id="total" type="number" class="form-control" [(ngModel)]="totalNum"/>
                </div>
                <!--</div>-->
                <div class="col-xs-6 text-center">
                    <button class="config-advise btn btn-sm btn-default" (click) = "autoCalc()">推荐配置</button>
                </div>
            </div>

            <div class="form-group">
                <label for="villager" class="col-xs-3 config-label">村民
                </label>
                <div class="col-xs-3">
                    <input id="villager" type="number" class="form-control" [(ngModel)]="villagerNum"/>
                </div>
                <label for="werewolf" class="col-xs-2 config-label">狼人
                </label>
                <div class="col-xs-3">
                    <input id="werewolf" type="number" class="form-control" [(ngModel)]="werewolfNum"/>
                </div>
            </div>
            <div class="roles-area">
                <div class="col-xs-4 role-item" *ngFor="#role of roleArray">
                    <label attr.for={{role.code}} class="config-label">{{role.name}}
                    </label>
                    <input id="{{role.code}}"  type="checkbox" class="mui-checkbox col-xs-1" checked [(ngModel)]="role.selected"/>
                </div>
            </div>
        </form>
        <button class="btn-index btn-index-begin" [disabled]="!isValid()" (click)="beginGame()">开始游戏</button>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ConfigComponent implements OnInit{

    public totalNum = 3;
    public villagerNum = 1;
    public werewolfNum = 1;
    public roleArray = [
        {
            'name': '预言家',
            'code': 'prophet',
            'selected': true
        },{
            'name': '女巫',
            'code': 'witch',
            'selected': false
        },{
            'name': '守卫',
            'code': 'guard',
            'selected': false
        },{
            'name': '猎人',
            'code': 'hunter',
            'selected': false
        },{
            'name': '白痴',
            'code': 'idiot',
            'selected': false
        },{
            'name': '长老',
            'code': 'elder',
            'selected': false
        },{
            'name': '丘比特',
            'code': 'cupid',
            'selected': false
        }
    ]
    public items  = new Array();
    public result = new Array();

    constructor(
        private _router: Router,
        private _dataService: DataService
    ){}

    autoCalc() {
        //TODO
    }

    isValid() {
        var roleTotal = 0;
        for(var i=0,len = this.roleArray.length;i<len;i++){
            if(this.roleArray[i].selected){
                roleTotal++;
            }
        }
        return this.villagerNum + this.werewolfNum + roleTotal == this.totalNum;
    }

    beginGame() {
        for(var i=0,len = this.roleArray.length;i<len;i++){
            if(this.roleArray[i].selected){
                this.items.push(this.roleArray[i]);
            }
        }
        for(var i=0,len = this.villagerNum;i<len;i++){
            this.items.push(
                {
                    'name': '村民',
                    'code': 'villager',
                    'selected': false,
                }
            );
        }
        for(var i=0,len = this.werewolfNum;i<len;i++){
            this.items.push(
                {
                    'name': '狼人',
                    'code': 'werewolf',
                    'selected': false,
                }
            );
        }

        //数组随机排序
        for(var i=0,len = this.items.length;i<len;i++){
            var rand = parseInt(Math.random()*len);
            var temp = this.items[rand];
            this.items[rand] = this.items[i];
            this.items[i] = temp;
        }
        this.items.forEach(function(item,index){
            item.index = index+1;
        });

        this._dataService.setData(this.items);
        console.log(this._dataService.getData());
        this._router.navigate(['GameIndex']);
    }

    ngOnInit() {
        console.log("Config is ready!");
    }
}