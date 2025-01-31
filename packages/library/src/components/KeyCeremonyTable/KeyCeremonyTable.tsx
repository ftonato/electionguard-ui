import { KeyCeremony } from '@electionguard-ui/api';
import { Box, Button, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import * as React from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { FormattedDateCell } from '../Cells';
import FilterToolbar from '../FilterToolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .bold-style--header': {
            marginLeft: -theme.spacing(0.25),
            fontSize: theme.typography.h6.fontSize,
            fontWeight: theme.typography.h6.fontWeight,
            '& .MuiDataGrid-columnSeparator': {
                opacity: `0 !important`,
            },
        },
    },
}));

export interface KeyCeremonyTableProps {
    data: KeyCeremony[];
}

const LinkCell = (): React.ReactElement => <Button color="primary">Join</Button>;

const columns = (intl: IntlShape): GridColDef[] => [
    { field: 'name', headerName: 'Name', width: 400, headerClassName: 'bold-style--header' },
    {
        field: 'numberOfGuardians',
        headerName: '# of Guardians',
        align: 'center',
        headerAlign: 'center',
        width: 250,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'quorum',
        headerName: 'Quorum',
        align: 'center',
        headerAlign: 'center',
        width: 150,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'dateCreated',
        headerName: 'Date Created',
        width: 250,
        renderCell: (params) => FormattedDateCell(params, intl),
        headerClassName: 'bold-style--header',
    },
    {
        field: 'id',
        headerName: ' ',
        align: 'right',
        width: 100,
        renderCell: LinkCell,
        headerClassName: 'bold-style--header',
    },
];

const KeyCeremonyTable: React.FC<KeyCeremonyTableProps> = ({ data }) => {
    const intl = useIntl();
    const classes = useStyles();
    return (
        <Box display="flex" minHeight="500px" height="100%" width="100%">
            <DataGrid
                className={classes.root}
                autoHeight
                rows={data}
                columns={columns(intl)}
                components={{
                    Toolbar: FilterToolbar,
                }}
                hideFooterPagination
            />
        </Box>
    );
};

export default KeyCeremonyTable;
