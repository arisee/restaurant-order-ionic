import {Component} from "@angular/core";
import {NavController, AlertController} from "ionic-angular";
import {HomePage} from "../home/home.component";
import {USERS} from "../shared/mock-user";
import {User} from "../shared/user.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginPage {
  user: User;
  loginForm: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: ['',Validators.compose([Validators.pattern('[0-9a-zA-Z]*'),Validators.required])],
      password: ['',Validators.compose([Validators.pattern('[0-9a-zA-Z]*'),Validators.required])]
    })
  }

  login() {
    let users = USERS;
    if (this.loginForm.value.username != null && this.loginForm.value.password != null) {
      for (let i = 0; i < users.length; i++) {
        if (this.loginForm.value.username == users[i].username && this.loginForm.value.password == users[i].password) {
          this.pushHome();
          this.user = new User();
          this.user = users[i];
          break;
        }
      }
    }
    if (this.user == null) {
      this.showAlert();
    }
  }

  pushHome() {
    this.navCtrl.push(HomePage, {
      'user': this.user
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Lỗi!',
      subTitle: 'Tài khoản hoặc mật khẩu không đúng',
      buttons: ['OK']
    });
    alert.present();
  }
}
