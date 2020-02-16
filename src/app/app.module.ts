import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SearchService } from './search.service';

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        WeatherListComponent,
        WeatherCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }
