import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
    forecast: any[]
    location: string = 'Search for a location and check the weather !'
    constructor(
        private searchService: SearchService,
        private http: HttpClient
    ) {
        this.searchService.getLocation().pipe(
            debounceTime(500),
            distinctUntilChanged(),
        ).subscribe(async location => {
            if (location == '') {
                this.forecast = []
                this.location = 'Search for a location and check the weather !'
            }
            else {
                const mapboxURL: string = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiaGFkaXkxMyIsImEiOiJjazM3bzExeXkwMHIxM2JxcGlrbjFoZ3J0In0.1UUYMkfrs4RonnI5cwMuyA&limit=1`
                const coords = await this.http.get<any>(mapboxURL).toPromise()
                const [longitude, latitude] = coords.features[0].center
                const locName = coords.features[0].place_name
                const darkskyURL = `https://hadi-darksky-api-caller.herokuapp.com/weather/?latitude=${latitude}&longitude=${longitude}`
                const weather = await this.http.get<any>(darkskyURL).toPromise()
                this.forecast = weather.daily.data
                this.location = locName
            }
        })
    }
    ngOnInit(): void {
    }
}