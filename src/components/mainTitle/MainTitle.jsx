import React from "react";
import Container from "../common/Container";

function MainTitle() {
  return (
    <Container>
      <div className="tw-text-center tw-max-w-4xl tw-mx-auto">
        <p className="tw-text-7xl tw-font-light tw-mb-4">All About Online</p>
        <h3 className="tw-text-8xl tw-font-bold tw-tracking-wide tw-mb-7">
          Booking System
        </h3>

        <p className="tw-text-2xl tw-text-secondary-color tw-tracking-wide tw-font-lato">
          The human instinct to explore new places and things is always there.
          <br />
          People travel for all sorts of reasons, be it to spend time with
          <br /> their loved ones or today
        </p>
      </div>
    </Container>
  );
}

export default MainTitle;
