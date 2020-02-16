import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
    @Input() summary: string
    @Input() maxTemp: number
    @Input() minTemp: number
    @Input() icon: string
    @Input() time: number
    dayName: string
    day: number
    month: number
    constructor() {

    }
    ngOnInit(): void {
        this.icon = `../../assets/${this.icon}.png`
        const a = new Date(this.time * 1000)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        this.dayName = days[a.getDay()]
        this.month = a.getMonth()
        this.day = a.getDate()
    }
}
