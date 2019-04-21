import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  addressForm = this.fb.group({
    cat1: [null, Validators.required],
    cat2: null,
    subject: null,
    date: null,
    count: null
  });

  hasUnitNumber = false;
  cat1s = [
    { name: 'cat1sub1', abbreviation: 'c1s1' },
    { name: 'cat1sub2', abbreviation: 'c1s2' }
  ];
  cat2s = [
    { name: 'cat2sub1', abbreviation: 'c2s1' },
    { name: 'cat2sub2', abbreviation: 'c2s2' }
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
