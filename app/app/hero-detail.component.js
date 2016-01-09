var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by heqingyang on 16/1/8.
 */
var core_1 = require('angular2/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            template: "\n      <div *ngIf=\"hero\">\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n        </div>\n      </div>\n    ",
            inputs: ['hero']
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;
