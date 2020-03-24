import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CssDemoComponent } from './css-demo/css-demo.component';
import { CssTestComponent } from './css-test/css-test.component';
import { MyServiceService } from './services/my-service.service';
import { MyServiceComponent } from './my-service/my-service.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CssDemoComponent,
    CssTestComponent,
    MyServiceComponent,
    ChildComponentComponent,
    ParentComponentComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
