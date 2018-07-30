import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from '../../client/src/environments/environment';
import { AppModule } from 'app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// HACK: horrible workaround for AoT bootstrap detection bug
//let hackThis = false; 
//if (hackThis) {
//  platformBrowserDynamic().bootstrapModule(AppModule);
//}