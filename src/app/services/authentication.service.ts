import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;
    public API: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.API = 'http://laravel-api/api';
    }

    login(username: string, password: string): Observable<boolean> {
        return false;
        // console.log (this.API);
        // let url = this.API+'/auth/login?email='+username+'&password='+password;
        // console.log(url);

        // // return this.http.post(this.API+'/auth/login', JSON.stringify({ username: username, password: password }))
        // //     console.log (this.API);
        // //     .map((response: Response) => {
        // //         // login successful if there's a jwt token in the response
        // //         let token = response.json() && response.json().token;
        // //         if (token) {
        // //             // set token property
        // //             this.token = token;

        // //             // store username and jwt token in local storage to keep user logged in between page refreshes
        // //             localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

        // //             // return true to indicate successful login
        // //             return true;
        // //         } else {
        // //             // return false to indicate failed login
        // //             return false;
        // //         }
        // //     });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}