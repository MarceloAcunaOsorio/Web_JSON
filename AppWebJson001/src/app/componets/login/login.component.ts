import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  miFormularioLogin!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormularioLogin = this.fb.group({
      usuario : ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  submitForm() {
    if (this.miFormularioLogin.valid) {
      console.log("usuario: " + this.miFormularioLogin.get('usuario')!.value);
      console.log("password: " + this.miFormularioLogin.get('password')!.value);
    }
  }


}
