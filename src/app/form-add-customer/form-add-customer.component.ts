import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from "../customers/interface";
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-form-add-customer',
  templateUrl: './form-add-customer.component.html',
  styleUrls: ['./form-add-customer.component.scss']
})
export class FormAddCustomerComponent implements OnInit {
  registerForm: FormGroup;
  customer: Customer;
  showAvatar: any;
  customers: Array<Customer> = [];
  Errors = {
    name: '',
    address: '',
    phone: '',
    avatar: ''
  };
  checkAutofocus:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      index: new FormControl('')
    });

  }
  onSubmit() {
    if (this.registerForm.valid) {
      if (this.registerForm.get('index').value === '') {
        this.customer = {
          name: this.registerForm.value.name,
          address: this.registerForm.value.address,
          phone: this.registerForm.value.phone,
          avatar: this.showAvatar
        }
        this.ngOnInit();
        this.showAvatar = '';
        this.Errors = {
          name: '',
          address: '',
          phone: '',
          avatar: ''
        };
        
        return this.customers.push(this.customer);
      } else {
        this.customers[this.registerForm.value.index] = {
          name: this.registerForm.value.name,
          address: this.registerForm.value.address,
          phone: this.registerForm.value.phone,
          avatar: this.showAvatar
        }
        this.ngOnInit();
        this.showAvatar = '';
        this.Errors = {
          name: '',
          address: '',
          phone: '',
          avatar: ''
        };

      }

    }
  }
  
  editCustomer(i) {
    this.registerForm.setValue({
      name: this.customers[i].name,
      address: this.customers[i].address,
      phone: this.customers[i].phone,
      avatar: '',
      index: i,
    });
    this.showAvatar = this.customers[i].avatar;
    this.registerForm.get('avatar').clearValidators();
    this.registerForm.get('avatar').updateValueAndValidity();
    this.checkAutofocus= true;
  }

  delCustomer(index) {
    return this.customers.splice(index, 1);
  }

  renderAvatar(event) {
    var file: File = event.target.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.showAvatar = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
