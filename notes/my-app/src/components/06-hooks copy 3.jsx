import MyContainer from "./reused-components/MyContainer";

export default function Hooks() {
  const colLeft = <div></div>;
  const colRight = <div></div>;

  return (
    <MyContainer headerText="Hooks" colLeft={colLeft} colRight={colRight} />
  );
}
