import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw"
import { SignIn } from "./SignIn";

export default {
    title: "Pages/Sign In",
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post("/sessions", (req, res, ctx) => {
                    return res(ctx.json({
                        message: "Login successful!"
                    }))
                })
            ],
        },
    },
} as Meta

export const Default: StoryObj = {
    play: async({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), "matheusviscki@gmail.com");
        userEvent.type(canvas.getByPlaceholderText("*******"), "123456789");

        userEvent.click(canvas.getByRole("button"));

        await waitFor(() => {
            expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
        })
    }
}
