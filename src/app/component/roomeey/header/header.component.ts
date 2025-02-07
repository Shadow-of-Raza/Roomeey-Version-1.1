import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Constructor 

  constructor(private renderer: Renderer2,
    private dataService: DataService,
    private router: Router
  ) {}

  // Variable field 

  
  list_your_properties: boolean = true; // Enable or disable list_your_properties button
  owner_dashboard: boolean = false; // Enable or disable owner_dashboard button
  

  //==========================================================================//
  //                      Your component specific Code                        //
  //==========================================================================//

  ngOnInit(): void {
    // Initialize event listeners once the component is loaded
    this.initSearchBoxListeners();
    this.sortedNames = this.names.sort();
  }


  //==========================================================================//
  //       Header Search & Autocomplete Suggestions On Input Field            //
  //==========================================================================//

  names: string[] = [
   "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", 
		"Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", 
		"Visakhapatnam", "Indore", "Thane", "Bhopal", "Patna", "Vadodara", 
		"Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", 
		"Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", 
		"Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad (Prayagraj)", 
		"Howrah", "Gwalior", "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", 
		"Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", 
		"Hubballi-Dharwad", "Bareilly", "Tiruchirappalli", "Moradabad", "Mysore", 
		"Tiruppur", "Gurgaon", "Aligarh", "Jalandhar", "Bhubaneswar", "Salem", 
		"Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", 
		"Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", 
		"Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", 
		"Rourkela", "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", 
		"Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Jammu", "Sangli", 
		"Mangalore", "Erode", "Belgaum", "Kurnool", "Ambattur", "Udaipur", 
		"Pimpri-Chinchwad", "Bilaspur", "Mathura", "Karimnagar"
  ];
  sortedNames: string[] = [];
  currentFocus: number = -1;

  @ViewChild('inputField', { static: true }) inputField!: ElementRef;
  @ViewChild('listContainer', { static: true }) listContainer!: ElementRef;

  


// Search box toggle 
  initSearchBoxListeners() {
    const searchBoxOuter = document.querySelector('.search-box-outer');
    const closeSearch = document.querySelector('.close-search');

    if (searchBoxOuter) {
      this.renderer.listen(searchBoxOuter, 'click', () => {
        this.renderer.addClass(document.body, 'search-active');
      });
    }

    if (closeSearch) {
      this.renderer.listen(closeSearch, 'click', () => {
        this.renderer.removeClass(document.body, 'search-active');
      });
    }
  }

  onInputChange(event: any) {
    const inputValue = this.inputField.nativeElement.value;
    this.removeElements();

    if (!inputValue) return;

    for (let name of this.sortedNames) {
      if (name.toLowerCase().startsWith(inputValue.toLowerCase())) {
        const listItem = this.renderer.createElement('li');
        this.renderer.addClass(listItem, 'list-items');
        this.renderer.setStyle(listItem, 'cursor', 'pointer');

        const highlightedText = `<b>${name.substr(0, inputValue.length)}</b>${name.substr(inputValue.length)}`;
        listItem.innerHTML = highlightedText;

        // Add click event to set the selected name
        this.renderer.listen(listItem, 'click', () => this.displayNames(name));

        this.renderer.appendChild(this.listContainer.nativeElement, listItem);
      }
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const items = this.listContainer.nativeElement.querySelectorAll('.list-items');

    if (event.key === 'ArrowDown') {
      this.currentFocus++;
      this.addActive(items);
    } else if (event.key === 'ArrowUp') {
      this.currentFocus--;
      this.addActive(items);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (this.currentFocus > -1 && items[this.currentFocus]) {
        items[this.currentFocus].click();
      }
    }
  }

  displayNames(value: string) {
    this.inputField.nativeElement.value = value;
    this.removeElements();
    this.currentFocus = -1;
  }

  removeElements() {
    const items = this.listContainer.nativeElement.querySelectorAll('.list-items');
    
    // Specify the type of 'item' as 'Element'
    items.forEach((item: Element) => item.remove());
  
    this.currentFocus = -1;
  }

  addActive(items: NodeListOf<Element>) {
    if (!items.length) return;
  
    this.removeActive(items);
  
    if (this.currentFocus >= items.length) this.currentFocus = 0;
    if (this.currentFocus < 0) this.currentFocus = items.length - 1;
  
    this.renderer.addClass(items[this.currentFocus], 'autocomplete-active');
  
    // Cast 'Element' to 'HTMLElement' to access 'innerText'
    this.inputField.nativeElement.value = (items[this.currentFocus] as HTMLElement).innerText;
  }

  removeActive(items: NodeListOf<Element>) {
    items.forEach(item => this.renderer.removeClass(item, 'autocomplete-active'));
  }

  //==========================================================================//
  //                              Profile  dropdown                           //
  //==========================================================================//

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }






 
}
 



