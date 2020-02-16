import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    constructor(private searchService: SearchService) { }
    ngOnInit(): void {
    }
    search(location: string): void {
        this.searchService.addLocation(location.trim())
    }
}