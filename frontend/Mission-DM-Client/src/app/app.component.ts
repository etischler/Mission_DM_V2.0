import { Component, OnInit} from '@angular/core';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MissionDM';

  constructor() {
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
            //this.router.navigate(['./home']);
          }
        }));
    }; 
  }
  ngOnInit() {
    if (window.FB) {
        window.FB.XFBML.parse();
    }
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        //this.router.navigate(['./home']);
      }
    });
  }
}