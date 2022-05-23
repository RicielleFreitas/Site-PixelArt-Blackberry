import { PixelArt } from './interfaces/pixel-art.interface';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelArtComponent } from './pixel-art.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PixelArtComponent],
  exports: [PixelArtComponent]
})
export class PixelArtModule { }
