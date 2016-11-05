import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AUTH_PROVIDERS}      from 'angular2-jwt';

import {AppComponent} from "./app.component";

import {routing,appRoutingProviders} from './app.routes';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";


// TODO: replace
import {GenericComponent} from "./generic/generic.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        
        
        // TODO: replace
        GenericComponent
        
    ],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS
    ],
    imports: [
        BrowserModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}