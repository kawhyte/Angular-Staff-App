import { DatePipe, CurrencyPipe } from '@angular/common';
import { Vehicle } from './../_models/vehicle';
import { User } from './../_models/User';
import { UserService } from './../_services/User.service';
import { TabsetComponent } from 'ngx-bootstrap';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../_services/vehicle.service';
import { PhotoService } from '../_services/photo.service';
import { BidService } from '../_services/bid.service';



@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css'],
  
})
export class ViewVehicleComponent implements OnInit {
  user: User
  vehicle: any 
  vehicleId: number; 
  userid: any;
  photos: any[];
  bids: any;
  name: string;
  isBiddingDone: boolean;
  
  @ViewChild('fileInput') fileInput: ElementRef;


  constructor(
    private route: ActivatedRoute, 
    private router: Router, private photoService: PhotoService,
    private bidService: BidService,
    private vehicleService: VehicleService,
    private UserService: UserService
  
  ) { 
 //console.log( this.vehicle.projectStartDate);
    route.params.subscribe(p => {
      this.vehicleId = +p['id'];
      if (isNaN(this.vehicleId) || this.vehicleId <= 0) {
        router.navigate(['/vehicles']);
        return; 
      }
    });


    this.route.data.subscribe(data => {
      this.user = data["user"];
    });


  }

  ngOnInit() { 
   //this.isBiddingDone  = true; 

        this.bidService.getBids(this.vehicleId) 
          .subscribe(bids => this.bids = bids);

        this.photoService.getPhotos(this.vehicleId) 
          .subscribe(photos => this.photos = photos);

      
    this.vehicleService.getVehicle(this.vehicleId)
      .subscribe(
        v => this.vehicle = v,
        err => {
          if (err.status == 404) {
            this.router.navigate(['/vehicles']);
            return; 
          }
        });
  }

  delete() {
    if (confirm("Are you sure?")) {
      this.vehicleService.delete(this.vehicle.id)
        .subscribe(x => {
          this.router.navigate(['/vehicles']);
        });
    }
  }

  uploadPhoto() {
    var nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    
    this.photoService.upload(this.vehicleId, nativeElement.files[0])
      .subscribe(photo => {
        this.photos.push(photo);
      });
  }


postbid() {
  var result$ = this.bidService.create(this.vehicle, this.bids) 
  console.log("bid obj - postbid", this.bids )
  result$.subscribe(vehicle => {
    this.router.navigate(['', vehicle.id])
  });
}
submit() {
    
    var result$ = this.vehicleService.update(this.vehicle) 

    result$.subscribe(vehicle => {
      this.router.navigate(['/vehicles/', vehicle.id])
    });
  }


}