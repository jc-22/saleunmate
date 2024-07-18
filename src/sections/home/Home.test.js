// eslint-disable-next-line no-unused-vars
import React from "react";
import {describe, test, expect} from "@jest/globals";
import {render, queryByAttribute, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

const getById = queryByAttribute.bind(null, "id");

describe("Componente Home", () => {
  test("Renderiza una frase", () => {
    const screen = render(<Home />);
    const phrase = getById(screen.container, "phrase");

    expect(phrase).toBeInTheDocument();
    expect(phrase).toBeTruthy();
  });

  test("Renderiza los botones", () => {
    const screen = render(<Home />);
    const leftIcon = getById(screen.container, "leftIcon");
    const rightIcon = getById(screen.container, "rightIcon");

    const leftIconButton = getById(screen.container, "leftIconButton");
    const rightIconButton = getById(screen.container, "rightIconButton");

    const randomButton = getById(screen.container, "randomButton");

    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();

    expect(leftIconButton).toBeInTheDocument();
    expect(rightIconButton).toBeInTheDocument();

    expect(randomButton).toBeInTheDocument();
  });

  test("Cambia el texto de phrase al presionar el boton atras", () => {
    const screen = render(<Home />);
    const phrase = getById(screen.container, "phrase");

    const initialText = phrase.textContent;

    const leftIconButton = getById(screen.container, "leftIconButton");

    fireEvent.click(leftIconButton);
    expect(phrase.textContent).not.toBe(initialText);
  });

  test("Cambia el texto de phrase al presionar el boton adelante", () => {
    const screen = render(<Home />);
    const phrase = getById(screen.container, "phrase");

    const initialText = phrase.textContent;

    const rightIconButton = getById(screen.container, "rightIconButton");

    fireEvent.click(rightIconButton);
    expect(phrase.textContent).not.toBe(initialText);
  });

  test("Cambia el texto de phrase al presionar el boton random", () => {
    const screen = render(<Home />);
    const phrase = getById(screen.container, "phrase");

    const initialText = phrase.textContent;

    const randomButton = getById(screen.container, "randomButton");

    fireEvent.click(randomButton);
    expect(phrase.textContent).not.toBe(initialText);
  });
});
