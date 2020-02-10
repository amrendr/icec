import { NgModule } from '@angular/core';

import { AppEscapePipe, AppFilterListPipe } from './services/app.pipe';

@NgModule({
  imports: [],
  declarations: [AppEscapePipe, AppFilterListPipe],
  providers: [AppFilterListPipe],
  exports: [AppEscapePipe, AppFilterListPipe]
})
export class AppPipeModule { }
