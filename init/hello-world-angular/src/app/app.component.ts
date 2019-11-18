import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://127.0.0.1:8080/helloWorld')
      .subscribe(this.success, this.error);
  }

  title = 'hello-world';

  success(data) {
    console.log('请求成功');
    console.log(data);
  }

  error(data) {
    console.log('请求失败');
    console.log(data);
  }
}
