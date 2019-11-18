import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Hello World';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://127.0.0.1:8080/helloWorld')
      .subscribe((data: { message: string }) => {
        this.title = data.message;
        console.log(data);
      }, this.error);

    const yunzhi = new Yunzhi();

    yunzhi.get('a')
      .subscribe(this.success, this.error);

    yunzhi.get('b')
      .subscribe(this.success, this.error);
  }

  success(data) {
    console.log('请求成功');
    console.log(data);
  }

  error(data) {
    console.log('请求失败');
    console.log(data);
  }
}

class Yunzhi {
  constructor() {
  }

  get(param: string): Observable<string> {
    const subject = new Subject<string>();
    setTimeout(() => {
      if (param === 'a') {
        subject.next('hello success');
      } else {
        subject.error('hello error');
      }
      subject.complete();
    }, 100);

    return subject;
  }
}
