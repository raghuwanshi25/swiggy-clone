import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";

it("should render Header component and have button inside it", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logbutton = screen.getByRole("button");
  expect(logbutton).toBeInTheDocument();
});
it("should render Header component and have Cart inside it",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>)
      const cart =screen.getByText(/Cart/)
      expect(cart).toBeInTheDocument()
})
it("should render Header component and have Cart inside it",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>)
      
       const loginButton = screen.getByRole("button", { name: "Login" });

       fireEvent.click(loginButton);
     
       const logoutButton = screen.getByRole("button", { name: "Logout" });
     
       expect(logoutButton).toBeInTheDocument();
})
