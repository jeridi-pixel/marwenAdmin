import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css'],
})

export class CategorieCreateComponent implements OnInit {
  submitted = false;
  categorieForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.categorieForm = this.fb.group({
      libelle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isActive: ['', [Validators.required]]
    });
  }



  // Getter to access form control
  get myForm() {
    return this.categorieForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.categorieForm.valid) {
      console.log('probleme')
      return false;
    } else {
      return this.apiService.createCategorie(this.categorieForm.value).subscribe({
        complete: () => {
          console.log('Categorie successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/categories-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
