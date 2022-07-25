import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-espece-client',
  templateUrl: './espece-client.component.html',
  styleUrls: ['./espece-client.component.css']
})
export class EspeceClientComponent implements OnInit {
  Espece: any = [];
  Categorie: any = [];

  constructor(
    private apiService: ApiService,
    ) {
    this.readEspece();

   }

  ngOnInit() {}
  readCategorieLibelle() {
    this.apiService.getCategories().subscribe((data) => {
      this.Categorie = data;
    });}


  readEspece() {
    this.apiService.getEspeces().subscribe((data) => {
      this.Espece = data;
    });
  }
}
