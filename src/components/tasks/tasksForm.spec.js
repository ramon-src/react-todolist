import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import TasksForm from "./tasksForm";

describe("TaskForm", () => {
  describe("Estado inicial do Form", () => {
    it("deve mostrar todos os campos ao iniciar form", () => {
      const props = {
        task: {
          name: "",
          type: "",
          day: "",
          time: "",
          createdAt: ""
        }
      };
      const { getByTestId, getByPlaceholderText } = render(
        <TasksForm {...props} />
      );

      expect(getByTestId("TaskValue")).toBeVisible();
      expect(getByTestId("TaskType")).toBeVisible();
      expect(getByPlaceholderText("Choose date")).toBeVisible();
      expect(getByTestId("TaskTime")).toBeVisible();
    });

    it("deve esconder modal ao iniciar o form", () => {});
  });

  describe("Contexto de envio do form", () => {
    it("deve mostrar modal e mensagem Fill in all the fields quando form estiver vazio", () => {
      const props = {
        task: {
          name: "",
          type: "",
          day: "",
          time: "",
          createdAt: ""
        }
      };
      const { getByTestId, getByText, getByPlaceholderText } = render(
        <TasksForm {...props} />
      );

      const button = getByText("Submit");
      userEvent.click(button);
      const modal = getByText("Fill in all the fields");
      expect(modal).toBeVisible();
    });
  });
});
