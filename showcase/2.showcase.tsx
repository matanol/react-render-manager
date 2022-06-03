import React from "react";

const Test2 = () => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (isEmpty) {
    return <EmptyResults />;
  }

  return <Items data={data} />;
};

export default Test2;
