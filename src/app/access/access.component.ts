import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  addData() {
      alert('hello schabo, mein babo');
      console.log('flsdöfkl');
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
}
