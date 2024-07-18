// eslint-disable-next-line no-unused-vars
import React from "react";
import {describe, test, expect} from "@jest/globals";
import {render, queryByAttribute} from "@testing-library/react";
import "@testing-library/jest-dom";
import LogoMate from "./LogoMate";

const getById = queryByAttribute.bind(null, "id");

describe("Componente LogoMate", () => {
  test("Renderiza la imagen de la guarda", () => {
    const screen = render(<LogoMate />);
    const logoMateImg = getById(screen.container, "logoMateImg");

    expect(logoMateImg).toBeInTheDocument();
  });
});
