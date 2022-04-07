import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";


export interface AuthResponseData {
    localId: string,
    expiresIn: string,
    refreshToken: string,
    email: string,
    idToken: string
    registered?: boolean
};


@Injectable({ providedIn: 'root' })
export class AuthService {
    private API_KEY: string = "AIzaSyBlL6cueej5oUoOgf3AM8pxDH0Q-pChigg";
    user = new BehaviorSubject<User>(new User("", "", "", new Date()));
    tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {
    }

    signUp(email: string, password: string) {
        const URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.API_KEY;

        return this.http.post<AuthResponseData>(URL,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
            })
        );
    }

    login(email: string, password: string) {
        const URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY;

        return this.http.post<AuthResponseData>(URL, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
            })
        );
    }

    logout() {
        this.user.next(new User("", "", "", new Date()));
        this.router.navigate(["/auth"]);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer)
            clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
    }
    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error)
            return throwError(errorMessage);
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exist already!'; break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.'; break;
            case 'INVALID_PASSWORD':
                errorMessage = 'The password is invalid or the user does not have a password.'; break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'Password sign-in is disabled for this project.'; break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'; break;
            default:
                errorMessage = 'An unknown error occurred!'; break;
        }
        return throwError(errorMessage);
    }

    private handleAuthentication(email: string, token: string, userId: string, expiresIn: number) {
        const user = new User(email, userId, token, new Date(new Date().getTime() + +expiresIn * 1000));
        this.user.next(user);
        this.autoLogout(expiresIn*1000);
        localStorage.setItem('userData', JSON.stringify(user));

    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData')!);
        if (!userData)
            return;

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if (loadedUser.token) {
            const exporationDuration=new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(exporationDuration);
            this.user.next(loadedUser);
        }

    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer=
        setTimeout(() => {
            this.logout()
        }, expirationDuration);
        
    }
}