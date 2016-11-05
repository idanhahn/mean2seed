/**
 * Created by idanhahn on 11/5/2016.
 */
import { Component }  from '@angular/core';
import { Auth }       from '../auth.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})

export class HomeComponent {
    constructor(private auth: Auth) {}
};
