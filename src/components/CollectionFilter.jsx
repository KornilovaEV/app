import { useState } from 'react';
import { Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';

const CollectionFilter = ({postQuery, latest, setSearchParams}) => {
    const [search, setSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};

        if (query.length) params.post = query;
        if (isLatest) params.latest = true;

        setSearchParams(params);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
            <label style={{ padding: '0 1rem' }}>
            <Checkbox
            onChange={e => setChecked(e.target.checked)}
            name="latest" 
            checked={checked}
            style={{
                color: pink[200],
                '&.MuiChecked': {
                color: pink[200],
                },
            }}
            />New only
            </label>
            <input type="submit" value="Search" />
        </form>
    );
};

export { CollectionFilter };