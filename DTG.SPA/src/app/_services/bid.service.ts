import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BidService {

    constructor(private http: Http) { }

/*     upload(vehicleId, photo) {
      var formData = new FormData();
      formData.append('file', photo);
      return this.http.post('http://localhost:5000/api/vehicles/' + vehicleId + "/photos", formData)
        .map(res => res.json());
    } */

    create(vehicleId, bid) {
        console.log("create -bid", vehicleId.id)
        console.log(bid.bidvalue)
        return this.http.post('http://localhost:5000/api/vehicles/' + vehicleId.id + "/bids", bid)
          .map(res => res.json());
      }
  
    getBids(vehicleId) {
       
      return this.http.get('http://localhost:5000/api/vehicles/' + vehicleId + "/bids")
        .map(res => res.json());
    }

}
