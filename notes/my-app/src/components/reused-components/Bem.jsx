// A custom component to combine the bold and emphasis elements

export default function Bem(props) {
  return (
    <b>
      <em>{props.children}</em>
    </b>
  );
}
