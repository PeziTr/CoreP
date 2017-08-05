import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AmimationDemoComponent } from './amimation-demo/amimation-demo.component';

const approuts = [
  { path : '',component:HomeComponent},
  { path : 'about' , component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AmimationDemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approuts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
