import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  images: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  selectFile(event): void {
    this.images = [];

    if (event.target.files) {
      for (const file of event.target.files) {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (eve: any) => {
          const img = new Image();

          img.onload = () => {
            this.images.push(img);
          };

          img.src = eve.target.result;
        };
      }
    }
  }
}
