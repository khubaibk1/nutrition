"use client";
const Steps = ({ stepNo, heading, detail }) => {
  let containerStyle = {};

  if (stepNo === "Step 1") {
    containerStyle = {
      width: "646px",
    };
  } else if (stepNo === "Step 2") {
    containerStyle = {
      width: "474px",
    };
  } else if (stepNo === "Step 3") {
    containerStyle = {
      width: "674px",
    };
  }

  return (
    <div className="flex justify-center items-center">
      <div className="step-container mt-[20px] " style={containerStyle}>
        <button className="stepbtn ">{stepNo}</button>
        <h1 className="heading sm:mt-[5px] mt-[20px]">{heading}</h1>
        <p>{detail}</p>
        <style jsx>{`
          .step-container {
            width: 100%;
            max-width: 326px;
            @media (min-width: 750px) {
              max-width: 274px;
            }
            @media (min-width: 510px) {
              max-width: 490px;
            }
            @media (min-width: 1024px) {
              max-width: 674px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
export default Steps;
