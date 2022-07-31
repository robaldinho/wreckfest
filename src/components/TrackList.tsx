import * as React from 'react';
import getStore from '../store/store';
import selectBook from '../actions/selectBook';
import { observer } from 'mobx-react';
import * as classnames from 'classnames/bind';
import { Track } from '../store/BookStore';

const cx = classnames.bind(require('./AppStyles.css'));

export default observer(function TrackList() {
    const store = getStore();
    const categoryId = store.selectedCategoryId;
    const bookIds = Object.keys(store.tracks).filter(bookId => store.tracks[Number(bookId)]);
    const selectedBookId = getStore().selectedBookId;

    return (
        <div className={cx('books')}>
            <h2>Fucking Tracks</h2>
            {store.tracks.map((track: Track) => (
                <div
                    onClick={() => selectBook(track.name)}
                    key={track.name}
                    className={cx({ selected: selectedBookId == track.name }, 'selectable')}>
                    {track.name}
                </div>
            ))}
        </div>
    );
});
