import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export const FilmCreate = () => {
    const { formProps, saveButtonProps } = useForm({});

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Title"}
                    name={["title"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Director"}
                    name={["director"]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Duration (minutes)"}
                    name={["duration"]}
                    rules={[
                        {
                            required: true,
                            type: "number",
                            min: 0,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
            </Form>
        </Create>
    );
};
