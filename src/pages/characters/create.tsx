import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export const CharacterCreate = () => {
    const { formProps, saveButtonProps } = useForm({});

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Name"}
                    name={["fullname"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />

                </Form.Item>
                <Form.Item
                    label={"Description"}
                    name={["description"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />

                </Form.Item>

                <Form.Item
                    label={"Cost"}
                    name={["cost"]}
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
                <Form.Item
                    label={"Stock"}
                    name={["stock"]}
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
                <Form.Item
                    label={"Scene ID"}
                    name={["scene"]}
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

