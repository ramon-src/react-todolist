import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Tasks from "./tasks";

describe("Tasks", () => {
  it("não deve mostrar nenhuma tarefa", () => {
    const props = {
      tasks: []
    };
    const { container } = render(<Tasks {...props} />);
    expect(container.querySelector(".tasks").children.length).toBe(0);
  });

  it("deve mostrar tarefas", () => {
    const props = {
      tasks: [
        {
          name: "",
          type: "",
          day: "",
          time: "",
          createdAt: ""
        }
      ]
    };
    const { container } = render(<Tasks {...props} />);
    expect(container.querySelector(".tasks").children.length).toBe(1);
  });

  it("deve filtrar tarefas", () => {
    const props = {
      tasks: [
        {
          name: "joao",
          type: "",
          day: "",
          time: "",
          createdAt: ""
        },
        {
          name: "joao",
          type: "",
          day: "",
          time: "",
          createdAt: ""
        },
        {
          name: "rodrigo",
          type: "",
          day: "",
          time: "",
          createdAt: ""
        }
      ]
    };
    const { getByPlaceholderText, container } = render(<Tasks {...props} />);
    const filter = getByPlaceholderText("Search for a task");

    userEvent.type(filter, "joao");

    expect(container.querySelector(".tasks").children.length).toBe(2);
  });

  it("deve mostrar o botão delete all quando houver ao menos um item na lista", () => {});
});
