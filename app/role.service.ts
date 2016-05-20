/**
 * Created by heqingyang on 16/5/19.
 */

import {Injectable} from 'angular2/core'

@Injectable()
export class DataService {

    roleArray : Array<any>;

    constructor(){
        this.roleArray = [];
    }

    getData() {
        return this.roleArray;
    }

    setData(item) {
        console.log("in a service!")
        this.roleArray = item;
    }
}