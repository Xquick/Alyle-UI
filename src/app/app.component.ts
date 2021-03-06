import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AUI_VERSION } from 'alyle-ui';
import { LyMenu } from 'alyle-ui/menu';
import { LyTheme } from 'alyle-ui/core';
import { RoutesAppService } from './components/routes-app.service';
import { MinimalLS } from 'alyle-ui/ls';
import { AlyleServiceConfig } from 'alyle-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routesComponents: any;
  @ViewChild('ThemeMenu') menuTheme: LyMenu;
  listColors: any[];
  version: string = AUI_VERSION;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public theme: LyTheme,
    public routesApp: RoutesAppService,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
    this.routesComponents = this.routesApp.routesApp;
    this.listColors = [
      {
        primary: 'blue',
        accent: 'pink',
        colorScheme: 'light'
      },
      {
        primary: 'pink',
        accent: 'purple',
        colorScheme: 'light'
      },
      {
        primary: 'lightBlue',
        accent: 'purple',
        colorScheme: 'light'
      },
      {
        primary: 'cyan',
        accent: 'amber',
        colorScheme: 'light'
      }
    ];
  }
  changePrimary(color: AlyleServiceConfig) {
    this.theme.setTheme(color);
  }
}
