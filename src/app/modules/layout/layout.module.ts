import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
@NgModule({ imports: [LayoutRoutingModule], providers: [provideHttpClient()] })
export class LayoutModule {}