import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-espece-list',
  templateUrl: './espece-list.component.html',
  styleUrls: ['./espece-list.component.css'],
})

export class EspeceListComponent implements OnInit {
  Espece: any = [];

  constructor(private apiService: ApiService) {
    this.readEspece();
  }

  ngOnInit() {}

  readEspece() {
    this.apiService.getEspeces().subscribe((data) => {
      this.Espece = data;
    });
  }

  removeEspece(Espece, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteEspece(Espece._id).subscribe((data) => {
        this.Espece.splice(index, 1);
      });
    }
  }
}
