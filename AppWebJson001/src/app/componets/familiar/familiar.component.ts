import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-familiar',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './familiar.component.html',
  styleUrl: './familiar.component.css',
  providers: [JsonService]
})
export class FamiliarComponent {
  
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
         this.productos.categoria =1;
        });
    }
}
