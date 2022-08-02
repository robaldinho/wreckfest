import { action } from 'satcheljs';
import { Car } from '../store/BookStore';

export let updateNewRaceTrackName = action('updateNewRaceTrackName', (trackName: string) => ({
    trackName,
}));
export let updateNewRaceTotalTime = action('updateNewRaceTotalTime', (totalTime: string) => ({
    totalTime,
}));
export let updateNewRaceNumberOfLaps = action('updateNewRaceNumberOfLaps', (laps: string) => ({
    laps,
}));
export let updateNewRaceBestLap = action('updateNewRaceBestLap', (bestLap: string) => ({
    bestLap,
}));
export let updateNewRaceCar = action('updateNewRaceCar', (car: Car) => ({ car }));
export let onLoadRaceList = action('onLoadRaceList', (races: string) => ({
    races,
}));

export let updateTrackJSON = action('updateTrackJSON', (json: string) => ({ json }));

// export let addCar = action('addCar', (name: string, perf: number) => ({ name, perf }));
// export let removeBookFromCart = action('removeBookFromCart', (car: Car) => ({ car }));
// export let _removeBookFromCart = action('_removeBookFromCart', (car: Car) => ({ car }));
// export let selectBookInCart = action('selectBookInCart', (bookId: string | null) => ({ bookId }));
// export let buy = action('buy');
// export let beginBuying = action('beginBuying');
// export let finishBuying = action('finishBuying');
