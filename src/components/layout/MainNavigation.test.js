import { render, screen } from "@testing-library/react";
import MainNavigation from "./MainNavigation";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
global.window = { location: { pathname: null } };

describe("Main Navigation Bar", () => {
    test("When clicked All Users redirects to the All Users page", () => {
        //Arrange
        render(
            <Router>
            <MainNavigation />
            </Router>
        );

        //Act
        const linkToNewUserForm = screen.getByText(/All Users/i);
        userEvent.click(linkToNewUserForm);
        //Assert

        expect(global.window.location.pathname).toEqual("/ReactUsersApp");
        });
    test("When clicked Add New User redirects to the New user form", () => {
        //Arrange
        render(
        <Router>
            <MainNavigation />
        </Router>
        );

        //Act
        const linkToNewUserForm = screen.getByText(/Add New User/i);
        userEvent.click(linkToNewUserForm);
        //Assert

        expect(global.window.location.pathname).toEqual("/ReactUsersApp/new-user");
    });
    test("Nav bar has Two Main Nav Links: All Users and Add New Users", () => {
        //Arrange
        render(
        <Router>
            <MainNavigation />
        </Router>
        );

        //Act

        //Assert
        const allUsersLink = screen.getByText(/All Users/i);
        const newUserLink = screen.getByText(/Add New User/i);

        expect(allUsersLink && newUserLink).toBeInTheDocument();
    });
});
