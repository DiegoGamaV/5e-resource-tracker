import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ClassToolbar from "./ClassToolbar";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

function verifySelectedLevelOption(expectedSelectedIndex, levelOptions) {
  expect(levelOptions[expectedSelectedIndex - 1].selected).toBeTruthy();
  const nonSelectedOptions = levelOptions.filter(
    (element, index) => index !== expectedSelectedIndex - 1
  );
  nonSelectedOptions.forEach((option) => {
    expect(option.selected).toBeFalsy();
  });
}

describe("Base render", () => {
  test("renders empty toolbar without props", () => {
    render(
      <ClassToolbar subclasses={[]} resourceAmountByLevel={[]}></ClassToolbar>,
      container
    );

    const specializationName = screen.getByTestId("specializationName");
    expect(specializationName.textContent).toBe("");

    const levelOptions = screen.getAllByTestId("levelOption");
    expect(levelOptions[0].selected).toBeTruthy();
    expect(levelOptions[1].selected).toBeFalsy();

    const classResource = screen.getByTestId("classResource");
    expect(classResource.textContent).toBe(": ");
  });

  test("renders toolbar with only subclasses", () => {
    const MOCKED_SUBCLASSES = ["SubclassA", "SubclassB", "SubclassC"];

    render(
      <ClassToolbar
        specializationName="Subclasses"
        subclasses={MOCKED_SUBCLASSES}
        resourceAmountByLevel={[]}
      ></ClassToolbar>,
      container
    );

    let expectedNames = "Subclasses";
    MOCKED_SUBCLASSES.forEach((subclass) => (expectedNames += subclass));

    const specializationName = screen.getByTestId("specializationName");
    expect(specializationName.textContent).toBe(expectedNames);

    const levelOptions = screen.getAllByTestId("levelOption");
    verifySelectedLevelOption(1, levelOptions);

    const classResource = screen.getByTestId("classResource");
    expect(classResource.textContent).toBe(": ");
  });

  test("renders toolbar with only starting level", () => {
    const CURRENT_LEVEL = 20;

    render(
      <ClassToolbar
        currentLevel={CURRENT_LEVEL}
        subclasses={[]}
        resourceAmountByLevel={[]}
      ></ClassToolbar>,
      container
    );

    const specializationName = screen.getByTestId("specializationName");
    expect(specializationName.textContent).toBe("");

    const levelOptions = screen.getAllByTestId("levelOption");
    verifySelectedLevelOption(CURRENT_LEVEL, levelOptions);

    const classResource = screen.getByTestId("classResource");
    expect(classResource.textContent).toBe(": ");
  });

  test("renders toolbar with class resources and static level", () => {
    const RESOURCE_NAME = "Resource";
    const RESOURCE_AMOUNT_BY_LEVEL = [...Array(20).keys()];
    const CURRENT_LEVEL = 1;

    render(
      <ClassToolbar
        resourceName={RESOURCE_NAME}
        resourceAmountByLevel={RESOURCE_AMOUNT_BY_LEVEL}
        currentLevel={CURRENT_LEVEL}
        subclasses={[]}
      ></ClassToolbar>,
      container
    );

    const specializationName = screen.getByTestId("specializationName");
    expect(specializationName.textContent).toBe("");

    const levelOptions = screen.getAllByTestId("levelOption");
    expect(levelOptions[0].selected).toBeTruthy();
    expect(levelOptions[1].selected).toBeFalsy();

    const classResource = screen.getByTestId("classResource");
    expect(classResource.textContent).toBe(
      RESOURCE_NAME + ": " + RESOURCE_AMOUNT_BY_LEVEL[0]
    );
  });

  // test("renders toolbar with class resources and dynamic level", () => {
  //   const RESOURCE_NAME = "Resource";
  //   const RESOURCE_AMOUNT_BY_LEVEL = [...Array(20).keys()];
  //   let current_level = 5;

  //   render(
  //     <ClassToolbar
  //       resourceName={RESOURCE_NAME}
  //       resourceAmountByLevel={RESOURCE_AMOUNT_BY_LEVEL}
  //       currentLevel={current_level}
  //       subclasses={[]}
  //       onChangeLevel={(newLevel) => {
  //         current_level = newLevel;
  //       }}
  //     ></ClassToolbar>,
  //     container
  //   );

  //   const specializationName = screen.getByTestId("specializationName");
  //   expect(specializationName.textContent).toBe("");

  //   let levelOptions = screen.getAllByTestId("levelOption");
  //   verifySelectedLevelOption(current_level, levelOptions);

  //   const classResource = screen.getByTestId("classResource");
  //   expect(classResource.textContent).toBe(
  //     RESOURCE_NAME + ": " + RESOURCE_AMOUNT_BY_LEVEL[current_level - 1]
  //   );

  //   const levelSelect = screen.getByTestId("levelSelect");
  //   fireEvent.change(levelSelect, {
  //     target: { value: 17 },
  //   });
  //   levelOptions = screen.getAllByTestId("levelOption");

  //   console.log(current_level);

  //   verifySelectedLevelOption(current_level, levelOptions);
  //   expect(classResource.textContent).toBe(
  //     RESOURCE_NAME + ": " + RESOURCE_AMOUNT_BY_LEVEL[current_level - 1]
  //   );
  // });
});
