import { Categorie } from '../../model/categorie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css'],
})

export class CategorieEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  categorieData: Categorie[];
  CategorieProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateCategorie();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCategorie(id);
    this.editForm = this.fb.group({
      libelle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isActive: ['', [Validators.required]] 
    });
  }

  // Choose options with select-dropdown


  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getCategorie(id) {
    this.apiService.getCategorie(id).subscribe((data) => {
      this.editForm.setValue({
        libelle: data['libelle'],
        description: data['description'],
        isActive: data['isActive']
      });
    });
  }

  updateCategorie() {
    this.editForm = this.fb.group({
      libelle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isActive: ['', [Validators.required]] 
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateCategorie(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/categories-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
