import MyContainer from "./reused-components/MyContainer";

export default function ConditionalRendering() {
  const colLeft = <div></div>;
  const colRight = <div></div>;

  return (
    <MyContainer
      headerText="Conditional Rendering"
      colLeft={colLeft}
      colRight={colRight}
    />
  );
}
