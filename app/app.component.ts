import {Component} from "@angular/core";
import {RouterConfig} from "@angular/router";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';

import {CategoryComponent} from './components/category/category.component';
import {SubCategoryComponent} from './components/subCategory/subCategory.component';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS]
})

@RouterConfig([
    { path: '/category', component: CategoryComponent, name: 'Category', useAsDefault: true },
    { path: '/subCategory', component: SubCategoryComponent, name: 'SubCategory' }
])

export class AppComponent {



}
