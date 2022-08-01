import { mutator } from 'satcheljs';
import getStore from '../../store/store';
import { addCar, addRace, _removeBookFromCart, finishBuying } from '../../actions/cart';
import {
    updateNewRaceTrackName,
    updateNewRaceTotalTime,
    updateNewRaceBestLap,
    updateNewRaceCar,
    updateNewRaceNumberOfLaps,
} from '../../actions/newRaceActions';
import { BrakeBalance, Car, Differential, GearRatio, Suspension } from '../../store/BookStore';

function findBookInCart(name: string) {
    const store = getStore();
    let foundIndex = -1;
    for (let index = 0; index < store.newCars.length; index++) {
        let item = store.newCars[index];
        if (item.name == name) {
            foundIndex = index;
            break;
        }
    }
    return foundIndex;
}

mutator(addCar, msg => {
    const store = getStore();
    let foundIndex = findBookInCart(msg.name);
    let car: Car = {
        name: msg.name,
        speedRating: msg.perf,
        tune: {
            suspension: Suspension.Standard,
            gearRatio: GearRatio.Standard,
            differential: Differential.Limited,
            brakeBalance: BrakeBalance.Middle,
        },
    };
    store.newCars.push(car);
    store.newCarEditState = {
        name: '',
        perf: undefined,
    };
    // if (foundIndex === null) {
    //     store.cart.books.push({
    //         bookId: msg.bookId,
    //         quantity: 1,
    //     });
    // } else {
    //     store.cart.books[foundIndex].quantity++;
    // }
});

mutator(updateNewRaceCar, msg => {
    const store = getStore();
    store.newRaceEditState.car = msg.car;
});

mutator(updateNewRaceNumberOfLaps, msg => {
    const store = getStore();
    store.newRaceEditState.numberOfLaps = msg.laps;
});

mutator(addRace, msg => {
    const store = getStore();
    store.raceList.push(msg.race);
    store.newRaceEditState = {
        track: {
            name: '',
        },
        timeInMs: undefined,
        bestLapInMs: undefined,
        car: {
            name: '',
            speedRating: undefined,
            tune: {
                suspension: Suspension.Standard,
                gearRatio: GearRatio.Standard,
                differential: Differential.Limited,
                brakeBalance: BrakeBalance.Middle,
            },
        },
    };
});

mutator(updateNewRaceTrackName, msg => {
    const store = getStore();
    store.newRaceEditState.track.name = msg.trackName;
});

mutator(updateNewRaceTotalTime, msg => {
    const store = getStore();
    store.newRaceEditState.timeInMs = msg.totalTime;
});

mutator(updateNewRaceBestLap, msg => {
    const store = getStore();
    store.newRaceEditState.bestLapInMs = msg.bestLap;
});

mutator(_removeBookFromCart, msg => {
    const store = getStore();
    //let index = store.newCars.indexOf(msg.car);
    let index = findBookInCart(msg.car.name!);

    store.newCars.splice(index, 1);

    // let foundIndex = findBookInCart(msg.bookId);

    // if (foundIndex !== null) {
    //     store.cart.books.splice(foundIndex, 1);
    // }
});

mutator(finishBuying, () => {
    const store = getStore();
    store.cart.books = [];
});
