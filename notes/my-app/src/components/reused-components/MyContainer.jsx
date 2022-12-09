export default function MyContainer({ myHeader, colLeft, colRight }) {
  return (
    <div className="container">
      {myHeader}

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
