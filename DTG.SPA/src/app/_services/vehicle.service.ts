import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SaveVehicle } from '../_models/vehicle';
import { environment } from '../../environments/environment';

@Injectable()
export class VehicleService {
  baseUrl = environment.apiUrl;
  constructor(private http: Http) { }

  getMakes() {
    return this.http.get(this.baseUrl + '/makes')
      .map(res => res.json());
  }

  getFeatures() {
    return this.http.get(this.baseUrl + '/features')
      .map(res => res.json());
  }

  create(vehicle) {
    console.log(vehicle)
    return this.http.post(this.baseUrl +'/vehicles', vehicle)
      .map(res => res.json());
  }

  getVehicle(id) {
    return this.http.get(this.baseUrl +'/vehicles/' + id)
      .map(res => res.json());
  }


  getVehicles(filter) {
    return this.http.get(this.baseUrl + '/vehicles/' + '?' + this.toQueryString(filter))
      .map(res => res.json());
  }


  toQueryString(obj) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined) 
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }


  update(vehicle: SaveVehicle) {
    console.log(vehicle)
    return this.http.put( this.baseUrl + 'api/vehicles/' + vehicle.id, vehicle)
      .map(res => res.json());
  }

  delete(id) {
    return this.http.delete( this.baseUrl + 'api/vehicles/' + id)
      .map(res => res.json());
  }
}
