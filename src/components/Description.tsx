import * as React from 'react';
import { observer } from 'mobx-react';
import getStore from '../store/store';
import getSelectedBookId from '../selectors/getSelectedBookId';
import { addCar } from '../actions/cart';
import * as classnames from 'classnames/bind';
import { PrimaryButton } from '@fluentui/react';
import NewRaceForm from './NewRaceForm';
import { Race } from '../store/BookStore';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function Description() {
    const store = getStore();
    const selectedBookId = getSelectedBookId();
    const book = selectedBookId !== null && store.tracks[Number(selectedBookId)];
    console.log('race');
    console.log(store.raceList);
    //let race = store.raceList[0];
    return (
        <div className={cx('description')}>
            <h2>Race List</h2>
            {store.raceList.map((race: Race) => {
                return (
                    <div>
                        <p>{'Track: ' + race.track.name} </p>
                        <p>
                            {'Laps: ' +
                                race.numberOfLaps +
                                ' Time: ' +
                                race.timeInMs +
                                '   Best Lap: ' +
                                race.bestLapInMs}{' '}
                        </p>
                        <p>{'Car: ' + race.car.name + ' ' + race.car.speedRating} </p>
                        <p>
                            {'_________________________________________________________________'}{' '}
                        </p>
                    </div>
                );
            })}
            <NewRaceForm />
        </div>
    );
});
