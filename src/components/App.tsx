import * as React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'satcheljs';
import getStore from '../store/store';
import TrackList from './TrackList';
import Cart from './Cart';
import CarList from './CarList';
import Description from './Description';
import * as classnames from 'classnames/bind';
import updateNewCarNameEditState from '../actions/updateNewCarNameEditState';
import updateNewCarPerfEditState from '../actions/updateNewCarPerfEditState';
import { addCar } from '../actions/cart';
import NewRaceForm from './NewRaceForm';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem, IPivotStyles } from '@fluentui/react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

const className = classnames.bind(require('./AppStyles.css'));
const cx = classnames.bind(require('./AppStyles.css'));
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
};
const navStyles: Partial<INavStyles> = { root: { width: 300 }, linkText: { color: 'teal' } };

const pivotStyles: Partial<IPivotStyles> = { text: { color: 'teal' } };

export default observer(() => {
    const store = getStore();
    console.log(store);
    initializeIcons();

    function handleSubmit(event: any) {
        addCar(store.newCarEditState.name!, store.newCarEditState.perf!);
        event.preventDefault();
    }
    function handleNameChange(event: any) {
        updateNewCarNameEditState(event.target.value);
    }
    function handlePerfChange(event: any) {
        updateNewCarPerfEditState(Number(event.target.value));
    }

    return (
        <div>
            <div className="title">FUCKFEST</div>
            <div style={{ display: 'flex' }}>
                <Pivot
                    className="nav"
                    styles={pivotStyles}
                    aria-label="Large Link Size Pivot Example"
                    linkSize="large"
                    defaultSelectedKey="races">
                    <PivotItem className="label" headerText="Cars" itemIcon="Car" itemKey="car">
                        <CarList />
                        <div style={{ display: 'flex', padding: '50px 0 0 0' }}>
                            <form onSubmit={handleSubmit} style={{ display: 'block' }}>
                                {'Add New Car'}
                                <div style={{ padding: '20px 0' }}>
                                    <label>
                                        <input
                                            type="text"
                                            placeholder="Car Name"
                                            value={store.newCarEditState.name}
                                            onChange={handleNameChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="number"
                                            placeholder="Performance rating"
                                            value={store.newCarEditState.perf ?? ''}
                                            onChange={handlePerfChange}
                                        />
                                    </label>
                                </div>
                                <div className={cx('img')}>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </PivotItem>
                    <PivotItem headerText="Tracks" itemIcon="Sprint" itemKey="tracks">
                        <TrackList />
                    </PivotItem>
                    <PivotItem headerText="Races" itemIcon="Trophy2" itemKey="races">
                        <div style={{ display: 'flex' }}>
                            <Description />
                            <NewRaceForm />
                        </div>
                    </PivotItem>
                </Pivot>
            </div>
        </div>
    );
});
