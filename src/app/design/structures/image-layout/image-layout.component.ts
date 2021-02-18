import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/local/image.service';

@Component({
  selector: 'app-image-layout',
  templateUrl: './image-layout.component.html',
  styleUrls: ['./image-layout.component.scss'],
})
export class ImageLayoutComponent implements OnInit {
  @Input() images: any[];

  constructor(public imageService: ImageService) {}

  ngOnInit(): void {}
}
