import { Injectable } from '@angular/core';

import { PageDimensionsEnum } from 'src/app/core/enums/page-dimensions.enum';

import { Image } from 'src/app/core/interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  fitsOnA4(image: Image): boolean {
    return this.isHorizontal(image)
      ? image.width <= PageDimensionsEnum.A4_MAX_HEIGHT &&
          image.height <= PageDimensionsEnum.A4_MAX_WIDTH
      : image.width <= PageDimensionsEnum.A4_MAX_WIDTH &&
          image.height <= PageDimensionsEnum.A4_MAX_HEIGHT;
  }

  getNewDimensions(image: Image): any {
    let widthDifference = 0;
    let heightDifference = 0;
    let newWidth = 0;
    let newHeight = 0;

    if (this.isHorizontal(image)) {
      widthDifference = image.width - PageDimensionsEnum.A4_MAX_HEIGHT;
      heightDifference = image.height - PageDimensionsEnum.A4_MAX_WIDTH;

      if (widthDifference > heightDifference) {
        newWidth = PageDimensionsEnum.A4_MAX_HEIGHT;
        newHeight = (newWidth * image.height) / image.width;
      } else {
        newHeight = PageDimensionsEnum.A4_MAX_WIDTH;
        newWidth = (newHeight * image.width) / image.height;
      }
    } else {
      widthDifference = image.width - PageDimensionsEnum.A4_MAX_WIDTH;
      heightDifference = image.height - PageDimensionsEnum.A4_MAX_HEIGHT;

      if (widthDifference > heightDifference) {
        newWidth = PageDimensionsEnum.A4_MAX_WIDTH;
        newHeight = (newWidth * image.height) / image.width;
      } else {
        newHeight = PageDimensionsEnum.A4_MAX_HEIGHT;
        newWidth = (newHeight * image.width) / image.height;
      }
    }

    return {
      newWidth: newWidth.toFixed(0),
      newHeight: newHeight.toFixed(0),
    };
  }

  getRatio(image: Image): string {
    return (image.width / image.height).toFixed(2);
  }

  isHorizontal(image: Image): boolean {
    return image.width > image.height;
  }
}
