import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesComponent } from './pages/images/images.component';
import { ImageUploadComponent } from './structures/image-upload/image-upload.component';
import { ImageLayoutComponent } from './structures/image-layout/image-layout.component';

@NgModule({
  declarations: [ImagesComponent, ImageUploadComponent, ImageLayoutComponent],
  imports: [CommonModule],
})
export class DesignModule {}
