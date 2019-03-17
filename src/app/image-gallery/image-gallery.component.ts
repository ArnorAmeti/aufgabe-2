import {Component, OnInit} from '@angular/core';
import {GetImageService} from './get-images.service';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  providers: [{provide: GetImageService}]
})
export class ImageGalleryComponent implements OnInit {
  images: string[] = [];


  constructor(private getImageService: GetImageService) {
    // const fileNames = this.getImageService.getFileNames();
  }


  ngOnInit() {
  }

}

