import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspeceCreateComponent } from './components/espece-create/espece-create.component';
import { EspeceListComponent } from './components/espece-list/espece-list.component';
import { EspeceClientComponent } from './components/espece-client/espece-client.component';

import { EspeceEditComponent } from './components/espece-edit/espece-edit.component';

import { CategorieCreateComponent } from './components/categorie-create/categorie-create.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-espece' },
  { path: 'create-espece', component: EspeceCreateComponent },
  { path: 'edit-espece/:id', component: EspeceEditComponent },
  { path: 'especes-list', component: EspeceListComponent },
  { path: 'especes-list-client', component: EspeceClientComponent },

  { path: '', pathMatch: 'full', redirectTo: 'create-categorie' },
  { path: 'create-categorie', component: CategorieCreateComponent },
  { path: 'edit-categorie/:id', component: CategorieEditComponent },
  { path: 'categories-list', component: CategorieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
