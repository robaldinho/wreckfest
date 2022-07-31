import { mutator } from 'satcheljs';
import selectCategory from '../actions/selectCategory';
import updateNewCarNameEditState from '../actions/updateNewCarNameEditState';
import updateNewCarPerfEditState from '../actions/updateNewCarPerfEditState';
import getStore from '../store/store';

mutator(selectCategory, msg => {
    getStore().selectedCategoryId = msg.id;
});

mutator(updateNewCarNameEditState, msg => {
    getStore().newCarEditState.name = msg.name;
});

mutator(updateNewCarPerfEditState, msg => {
    getStore().newCarEditState.perf = msg.perf;
});
