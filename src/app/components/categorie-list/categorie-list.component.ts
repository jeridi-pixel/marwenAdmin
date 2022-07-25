import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css'],
})

export class CategorieListComponent implements OnInit {
  Categorie: any = [];

  constructor(private apiService: ApiService) {
    this.readCategorie();
  }

  ngOnInit() {}

  readCategorie() {
    this.apiService.getCategories().subscribe((data) => {
      this.Categorie = data;
    });
  }

  
  removeCategorie(Categorie, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteCategorie(Categorie._id).subscribe((data) => {
        this.Categorie.splice(index, 1);
      });
    }
  }
}
