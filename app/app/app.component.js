var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var hero_detail_component_1 = require('./hero-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        //public hero: Hero = {
        //  id: 1,
        //  name: 'Windstorm'
        //};
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <!--<h2>{{hero.name}} details!</h2>-->\n    <!--<div><label>id: </label>{{hero.id}}</div>-->\n\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    <!--<div>-->\n      <!--<label>name: </label>-->\n      <!--<div><input [(ngModel)]=\"hero.name\" placeholder=\"name\"></div>-->\n    <!--</div>-->\n    <!--<div *ngIf=\"selectedHero\">-->\n      <!--<h2>{{selectedHero.name}} details!</h2>-->\n      <!--<div><label>id: </label>{{selectedHero.id}}</div>-->\n      <!--<div>-->\n          <!--<label>name: </label>-->\n          <!--<input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>-->\n      <!--</div>-->\n    <!--</div>-->\n    ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 10em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #EEE;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0em 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0px 0px 4px;\n  }\n"],
            directives: [hero_detail_component_1.HeroDetailComponent]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
var HEROES = [];
