import {HttpClient} from '@angular/common/http';

export class GetImageService {

  constructor(private http: HttpClient) { }

  getFileNames ()  {
    const endpoint = 'https://warm-temple-23739.herokuapp.com/api/files';
    this.http.get(endpoint).subscribe(file => {
      console.log(file);
    });
  }
}
