import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {
  AbstractControl,
  EmailValidator,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { CommunicationsService } from '../../../assets/services/communications.service';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy {
  @ViewChild('dropdown') dropdown: ElementRef | undefined;
  @ViewChild('proposalBudget') proposalBudget: ElementRef | undefined;
  activeComponent = true;
  proposalOverflowTimeout = 0;
  status: 'loading' | 'sent' | '' = '';

  contact = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    email: ['', [Validators.required, this.validMail()]],
    description: ['', [Validators.required, Validators.minLength(15)]],
    file: [''],
    period: [''],
    budget: ['']
  })
  periodItems = [
    '3-6 months',
    '6-12 months',
    'more than 12 months',
    'to be discussed',
  ]
  isContact = true;
  allFiles: Array<File> = [];

  constructor(private formBuilder: FormBuilder, private communications: CommunicationsService) {
  }

  switchForm(isContact: boolean, wrapperHeight: number): void {
    this.isContact = isContact;
    document.body.style.setProperty('--fileWrapperHeight', `${(wrapperHeight - 48) * -1}px`);
    if (!this.isContact) {
      this.contact.get('period')?.setValidators(Validators.required);
      this.contact.get('budget')?.setValidators(Validators.required);
      this.proposalOverflowTimeout = window.setTimeout((): void => {
        this.proposalBudget?.nativeElement.classList.remove('overflow-hidden');
      }, 500)
    } else {
      this.contact.get('period')?.clearValidators();
      this.contact.get('budget')?.clearValidators();
      clearTimeout(this.proposalOverflowTimeout);
      this.proposalBudget?.nativeElement.classList.add('overflow-hidden');
    }
    this.contact.get('budget')?.updateValueAndValidity();
    this.contact.get('period')?.updateValueAndValidity();
  }

  selectPeriodItem(item: string): void {
    this.dropdown?.nativeElement.classList.toggle('d-none');
    setTimeout((): void => {
      this.dropdown?.nativeElement.classList.toggle('d-none');
    }, 100)
    this.dropdown?.nativeElement.classList.remove('phone-hover');
    this.contact.patchValue({
      period: item
    })
  }

  attachFile(file: FileList | null): void {
    setTimeout(() => {
      if (file && file[0]) {
        this.allFiles.push(file[0]);
      }
    }, 250)
  }

  removeFile(file: File) {
    this.allFiles = this.allFiles.filter((element: File) => {
      return element !== file;
    })
  }

  validMail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      return /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/.test(control.value) ? null : { invalidFormat: true };
    }
  }

  resetButtonAfterStatusChange(button: HTMLButtonElement): void {
    this.status = 'sent';
    button.classList.remove('opacity-75');
    button.classList.add('bg-green');
    this.contact.reset();
    this.allFiles = [];
    setTimeout((): void => {
      this.status = '';
      button.classList.remove('bg-green');
    }, 1000);
  }

  submit(button: HTMLButtonElement): void {
    if (this.isContact) {
      this.status = 'loading';
      button.classList.add('opacity-75');
      this.communications.reachOutWithContact(this.contact.value)
        .pipe(takeWhile(() => this.activeComponent))
        .subscribe((): void => {
          this.resetButtonAfterStatusChange(button);
        });
    } else { // TODO send correct format
      this.status = 'loading';
      button.classList.add('opacity-75');
      this.communications.reachOutWithProposal(this.contact.value)
        .pipe(takeWhile(() => this.activeComponent))
        .subscribe((): void => {
          this.resetButtonAfterStatusChange(button);
        });
    }
  }

  ngOnDestroy(): void {
    this.activeComponent = false;
  }
}
