import * as React from 'react';
import getStore from '../store/store';
import {
    updateNewRaceTrackName,
    updateNewRaceTotalTime,
    updateNewRaceBestLap,
    updateNewRaceCar,
    updateNewRaceNumberOfLaps,
} from '../actions/newRaceActions';
import { observer } from 'mobx-react';
import * as classnames from 'classnames/bind';
import { Car, Track } from '../store/BookStore';
import { TextField, ITextFieldStyles, MaskedTextField } from '@fluentui/react/lib/TextField';
import { IStackProps, PrimaryButton, Stack } from '@fluentui/react';
import { addRace } from '../actions/cart';
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};
const cx = classnames.bind(require('./AppStyles.css'));
import {
    Dropdown,
    DropdownMenuItemType,
    IDropdownStyles,
    IDropdownOption,
} from '@fluentui/react/lib/Dropdown';

export default observer(function NewRaceForm() {
    //export const NewRaceForm: React.FunctionComponent = () => {

    const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };

    const dropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 300 },
    };
    const store = getStore();

    let options: IDropdownOption[] = store.newCars.map(car => {
        return { key: car.name, text: car.name + ' ' + car.speedRating };
    });

    // const options: IDropdownOption[] = [
    //     { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    //     { key: 'apple', text: 'Apple' },
    //     { key: 'banana', text: 'Banana' },
    //     { key: 'orange', text: 'Orange', disabled: true },
    //     { key: 'grape', text: 'Grape' },
    //     { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    //     { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    //     { key: 'broccoli', text: 'Broccoli' },
    //     { key: 'carrot', text: 'Carrot' },
    //     { key: 'lettuce', text: 'Lettuce' },
    // ];

    console.log(store.newRaceEditState);
    //const [firstTextFieldValue, setFirstTextFieldValue] = React.useState('');
    function onChangeTrackName(
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string
    ) {
        //setFirstTextFieldValue(newValue || '');
        updateNewRaceTrackName(newValue || '');
    }

    function onChangeTotalRaceTime(
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string
    ) {
        //setFirstTextFieldValue(newValue || '');
        updateNewRaceTotalTime(newValue || '');
    }

    function onChangeNumberOfLaps(
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string
    ) {
        //setFirstTextFieldValue(newValue || '');
        updateNewRaceNumberOfLaps(newValue || '');
    }

    function onChangeBestLapTime(
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string
    ) {
        //setFirstTextFieldValue(newValue || '');
        updateNewRaceBestLap(newValue || '');
    }

    function onCarChange(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {}

    const onChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        console.log('onchange');

        for (let i = 0; i < store.newCars.length; i++) {
            let car = store.newCars[i];
            if (car.name == item?.key) {
                updateNewRaceCar(car);
            }
        }
    };

    return (
        <div className={cx('books')}>
            <Stack {...columnProps}>
                <TextField
                    label="Track Name"
                    value={store.newRaceEditState.track.name}
                    onChange={onChangeTrackName}
                    styles={textFieldStyles}
                />
                <MaskedTextField
                    label="Total time"
                    value={store.newRaceEditState.timeInMs}
                    mask="99:99:999"
                    title="A 7 digit number"
                    onChange={onChangeTotalRaceTime}
                />
                <MaskedTextField
                    label="Number of laps"
                    value={store.newRaceEditState.numberOfLaps}
                    mask="99"
                    title="A 2 digit number"
                    onChange={onChangeNumberOfLaps}
                />
                <MaskedTextField
                    label="Best lap"
                    value={store.newRaceEditState.bestLapInMs}
                    mask="99:99:999"
                    title="A 7 digit number"
                    onChange={onChangeBestLapTime}
                />
                <Dropdown
                    placeholder="Select car"
                    label="Car"
                    options={options}
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange={onChange}
                    styles={dropdownStyles}
                />

                <PrimaryButton onClick={() => addRace(store.newRaceEditState)}>
                    Add race
                </PrimaryButton>
            </Stack>
        </div>
    );
});
