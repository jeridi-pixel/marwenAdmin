import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {CategorieListComponent} from '../categorie-list/categorie-list.component'
@Component({
  selector: 'app-espece-create',
  templateUrl: './espece-create.component.html',
  styleUrls: ['./espece-create.component.css'],
})

export class EspeceCreateComponent implements OnInit {

  Categorie: any = [];

  selectedFile: File = null;
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  submitted = false;
  especeForm: FormGroup;

  constructor(
    private http: HttpClient,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,

  ) {
    this.mainForm();
    this.readCategorieLibelle();
  }

  ngOnInit() {}

  readCategorieLibelle() {
    this.apiService.getCategories().subscribe((data) => {
      this.Categorie = data;
    });}


  mainForm() {
   
    this.especeForm = this.fb.group({
      categorie: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isChassable: ['', [Validators.required]],
      maniereProt: ['', [Validators.required]],
      methodeChasse: ['', [Validators.required]],
      image: [ '', [Validators.required]],
      lieu: ['', [Validators.required]],
      periodeReprod: ['', [Validators.required]],
      isActive: ['', [Validators.required]]
    });
  }

  updateProfile(e) {
    this.especeForm.get('categorie').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.especeForm.controls;
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('../../../../backend/images',fd)
    .subscribe( res => {
      console.log()
    }

    )
    this.submitted = true;
    if (!this.especeForm.valid) {
      console.log('probleme')
      return false;
    } else {
      this.especeForm.value.image=this.selectedFile.name
      return this.apiService.createEspece(this.especeForm.value).subscribe({
        complete: () => {
          console.log('Espece successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/especes-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
