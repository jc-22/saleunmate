// eslint-disable-next-line no-unused-vars
import React from "react";
import {describe, test, expect} from "@jest/globals";
import {render, queryByAttribute} from "@testing-library/react";
import "@testing-library/jest-dom";
import Guarda from "./Guarda";

const getById = queryByAttribute.bind(null, "id");

describe("Componente Guarda", () => {
  test("Renderiza la imagen de la guarda", () => {
    const screen = render(<Guarda />);
    const guardaImg = getById(screen.container, "guardaImg");

    expect(guardaImg).toBeInTheDocument();
  });
});
