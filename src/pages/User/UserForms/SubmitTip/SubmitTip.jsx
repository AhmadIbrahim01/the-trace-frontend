import React from "react";

const SubmitTip = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Submit a Tip?</h1>
      <form>
        <div className="input flex column">
          <label htmlFor="statement">Tip Details</label>
          <textarea
            id="statement"
            placeholder="Describe the information you want to share..."
            name="statement"
            rows={10}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default SubmitTip;
