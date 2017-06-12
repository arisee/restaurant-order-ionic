import { Component } from "@angular/core";
import { AlertController, Events, NavController } from "ionic-angular";
import { HomePage } from "../home/home.component";
import { FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "../shared/login.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginPage {
  user: any;
  loginForm: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public formBuilder: FormBuilder,
              public loginService: LoginService,
              public events: Events) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.pattern('[0-9a-zA-Z]*'), Validators.required])],
      password: ['', Validators.compose([Validators.pattern('[0-9a-zA-Z]*'), Validators.required])]
    });
    console.log('constructor login');
  }

  login() {
    let body = {
      userName: this.loginForm.value.username,
      passWord: this.loginForm.value.password
    };
    this.loginService.login(body)
      .subscribe(user => {
        this.user = user;
        this.loginService.getUser(user);
        this.createUser(this.user);
        this.pushHome();
      }, error => {
        this.showAlert();
      });
  }

  createUser(user) {
    console.log('User created!')
    this.events.publish('user:created', user);
  }

  pushHome() {
    this.navCtrl.push(HomePage, {
      'user': this.user
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'Tài khoản hoặc mật khẩu không đúng',
      buttons: ['OK']
    });
    alert.present();
  }
}
