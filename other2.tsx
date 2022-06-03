import React from "react";

const Test2 = () => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      {!data.length && <EmptyResults />}
      {data.length && <Items data={data} />}
    </>
  );
};

export default Test2;
