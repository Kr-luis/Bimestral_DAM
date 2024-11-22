import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.module';
import { AngularFireModule } from '@angular/fire/compat';  
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  
import { IonicModule } from '@ionic/angular'; 
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([]),  // Agrega RouterModule con la configuración de rutas
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
