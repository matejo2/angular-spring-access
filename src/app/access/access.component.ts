import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})

export class AccessComponent implements OnInit {
  addResult: string;
  dataToPost: string;
  nameInput = 'sample Name';
  emailInput = 'sample@mail.com';
  private urlGet: string;
  outputData: any;
  private userData: {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  addData() {
      const urlToPost = `http://localhost:8080/add2?name=${this.nameInput}&email=${this.emailInput}`;
      const urlToAdd = 'http:localhost:8080/add'

      const parameter = JSON.stringify({id : 42 , name: this.nameInput, email: this.emailInput});
      try {
        console.log(`name: ${this.nameInput} email: ${this.emailInput}`);
        this.http.post(urlToAdd, parameter);
        console.log('successful! ');
      } catch (e) {
        console.log('an exception occured: ' + e);
      }

      /*
      $http.post(urlToPost, parameter).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
      */
  }

  getData() {
    this.urlGet = `http://localhost:8080/users`;


    this.http.get(this.urlGet)
      .subscribe(thisData => { console.log(thisData);} ); // this.outputData = thisData,
  }

  fun() {
    const host = 'http://localhost:8080/add?name=';
    // var url = host ;
    // http://localhost:8080/add?name=joelanda&email=joe@landa
  }

  postData($scope, $http) {
    $http({
      url: 'http://samedomain.com/GetPersons',
      method: 'POST',
      data: this.dataToPost,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success((data, status, headers, config) => {
      $scope.persons = data; })
      .error(
      (data, status, headers, config) => {
      $scope.status = status; }
      );

  }

  private log(input: string) {
    console.log(input);
  }
}
