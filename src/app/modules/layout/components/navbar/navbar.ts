import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { CategoriesApiResponse } from '../../../../core/models/categories';
import { Loader } from '../loader/loader';

interface NavItem {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, Loader],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  baseUrl = environment.apiUrl;
  categoriesResource = httpResource<CategoriesApiResponse>(() => `${this.baseUrl}/categories`);
  currentDate = ""
  isMobileMenuOpen = false
  isSearchOpen = false
  searchQuery = ""
  openDropdown: string | null = null

  navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Categories",
      href: "#",
    },
    { label: "Contact", href: "/contact" },
    {
      label: "About",
      href: "#",
    },
  ]

  constructor() {
    this.updateDate()
  }

  updateDate(): void {
    const now = new Date()
    this.currentDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
    if (this.isMobileMenuOpen) {
      this.isSearchOpen = false
    }
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen
    if (this.isSearchOpen) {
      this.isMobileMenuOpen = false
      setTimeout(() => {
        const searchInput = document.getElementById("search-input")
        searchInput?.focus()
      }, 100)
    }
  }

  toggleDropdown(label: string, event: Event): void {
    event.preventDefault()
    console.log('Label', label);
    console.log('Event', event);
    this.openDropdown = this.openDropdown === label ? null : label
    debugger;
  }

  handleSearch(event: Event): void {
    event.preventDefault()
    console.log("Searching for:", this.searchQuery)
    // Implement your search logic here
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement
    if (!target.closest(".dropdown-container")) {
      this.openDropdown = null
    }
  }


  handleCategoryNavigation(categoryId: number) {
    console.log(categoryId);
  }

}
