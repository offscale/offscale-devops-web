import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';

import { VerticalTabsModule } from 'vertical-tabs';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { RootComponent } from './root.component';
import { rootRoutes } from './root.routes';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(rootRoutes),
    FlexLayoutModule,
    MatButtonModule, MatGridListModule,
    VerticalTabsModule.forRoot(),
    SvgViewerModule, MatCardModule
  ]
})
export class RootModule { }
