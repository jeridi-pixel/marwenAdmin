import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspeceCreateComponent } from './components/espece-create/espece-create.component';
import { EspeceEditComponent } from './components/espece-edit/espece-edit.component';
import { EspeceListComponent } from './components/espece-list/espece-list.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategorieCreateComponent } from './components/categorie-create/categorie-create.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';


import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EspeceClientComponent } from './components/espece-client/espece-client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EspeceCreateComponent,
    EspeceEditComponent,
    EspeceListComponent,
    CategorieCreateComponent,
    CategorieEditComponent,
    CategorieListComponent,
    MenuComponent,
    FooterComponent,
    SideBarComponent,
    EspeceClientComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, FooterComponent,NavbarComponent],
})
export class AppModule {}
