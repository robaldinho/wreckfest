import { action } from 'satcheljs';
import { Car, Race } from '../store/BookStore';

export let addCar = action('addCar', (name: string, perf: number) => ({ name, perf }));
export let addRace = action('addRace', (race: Race) => ({ race }));
export let removeBookFromCart = action('removeBookFromCart', (car: Car) => ({ car }));
export let _removeBookFromCart = action('_removeBookFromCart', (car: Car) => ({ car }));
export let selectBookInCart = action('selectBookInCart', (bookId: string | null) => ({ bookId }));
export let buy = action('buy');
export let beginBuying = action('beginBuying');
export let finishBuying = action('finishBuying');
