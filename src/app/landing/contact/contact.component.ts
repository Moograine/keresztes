import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact = this.formBuilder.group({
    name: [''],
    email: [''],
    description: ['']
  })
  proposal = this.formBuilder.group({
    name: [''],
    email: [''],
    description: [''],
    file: [''],
    period: [''],
    budget: ['']
  })
  isContact = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  switchForm(): void {
    this.isContact = !this.isContact;
  }

  attachFile(): void {
    alert('Attach any file');
  }

  submit(): void {
    this.isContact ?
    console.log(this.contact.value) : console.log(this.proposal.value);
  }

}
