import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {firebaseConfig} from '../environments/firebase';
import {GenerateService} from './providers/generate/generate.service';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [GenerateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
