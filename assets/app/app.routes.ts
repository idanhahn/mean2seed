/**
 * Created by idanhahn on 11/5/2016.
 */
import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {GenericComponent} from "./generic/generic.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'generic', component: GenericComponent},
    { path: '**', redirectTo: '' },
    //{ path: 'admin', component: AdminComponent}
];

export const appRoutingProviders: any[] = [
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
