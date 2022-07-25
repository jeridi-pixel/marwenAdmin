import { Espece } from '../../model/espece';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-espece-edit',
  templateUrl: './espece-edit.component.html',
  styleUrls: ['./espece-edit.component.css'],
})

export class EspeceEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  especeData: Espece[];
  EspeceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEspece();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEspece(id);
    this.editForm = this.fb.group({
      description: ['', [Validators.required]],
      isChassable: ['', [Validators.required]],
      maniereProt: ['', [Validators.required]],
      methodeChasse: ['', [Validators.required]],
      image: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      periodeReprod: ['', [Validators.required]],
      isActive: ['', [Validators.required]] 
    });
  }

  // Choose options with select-dropdown


  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEspece(id) {
    this.apiService.getEspece(id).subscribe((data) => {
      this.editForm.setValue({
        description: data['description'],
        isChassable: data['isChassable'],
        maniereProt: data['maniereProt'],
        methodeChasse: data['methodeChasse'],
        image: data['image'],
        lieu: data['lieu'],
        periodeReprod: data['periodeReprod'],
        isActive: data['isActive']
      });
    });
  }

  updateEspece() {
    this.editForm = this.fb.group({
      description: ['', [Validators.required]],
      isChassable: ['', [Validators.required]],
      maniereProt: ['', [Validators.required]],
      methodeChasse: ['', [Validators.required]],
      image: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      periodeReprod: ['', [Validators.required]],
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
        this.apiService.updateEspece(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/especes-list');
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
