import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { unmountComponentAtNode } from "react-dom";
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

function verifySelectedLevelOption(expectedSelectedLevel, levelOptions) {
  const levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  expect(
    screen.getByRole("option", { name: levels[expectedSelectedLevel - 1] })
      .selected
  ).toBe(true);

  const nonSelectedLevels = levels.filter(
    (level) => level !== expectedSelectedLevel
  );

  nonSelectedLevels.forEach((level) => {
    expect(screen.getByRole("option", { name: level }).selected).toBe(false);
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

  test("renders toolbar with class resources and dynamic level", () => {
    const RESOURCE_NAME = "Resource";
    const RESOURCE_AMOUNT_BY_LEVEL = [...Array(20).keys()];
    let current_level = 5;

    render(
      <ClassToolbar
        resourceName={RESOURCE_NAME}
        resourceAmountByLevel={RESOURCE_AMOUNT_BY_LEVEL}
        currentLevel={current_level}
        subclasses={[]}
        onChangeLevel={(newLevel) => {
          current_level = newLevel;
        }}
      ></ClassToolbar>,
      container
    );

    const specializationName = screen.getByTestId("specializationName");
    expect(specializationName.textContent).toBe("");

    let levelOptions = screen.getAllByTestId("levelOption");
    verifySelectedLevelOption(current_level, levelOptions);

    const classResource = screen.getByTestId("classResource");
    expect(classResource.textContent).toBe(
      RESOURCE_NAME + ": " + RESOURCE_AMOUNT_BY_LEVEL[current_level - 1]
    );

    const levelSelect = screen.getByTestId("levelSelect");
    userEvent.selectOptions(levelSelect, ["17"]);

    console.log(levelOptions[17 - 1].selected);
    //levelOptions = screen.getAllByTestId("levelOption");

    console.log(current_level);
    expect(screen.getByRole("option", { name: "17" }).selected).toBe(true);

    verifySelectedLevelOption(current_level, levelOptions);
    expect(classResource.textContent).toBe(
      RESOURCE_NAME + ": " + RESOURCE_AMOUNT_BY_LEVEL[current_level - 1]
    );
  });
});
