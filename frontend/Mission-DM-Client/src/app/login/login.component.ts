import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) {
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
        FB.init({
            appId            : '611814462526484',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.12'
        });
        FB.AppEvents.logPageView();
        FB.Event.subscribe('auth.statusChange', (response => {
          if (response.status === 'connected') {
            this.router.navigate(['./home']);
          }
        }));
    }; 
  }

  ngOnInit() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    if (FB) { //TODO: this is not working, potentially use session to know logged in
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          this.router.navigate(['./home']);
        }
      });
    }
  }
}
