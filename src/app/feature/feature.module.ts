import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { PixelArtModule } from './components/pixel-art/pixel-art.module';

@NgModule({
  imports: [CommonModule, PixelArtModule],
  declarations: [FeatureComponent],
  exports: [FeatureComponent]
})
export class FeatureModule {}
