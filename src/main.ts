import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NgZone } from '@angular/core';
import { HeroComponent } from './app/components/hero/hero.component';
import { TimelineComponent } from './app/components/timeline/timeline.component';
import { CardComponent } from './app/components/card/card.component';
import { NavComponent } from './app/components/nav/nav.component';
import { createCustomElement } from '@angular/elements';
import { IconboxComponent } from './app/components/iconbox/iconbox.component';
import { FooterComponent } from './app/components/footer/footer.component';


(async () =>{
  const app = await createApplication(appConfig);  
  const hero = createCustomElement(HeroComponent,{injector:app.injector});
  const timeline = createCustomElement(TimelineComponent,{injector:app.injector});
  const card = createCustomElement(CardComponent,{injector:app.injector});
  const nav = createCustomElement(NavComponent,{injector:app.injector});
  const iconbox = createCustomElement(IconboxComponent,{injector:app.injector});
  const footer = createCustomElement(FooterComponent,{injector:app.injector});
  customElements.define('agr-hero',hero);
  customElements.define('agr-timeline',timeline);
  customElements.define('agr-card',card);
  customElements.define('agr-nav',nav);
  customElements.define('agr-iconbox',iconbox);
  customElements.define('agr-footer',footer);
})();

/*
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  */