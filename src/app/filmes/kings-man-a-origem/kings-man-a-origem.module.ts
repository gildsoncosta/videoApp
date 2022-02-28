import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KingsManAOrigemPageRoutingModule } from './kings-man-a-origem-routing.module';

import { KingsManAOrigemPage } from './kings-man-a-origem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KingsManAOrigemPageRoutingModule
  ],
  declarations: [KingsManAOrigemPage]
})
export class KingsManAOrigemPageModule {}
