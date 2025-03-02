import React from "react";

function ErrorComponent() {
  return (
    <div className="py-12 my-[90px] text-[#0a2e65] text-center">
      <h1 className="text-4xl font-bold">This user does not exist, yet</h1>
      <p className="my-4">
        Are you sure you didn&apos;t make a typo? <br />
        (correct MinieLinks usually have an @ infront of them)
      </p>

      <button
        onClick={() => (window.location.href = "https://miniemoney.com")}
        className="bg-Primary-500 text-white py-4 px-8 rounded-full"
      >
        BACK TO HOME
      </button>
    </div>
  );
}

export default ErrorComponent;
