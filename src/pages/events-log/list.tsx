// import { IResourceComponentsProps } from "@refinedev/core";
// import { MuiListInferencer } from "@refinedev/inferencer/mui";

// export const EventsLogList: React.FC<IResourceComponentsProps> = () => {
//   return <MuiListInferencer />;
// };
import React from "react";
import {
    useDataGrid,
    // EditButton,
    // ShowButton,
    // DeleteButton,
    List,
    DateField,
} from "@refinedev/mui";
import { DataGrid, GridColDef, GridColumns } from "@mui/x-data-grid";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";

export const EventsLogList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { dataGridProps } = useDataGrid();

    const columns = React.useMemo<GridColumns<any>>(
        () => [
            {
                field: "id",
                headerName: translate("events.fields.id"),
                type: "number",
                minWidth: 50,
            },
            {
                field: "title",
                flex: 1,
                headerName: translate("events.fields.title"),
                minWidth: 200,
            },
            {
                field: "date",
                flex: 1,
                headerName: translate("events.fields.date"),
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "type",
                flex: 1,
                headerName: translate("events.fields.type"),
                minWidth: 200,
            },
        ],
        [translate],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
