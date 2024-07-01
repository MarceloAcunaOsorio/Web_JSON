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
   
 /**
  * variable para gusradar los datos del Json
  */
  productos: any;
 
/**
 * 
 * @param jsonService 
 * importacion del servicio en el constructor para poder usar sus elementos
 */
   constructor(private jsonService: JsonService){}

   /**
    * implementacionde del hgOninit
    */
   ngOnInit(): void {
       this.jsonService.getJsonData().subscribe(data =>{
        this.productos = data;
       });
   }

}



