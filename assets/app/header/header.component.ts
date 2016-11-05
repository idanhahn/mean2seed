/**
 * Created by idanhahn on 11/5/2016.
 */
import { Component }  from '@angular/core';
import { Auth }       from '../auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})

export class HeaderComponent {
    constructor(private auth: Auth) {}
};
