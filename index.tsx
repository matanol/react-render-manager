import React from "react";

const Test = () => {
  const states = {
    isLoading,
    isError,
    isEmpty: !data.length,
  };

  return (
    <RenderManager {...states}>
      {[
        { isLoading: <Loader /> },
        { isError: <ErrorMessage /> },
        { isEmpty: <EmptyResults /> },
        { default: <Items data={data} /> },
      ]}
    </RenderManager>
  );
};

export default Test;

const CommonRenderManager = ({ children, ...states }) => {
  return (
    <RenderManager
      {...states}
      defaultRenderers={[
        { isLoading: <Loader /> },
        { isError: <ErrorMessage /> },
        { isEmpty: <EmptyResults /> },
      ]}
    >
      {children}
    </RenderManager>
  );
};

function CustomRenderManager<T>({ children, ...states }) {
  return <RenderManager<T> {...states}>{children}</RenderManager>;
}
