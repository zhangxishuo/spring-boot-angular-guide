import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  // 定义教师数组
  teachers = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const url = 'http://127.0.0.1:8080/teacher';

    /* 定义success方法，用于数据请求成功后回调 */
    const success = (response) => {
      console.log(response);

      /*注意：这样写是不正确的，因为this的作用域是本function，而不是本class*/
      this.teachers = response;
    };

    /* 定义error方法，用于数据请求失败时被调用 */
    const error = (response) => {
      console.log(response);
      console.error('请求出错');
    };

    /* 使用get方法请求url，请求一旦成功后，将调用传入success方法；如果请求失败，将调用error方法 */
    this.httpClient.get(url)
      .subscribe(success, error);
  }
}
