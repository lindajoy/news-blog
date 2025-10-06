import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { CategoriesApiResponse } from '../../../../core/models/categories';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  baseUrl = environment.apiUrl;
  categoriesResource = httpResource<CategoriesApiResponse>(() => `${this.baseUrl}/categories`)

}
