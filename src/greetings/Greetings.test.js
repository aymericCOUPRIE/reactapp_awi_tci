import React from 'react'
import Greetings from "./Greetings";

import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";


let container = null

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})


afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})


it("Greetings, v1", () => {

    act(() => {
        render(<Greetings name={"Bob"}/>, container)
    })
    expect(container.textContent).toBe("Hello, Bob.")

    act(() => {
        render(<Greetings name={["Jill", "Jhon"]}/>, container)
    })
    expect(container.textContent).toBe("Hello, Jill and Jhon.")
})

