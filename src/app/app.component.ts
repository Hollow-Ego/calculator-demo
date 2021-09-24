import { Component, OnInit } from '@angular/core';
import { CalcResult } from './results.model';
import { MathService } from './service/math.service';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Super cool calculator';
  isLoading: boolean = false;
  calcHistory: string[] = [];
  key = 'calc-history';
  myToDoList: string[] = [];

  obj: CalcResult = { calculation: '', result: '' };

  constructor(
    private mathService: MathService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    const loadedHistory: string = this.storage.getAllRecords(this.key);
    this.calcHistory = JSON.parse(loadedHistory);
    this.isLoading = false;
    this.title = 'I was initialized';
  }

  calcResult = '';
  numbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['+', '-', '0'],
    ['*', '/'],
  ];

  appendValue(value: string) {
    this.calcResult += value;
  }

  calculateResult() {
    this.calcHistory = [...this.calcHistory, this.calcResult];
    this.storage.updateStorage(this.key, this.calcHistory);
    this.calcResult = this.mathService.getResult(this.calcResult);
  }
}
