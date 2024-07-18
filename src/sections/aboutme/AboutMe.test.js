// eslint-disable-next-line no-unused-vars
import React from "react";
import {describe, test, expect} from "@jest/globals";
import {render, queryByAttribute} from "@testing-library/react";
import AboutMe from "./AboutMe";
import "@testing-library/jest-dom";

const getById = queryByAttribute.bind(null, "id");

describe("Componente AboutMe", () => {
  test("Renderiza los iconos para contacto", () => {
    const screen = render(<AboutMe />);

    const linkedinIconButton = getById(screen.container, "linkedinIconButton");
    const githubIconButton = getById(screen.container, "githubIconButton");
    const instagramIconButton = getById(
      screen.container,
      "instagramIconButton"
    );
    const xIconButton = getById(screen.container, "xIconButton");
    const mailIconButton = getById(screen.container, "mailIconButton");
    const cafecitoIconButton = getById(screen.container, "cafecitoIconButton");

    const linkedinIcon = getById(screen.container, "linkedinIcon");
    const githubIcon = getById(screen.container, "githubIcon");
    const instagramIcon = getById(screen.container, "instagramIcon");
    const xIcon = getById(screen.container, "xIcon");
    const mailIcon = getById(screen.container, "mailIcon");

    expect(linkedinIconButton).toBeInTheDocument();
    expect(githubIconButton).toBeInTheDocument();
    expect(instagramIconButton).toBeInTheDocument();
    expect(xIconButton).toBeInTheDocument();
    expect(mailIconButton).toBeInTheDocument();
    expect(cafecitoIconButton).toBeInTheDocument();

    expect(linkedinIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(xIcon).toBeInTheDocument();
    expect(mailIcon).toBeInTheDocument();
  });
});
