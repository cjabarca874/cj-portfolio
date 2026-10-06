import {TitleStrategy} from '@angular/router';
import {PortfolioTitleStrategy} from './core/services/portfolio-title.strategy';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [{provide:TitleStrategy,useClass:PortfolioTitleStrategy},
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:'top'})), provideClientHydration()
  ]
};
