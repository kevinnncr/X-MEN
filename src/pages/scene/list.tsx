import {
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    useTable,
    TextField,
} from "@refinedev/antd";
import { Space, Table } from "antd";

interface Scene {
    id: number;
    description: string;
    budget: number;
    minutes: number;
    film_id: number;
}

export const SceneList = () => {
    const { tableProps } = useTable<Scene>();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="description" title="Description" />
                <Table.Column dataIndex="budget" title="Budget" />
                <Table.Column dataIndex="minutes" title="Minutes" />

                <Table.Column
                    dataIndex={["film", "id"]}
                    title="Film ID"
                    render={(value) => value || "N/A"}
                />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: Scene) => (
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
