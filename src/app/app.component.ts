import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user = { uid: '' };
  newItem = {};
  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = { uid: '' };
      }
      this.items = this.af.database.list('/items/' + this.user.uid);
    });
  }

  loginWithGuest() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  loginWithGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    this.af.auth.logout();
  }

  add(item) {
    if (!item.text) return;
    this.items.push({ text: item.text, isDone: false });
    this.newItem = {};
  }

  update(item) {
    this.items.update(item.$key, { text: item.text });
  }

  toggle(item) {
    this.items.update(item.$key, { isDone: item.isDone });
  }

  delete(item) {
    this.items.remove(item.$key);
  }
}
