import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { routes, navigatableComponents, authProviders} from "./app.routing";
import { AppComponent } from "./app.component";
import { UserService } from './models/user/user.service';

import * as platform from "platform";
declare var GMSServices: any;

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  providers: [
    ...authProviders,
     UserService
     ] ,
  bootstrap: [ AppComponent ]
})
export class AppModule {}