export interface BookStore {
    books: {
        [id: string]: Book;
    };
    categories: {
        [id: string]: Category;
    };
    tracks: Track[];
    newCars: Car[];
    selectedBookId: string | null;
    selectedCategoryId: string;
    cart: Cart;
    newCarEditState: NewCarEditState;
    newRaceEditState: Race;
    raceList: Race[];
    raceListJSON: string;
}

export interface Book {
    name: string;
    categoryId: string;
    description: string;
    price: number;
}

export interface Car {
    name: string;
    speedRating?: number;
    tune: Tune;
}

export interface Tune {
    suspension: Suspension;
    gearRatio: GearRatio;
    differential: Differential;
    brakeBalance: BrakeBalance;
}

export enum Suspension {
    Soft,
    SoftStandard,
    Standard,
    StandardStiff,
    StiffStandard,
}

export enum GearRatio {
    Short,
    ShortStandard,
    Standard,
    StandardLong,
    Long,
}

export enum Differential {
    Open,
    OpenLimited,
    Limited,
    LimitedLocked,
    Locked,
}

export enum BrakeBalance {
    Rear,
    RearMiddle,
    Middle,
    MiddleFront,
    Front,
}

export interface Race {
    track: Track;
    timeInMs?: string;
    numberOfLaps?: string;
    bestLapInMs?: string;
    car: Car;
    notes?: string;
    finishingPosition?: number;
    numberOfRacers?: number;
    isBestLapPr?: boolean;
    json?: string;
}

export interface Track {
    name: string;
}

export interface Category {
    name: string;
}

export interface Cart {
    books: {
        bookId: string;
        quantity: number;
    }[];
    selectedBookId: string | null;
    isBuying: boolean;
}

export interface NewCarEditState {
    name?: string;
    perf?: number;
}

export const sampleData: BookStore = {
    books: {
        '1': {
            name: 'Boiling Water',
            categoryId: '1',
            description:
                'A thrilling recipe book about how to perform one of the most important tasks in human history. Beautifully illustrated step by step instruction sets this book apart from all other boiling water recipe book.',
            price: 19.95,
        },
        '2': {
            name: 'Grilling: The One True Form of Cooking',
            categoryId: '1',
            description:
                'The definitive guide on grilling everything from pizza, cakes, and even a salad.',
            price: 39.95,
        },
        '3': {
            name: 'Ready Player One',
            categoryId: '2',
            description: 'A novel where a boy tries to impress a girl with his nerdiness.',
            price: 16.95,
        },
        '4': {
            name: 'Off to Be the Wizard',
            categoryId: '2',
            description: 'Another novel where a boy tries to impress a girl with his nerdiness.',
            price: 9.95,
        },
        '5': {
            name: 'A Wrinkle in Time',
            categoryId: '2',
            description: 'The Darkness Has You',
            price: 19.95,
        },
    },
    categories: {
        '1': {
            name: 'Cookbook',
        },
        '2': {
            name: 'Science Fiction',
        },
    },

    tracks: [
        {
            name: 'Fire Rock Raceway',
        },
        {
            name: 'Firwood Motocenter',
        },
    ],
    newCars: [
        {
            name: 'Bulldog',
            speedRating: 350,
            tune: {
                suspension: Suspension.Standard,
                gearRatio: GearRatio.Standard,
                differential: Differential.Limited,
                brakeBalance: BrakeBalance.Middle,
            },
        },
        {
            name: 'Super Venom',
            speedRating: 364,
            tune: {
                suspension: Suspension.Standard,
                gearRatio: GearRatio.Standard,
                differential: Differential.Limited,
                brakeBalance: BrakeBalance.Middle,
            },
        },
    ],
    selectedCategoryId: 'Bulldog',
    selectedBookId: '1',
    cart: {
        books: [],
        selectedBookId: null,
        isBuying: false,
    },
    newCarEditState: {
        name: '',
        perf: undefined,
    },
    newRaceEditState: {
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
    },
    raceList: [],
    raceListJSON: '',
};
// track: Track;
// timeInMs: number;
// bestLapInMs: number;
// car: Car;
// notes?: string;
// finishingPosition?: number;
// numberOfRacers?: number;
