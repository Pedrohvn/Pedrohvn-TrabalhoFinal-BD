import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  @Input() btnRegister: string = "Registar"

  registerForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      passconfirmation: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.registerForm.get('email')!
  }

  get fullName() {
    return this.registerForm.get('fullName')!
  }
  
  get passconfirmation() {
    return this.registerForm.get('passconfirmation')!
  }

  get password() {
    return this.registerForm.get('password')!
  }

  submit(){
    console.log("enviou formulario");
    
  }

}
