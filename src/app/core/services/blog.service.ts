import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CategoriesApiResponse, SearchApiResponse, BlogApiResponse } from '../models/categories';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private baseUrl = environment.apiUrl; 

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any> {
        return this.http.get(`${this.baseUrl}/posts`);
    }

    getCategories(): Observable<CategoriesApiResponse> {
        return this.http.get<CategoriesApiResponse>(`${this.baseUrl}/categories`);
    }

    searchBlogs(query: string): Observable<SearchApiResponse> {
        return this.http.get<SearchApiResponse>(`${this.baseUrl}/blogs/search?query=${encodeURIComponent(query)}`);
    }

    getBlogById(id: number): Observable<BlogApiResponse> {
        return this.http.get<BlogApiResponse>(`${this.baseUrl}/blogs?id=${id}`);
    }
}