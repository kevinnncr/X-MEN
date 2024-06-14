import { DateField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const CharacterShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>ID</Title>
            <TextField value={record?.id} />
            <Title level={5}>Name</Title>
            <TextField value={record?.fullname} />
            <Title level={5}>Description</Title>
            <TextField value={record?.description} />
            <Title level={5}>Cost</Title>
            <TextField value={record?.cost} />
            <Title level={5}>Stock</Title>
            <TextField value={record?.stock} />
            <Title level={5}>Scene ID</Title>
            <TextField value={record?.scene} />
        </Show>
    );
};
