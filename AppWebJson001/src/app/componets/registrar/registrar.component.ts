import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordStateMatcher, crossPasswordMatchingValidatior, customPasswordValidator } from './register-custom-Validators';
import { LocalStorageService } from 'src/app/storage/local-storage.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  passwordStateMatcher = new PasswordStateMatcher();
  miFormulario!: FormGroup;
  constructor(private fb: FormBuilder, private _LocalStorageService: LocalStorageService) { }


  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      password1: ['', [customPasswordValidator, Validators.required, Validators.minLength(6), Validators.maxLength(18)]],
      password2: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]],
      fecha_nac: ['', [Validators.required]],
      Direccion: ['']
    }, 
    {validators: crossPasswordMatchingValidatior})
  }

/*

  submitForm() {
    if (this.miFormulario.valid) {
      console.log("Nombre: " + this.miFormulario.get('nombre')!.value);
      console.log("Usuario: " + this.miFormulario.get('usuario')!.value);
      console.log("Email: " + this.miFormulario.get('correo')!.value);
      console.log("Fecha Nacimiento: " + this.miFormulario.get('fecha_nac')!.value);
      console.log("Direccion: " + this.miFormulario.get('Direccion')!.value);
    }
  }
*/



formDataInStorage?: IForm;

clicSend(): void{
  this._LocalStorageService.setItem('form',this.miFormulario.value);
  const formStorage = this._LocalStorageService.getItem<IForm>('form');

}

}


interface IForm{
  nombre:'' ,
  usuario:'',
  correo:'',
  password1:'',
  password2:'',
  fecha_nac:'1900-01-10',
  Direccion: ''
}
