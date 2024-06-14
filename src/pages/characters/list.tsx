import {
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    useTable,
    TextField,
} from "@refinedev/antd";
import { Space, Table } from "antd";

interface Character {
    id: number;
    description: string;
    cost: number;
    stock: number;
    scene_id: number;
}

export const CharacterList = () => {
    const { tableProps } = useTable<Character>();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="fullname" title="Name" />
                <Table.Column dataIndex="description" title="Description" />
                <Table.Column dataIndex="cost" title="Cost" />
                <Table.Column dataIndex="stock" title="Stock" />
                <Table.Column dataIndex={["scene", "id"]} title="Scene ID" render={(value)=>value || "N/A"}/>
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: Character) => (
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
