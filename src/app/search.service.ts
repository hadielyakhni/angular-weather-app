import { Subject, Observable } from 'rxjs';

export class SearchService {
    private locations = new Subject<string>()
    addLocation(location: string) {
        this.locations.next(location)
    }
    getLocation(): Observable<string> {
        return this.locations.asObservable()
    }
}
