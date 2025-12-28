import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

console.log('[main] bootstrapping AppModule ...');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => console.log('[main] bootstrap OK'))
  .catch(err => {
    console.error('[main] bootstrap FAILED - full error below:');
    console.error(err);
    throw err;
  });
