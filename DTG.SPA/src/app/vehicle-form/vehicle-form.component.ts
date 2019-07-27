import { AlertifyService } from './../_services/alertify.service';
import { Contact, Vehicle } from './../_models/vehicle';
import { Component, OnInit, Input } from '@angular/core';
import { VehicleService } from '../_services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/Observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { SaveVehicle } from '../_models/vehicle';
//import _ = require('underscore');
import * as _ from 'underscore'; 
import { User } from '../_models/user';
import { UserService } from '../_services/User.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  isReadOnly: boolean;
  user: User;
  photoUrl: string;
  //user: User;
  makes: any[]; 
  models: any[];
  features: any[];
  vehicle: SaveVehicle = {
    id: 0,
    createdByUserId: this.authService.currentUser.id,
    projectBudget: 0.00,
    endDate: new Date('2018-11-03'), 
    lowestProjectBid:0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      email: '',
      phone: '',
    }
  };



  constructor(
    private authservice: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private userservice: UserService,
    private alertify: AlertifyService,
    private vehicleService: VehicleService, 
    private alertifyService: AlertifyService) {

      route.params.subscribe(p => {
        this.vehicle.id = +p['id'] || 0;
      });

      this.vehicle.createdByUserId = (this.vehicle.id) ? 
        this.vehicle.createdByUserId : this.authService.currentUser.id;
      
      

      if (this.vehicle.id)
          this.isReadOnly = true;
    }

  ngOnInit() {

    new Date().toDateString();

    this.route.data.subscribe(data => {
      this.user = data["user"];
    });


  
   if (this.vehicle.id )
        this.isReadOnly = true;
   
  var storedValue = this.vehicle.lowestProjectBid;

    this.vehicle.createdByUserId = (this.vehicle.id) ? this.vehicle.createdByUserId : this.authService.currentUser.id;
    this.authService.currentUser.id
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
    this.authservice.currentPhotUrl.subscribe(photoUrl => this.photoUrl = photoUrl)


    var sources = [
      
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures(),
    ];

    if (this.vehicle.id)
      sources.push(this.vehicleService.getVehicle(this.vehicle.id));

    Observable.forkJoin(sources).subscribe(data => {
      this.makes = data[0];
      this.features = data[1];

      if (this.vehicle.id) {
        this.setVehicle(data[2]);
        this.populateModels();
      }
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/home']);
    });

  
  }

  private setVehicle(v: Vehicle) {
    this.vehicle.id = v.id;
    //this.vehicle.createdByUserId = this.authService.currentUser.id;
    this.vehicle.projectBudget = v.projectBudget;
    this.vehicle.lowestProjectBid = v.lowestProjectBid;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features, 'id');

  } 



  // loaduser() {
  //   this.userService.getUser(+this.route.snapshot.params["id"]).subscribe(
  //     (user: User) => {
  //       this.user = user;
  //     },
  //     error => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }


  onMakeChange() {
    this.populateModels();

    delete this.vehicle.modelId;
  }

  private populateModels() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];


  }

  onFeatureToggle(featureId, $event) {
    if ($event.target.checked)
      this.vehicle.features.push(featureId);
    else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }




  submit() {

    if(this.vehicle.lowestProjectBid >= this.vehicle.projectBudget )
        throw new Error("Your Bid cannot be higher than the current bid");

    this.vehicle.createdByUserId = (this.vehicle.id) ? this.vehicle.createdByUserId : this.authService.currentUser.id;

    var result$ = (this.vehicle.id) ? this.vehicleService.update(this.vehicle) : this.vehicleService.create(this.vehicle); 
    result$.subscribe(vehicle => {
      this.router.navigate(['/vehicles/', vehicle.id])
    });
  }
}