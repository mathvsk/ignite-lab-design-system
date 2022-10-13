import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: "Lorem Ipslum",
        size: "md",
    },
    argTypes: {
        size: {
            options: ["sm" , "md", "lg"],
            control: {
                type:"inline-radio",
            }
        }
    }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: { 
        size: "sm",
    }
}
export const Large: StoryObj<TextProps> = {
    args: { 
        size: "lg",
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args: { 
        asChield: true,
        children: (
            <h1>Testando</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChield: {
            table: {
                disable: true,
            }
        }
    }
}