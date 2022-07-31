import * as React from 'react';
import { observer } from 'mobx-react';
import getStore from '../store/store';
import getSelectedBookId from '../selectors/getSelectedBookId';
import { addCar } from '../actions/cart';
import * as classnames from 'classnames/bind';
import { PrimaryButton } from '@fluentui/react';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function Description() {
    const store = getStore();
    const selectedBookId = getSelectedBookId();
    const book = selectedBookId !== null && store.tracks[Number(selectedBookId)];

    return (
        <div className={cx('description')}>
            {book && <h2>{book.name}</h2>}
            {'Personal Record: 0:55.758'}
            {selectedBookId && (
                <div>
                    <PrimaryButton onClick={() => addCar(selectedBookId!, 0)}>
                        Add race
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
});
