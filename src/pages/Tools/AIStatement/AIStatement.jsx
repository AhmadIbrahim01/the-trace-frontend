import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./AIStatement.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AIStatement = () => {
  const [formData, setFormData] = useState({
    statement: "",
  });

  const [analysis, setAnalysis] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.statement.length < 50) {
      return;
    }

    setLoading(true);

    const staement = formData.statement;
    console.log(staement);

    try {
      const response = await axios.post(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/ai/statement/`,
        { statement: formData.statement },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const sections = parseContent(response.data.result);
      // console.log(response.data);

      setAnalysis(parseContent(response.data.result));
      setLoading(false);
    } catch (error) {
      console.error("Error submitting statement:", error);
      setLoading(false);
    }
  };

  const parseContent = (text) => {
    const sections = {
      sentimentAnalysis: "",
      keyEntities: "",
      inconsistencies: "",
    };

    const sentimentMatch = text.match(
      /Sentiment Analysis:\n(.*?)(?=\n\n|Key Entities:|Inconsistencies:|$)/s
    );
    const entitiesMatch = text.match(
      /Key Entities:\n(.*?)(?=\n\n|Inconsistencies:|$)/s
    );
    const inconsistenciesMatch = text.match(/Inconsistencies:\n(.*?)(?=$)/s);

    if (sentimentMatch) sections.sentimentAnalysis = sentimentMatch[1].trim();
    if (entitiesMatch) sections.keyEntities = entitiesMatch[1].trim();
    if (inconsistenciesMatch)
      sections.inconsistencies = inconsistenciesMatch[1].trim();

    return sections;
  };

  const navigate = useNavigate();
  const goToCase = () => {
    navigate("/investigator-case");
  };

  return (
    <div className="investigator-form-container  t-center flex column center">
      <h1>AI Statement Analysis</h1>
      <p>
        Easily analyze suspect or witness statements for insights and patterns.
      </p>
      <form className="ai-statement-form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="back-button flex center"
          onClick={goToCase}
        >
          ← Back
        </button>
        <h1>Upload Statement</h1>
        {/* <Input
          id={"name"}
          label={"Name"}
          name={"name"}
          type={"text"}
          placeholder={"Enter suspect/witness name"}
        ></Input> */}

        <div className="input flex column">
          <label htmlFor="statement">Statement</label>
          <textarea
            id="statement"
            name="statement"
            placeholder="Type or paste the statement"
            rows={10}
            value={FormData.statement}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* <Input
          id={"file"}
          label={"Upload Voice"}
          name={"file"}
          type={"file"}
        ></Input> */}

        {loading ? (
          <></>
        ) : (
          <Button
            type={"submit"}
            name={"add-statement"}
            text={"Analyze Statement"}
            className={"admin-form-button"}
          ></Button>
        )}

        {analysis ? (
          <div className="statement-insights">
            <h2>Insights Provided</h2>
            <div className="statement-insight">
              <h3>Sentiment Analysis</h3>
              <p>{analysis.sentimentAnalysis}</p>
            </div>

            <div className="statement-insight">
              <h3>Key Entities</h3>
              <p>{analysis.keyEntities}</p>
            </div>

            <div className="statement-insight">
              <h3>Inconsistencies</h3>
              <p>{analysis.inconsistencies}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </form>

      {/* <div className="statement-analysis-container flex center column"></div> */}
      {/* <div className="statement-container"></div> */}
    </div>
  );
};

export default AIStatement;
