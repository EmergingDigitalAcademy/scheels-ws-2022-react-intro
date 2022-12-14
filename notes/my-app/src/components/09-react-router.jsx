import MyContainer from "./reused-components/MyContainer";

export default function ReactRouter() {
  const colLeft = <div></div>;
  const colRight = <div></div>;

  return (
    <MyContainer
      headerText="React Router"
      colLeft={colLeft}
      colRight={colRight}
    />
  );
}
