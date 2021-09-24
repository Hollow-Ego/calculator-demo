import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}

  getResult(stringValue: string) {
    return evaluate(stringValue);
  }
}
