import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../services/json.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-aventura',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './aventura.component.html',
  styleUrl: './aventura.component.css',
  providers: [JsonService]
})
export class AventuraComponent  implements OnInit{
   productos: any[]=[];
   nombre: string = '';
   descripcion:string = '';
   precio: number | null = null;

   constructor(private jsonService: JsonService){}

   ngOnInit(): void {
       this.jsonService.getJsonData().subscribe(data =>{
        this.productos = data;
       });
   }
}
