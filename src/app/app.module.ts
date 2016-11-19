import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyA_QDpE-62AlH23NvYGvLTFMzgpge99H3k",
  authDomain: "ng2-todolist.firebaseapp.com",
  databaseURL: "https://ng2-todolist.firebaseio.com",
  storageBucket: "ng2-todolist.appspot.com",
  messagingSenderId: "991892439957"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
