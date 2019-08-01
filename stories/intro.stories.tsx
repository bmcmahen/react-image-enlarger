import * as React from "react";
import { storiesOf } from "@storybook/react";
import Image from "../src";

function SingleSource() {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <Image
      style={{ width: "200px", height: "auto" }}
      zoomed={zoomed}
      src="https://images.unsplash.com/photo-1542049943447-072b93eb20af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
    />
  );
}

function DoubleSource() {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <Image
      style={{ width: "200px", height: "auto" }}
      zoomed={zoomed}
      src="https://images.unsplash.com/photo-1542049943447-072b93eb20af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=275&q=80"
      enlargedSrc="https://images.unsplash.com/photo-1542049943447-072b93eb20af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=875&q=80"
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
    />
  );
}

function LoadingIndicator() {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <Image
      style={{ width: "200px", height: "auto" }}
      zoomed={zoomed}
      renderLoading={
        <div
          style={{
            position: "absolute",
            top: "50%",
            color: "white",
            left: "50%",
            transform: "translateY(-50%} translateX(-50%)"
          }}
        >
          Loading!
        </div>
      }
      src="https://images.unsplash.com/photo-1542049943447-072b93eb20af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=275&q=80"
      enlargedSrc="https://images.unsplash.com/photo-1542049943447-072b93eb20af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=875&q=80"
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
    />
  );
}

storiesOf("Hello", module)
  .add("Single src", () => (
    <>
      <SingleSource />
      <SingleSource />
    </>
  ))
  .add("Double source", () => <DoubleSource />)
  .add("Loading indicator", () => <LoadingIndicator />);
