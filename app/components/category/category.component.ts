import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as applicationSettings from "application-settings";

@Component({
    selector: 'category',
    templateUrl: './components/category/category.html'
})

export class CategoryComponent{

    public categoryList: Array<Object>;

    constructor(private router: Router, private location: Location){

        this.categoryList = [{fName: 'Amit', lName: 'Parrikar'}, {name: 'Amit 1', lName: 'Parrikar 1'}];

        this.location.subscribe(path => {
            this.categoryList = [{fName: 'Amit', lName: 'Parrikar'}, {name: 'Amit 1', lName: 'Parrikar 1'}];
        });
    }

    create(){
        this.router.navigate(['subCategory']);
    }
}
