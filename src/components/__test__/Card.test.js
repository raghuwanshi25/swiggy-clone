import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import mockData from "../../utils/mock.json"
import Card from "../Card"

it("should be in Card component",()=>{
    render(<Card resInfo={mockData} />)
    // Querying
    const name=screen.getByText("McDonald's")
    // Assertion
    expect(name).toBeInTheDocument()
})