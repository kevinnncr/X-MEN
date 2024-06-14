import {
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    useTable,
    TextField,
} from "@refinedev/antd";
import { Space, Table } from "antd";

interface Film {
    id: number;
    title: string;
    director: string;
    duration: number;
}

export const FilmList = () => {
    const { tableProps } = useTable<Film>();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="title" title="Title" />
                <Table.Column dataIndex="director" title="Director" />
                <Table.Column dataIndex="duration" title="Duration (minutes)" />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: Film) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.id} />
                            <ShowButton hideText size="small" recordItemId={record.id} />
                            <DeleteButton hideText size="small" recordItemId={record.id} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
