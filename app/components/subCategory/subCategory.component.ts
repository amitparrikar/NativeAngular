import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: 'subCategory',
    templateUrl: './components/subCategory/subCategory.html'
})

export class SubCategoryComponent{

    public subCategoryList: Array<Object>;

    public firstName: string;
    public lastName: string;

    constructor(private router: Router, private location: Location){

        this.firstName = "";
        this.lastName = "";
    }

    /*create(){
        this.router.navigate(['subCategory']);
    }*/

    save(){
        if(this.firstName != "" && this.lastName != ""){
            this.subCategoryList.push({fName: this.firstName, lName: this.lastName});
            ApplicationSettings.setString('people', JSON.stringify(this.subCategoryList));
            this.location.back();
        }
    }
}
