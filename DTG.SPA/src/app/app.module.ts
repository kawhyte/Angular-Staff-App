import { BidService } from './_services/bid.service';
import { PhotoService } from './_services/photo.service';
import { VehicleService } from './_services/vehicle.service';
import { ErrorInterceptor } from "./_services/error.interceptor";
import { MemberMessagesComponent } from "./members/member-messages/member-messages.component";
import { ListsResolver } from "./_resolvers/lists.resolver";
import { PhotoEditorComponent } from "./members/photo-editor/photo-editor.component";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { NgxGalleryModule } from "ngx-gallery";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberCardComponent } from "./members/member-card/member-card.component";
import { AuthGuard } from "./_guards/auth.guard";
import { appRoutes } from "./routes";
import { AlertifyService } from "./_services/alertify.service";
import { AuthService } from "./_services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { BsDropdownModule, TabsModule, ButtonsModule, PaginationModule } from "ngx-bootstrap";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListComponent } from "./list/list.component";
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from "@angular/router";
import { UserService } from "./_services/User.service";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guards";
import { FileUploadModule } from "ng2-file-upload";
//import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TimeAgoPipe } from  "time-ago-pipe"
//import { PaginationModule } from "ngx-bootstrap/pagination/pagination.module";
import { MessagesResolver } from "./_resolvers/message.resolver";
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MainmanagerComponent } from "./mainmanager/mainmanager.component";
import { SignInDialogComponent } from "./sign-in-dialog/sign-in-dialog.component";
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TimeAgoPipe,
    MemberMessagesComponent,
    MainmanagerComponent,
    SignInDialogComponent,
    RegisterDialogComponent,
    VehicleFormComponent,
    VehicleListComponent,
    PaginationsComponent,
    ViewVehicleComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    //BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    FlexLayoutModule,

    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000']
      }
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges,
    ListsResolver,
    MessagesResolver,
    ErrorInterceptor,
    VehicleService,
    PhotoService,
    BidService
  ],
  bootstrap: [AppComponent],

  entryComponents: [
    SignInDialogComponent, RegisterDialogComponent
  ]
})
export class AppModule {}
