import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class PhotoService {
baseUrl = environment.apiUrl;

  constructor(private http: Http) { }

  upload(vehicleId, photo) {
    var formData = new FormData();
    formData.append('file', photo);
    return this.http.post(this.baseUrl + '/vehicles/' + vehicleId + "/photos", formData)
      .map(res => res.json());
  }

  getPhotos(vehicleId) {
    return this.http.get( this.baseUrl+ '/vehicles/' + vehicleId + "/photos")
      .map(res => res.json());
  }

}