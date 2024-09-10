import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideHttpClient } from '@angular/common/http';

import { AppModule } from './app/app.module';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

let devUrl = "REMOVE_FOR_DEVhttp://localhost:4200";
if (window.location.href.startsWith(devUrl)) {
  console.log("path framework standalone angular development version");
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
} else {
  (async () => {
    const app = createApplication({ providers: [provideHttpClient(), provideAnimations()] });
    const appComponent = createCustomElement(AppComponent, {
      injector: (await app).injector
    });

    customElements.define('path-framework', appComponent);

  })();
}

