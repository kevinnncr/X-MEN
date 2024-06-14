import { DateField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const SceneShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>ID</Title>
            <TextField value={record?.id} />
            <Title level={5}>Description</Title>
            <TextField value={record?.description} />
            <Title level={5}>Budget</Title>
            <TextField value={record?.budget} />
            <Title level={5}>Minutes</Title>
            <TextField value={record?.minutes} />
            <Title level={5}>Film ID</Title>
            <TextField value={record?.film} />
        </Show>
    );
};
