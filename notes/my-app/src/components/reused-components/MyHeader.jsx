export default function MyHeader({ headerText, headerBody }) {
  return (
    <>
      <h2>{headerText}</h2>
      {headerBody !== undefined ? headerBody : <br />}
    </>
  );
}
