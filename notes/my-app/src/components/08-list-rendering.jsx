import MyContainer from "./reused-components/MyContainer";

export default function ListRendering() {
  const colLeft = <div></div>;
  const colRight = <div></div>;

  return (
    <MyContainer
      headerText="List Rendering"
      colLeft={colLeft}
      colRight={colRight}
    />
  );
}
