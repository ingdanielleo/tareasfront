import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: 'API_URL', useValue: 'http://localhost:5121/api' }, // ✅ Define API_URL
  ],
};
