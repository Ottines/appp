import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourcesComponent } from './component/sources/sources/sources.component';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { ContactComponent } from './component/contact/contact/contact.component';
import { HomeComponent } from './component/home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppliComponent } from './component/app/appli/appli.component';

//Routing et liaison pour la navigation
const appRoutes : Routes = [
  { path: '', component: HomeComponent}, //localhost:4200
  { path: 'home', component:  HomeComponent},
  { path: 'application', component: AppliComponent},
  { path: 'sources', component: SourcesComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
