export default function MyContainer({ headerText, colLeft, colRight }) {
  return (
    <div className="container">
      <h2>{headerText}</h2>

      <hr />
      <br />

      <div className="colWrapper">
        {colLeft}

        {colRight !== undefined && (
          <>
            <hr />
            {colRight}
          </>
        )}
      </div>
    </div>
  );
}
