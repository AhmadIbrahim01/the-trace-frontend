import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./AIStatement.css";
import axios from "axios";
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
        `http://127.0.0.1:8080/api/ai/statement/`,
        { statement: formData.statement },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const sections = parseContent(response.data.result);
      console.log(response.data);

      setAnalysis(parseContent(response.data.result));
      setLoading(false);
    } catch (error) {
      console.error("Error submitting statement:", error);
      setLoading(false);
    }
  };

  const content = `
Sentiment Analysis:\nThe emotional tone of the statement seems to be neutral. The speaker, Mr. Carter, appears to calmly acknowledge the reason for being present and the topic of discussion.\n\nKey Entities:\n1. Mr. Carter: The main individual being addressed in the statement.\n2. Lily: Mentioned as the owner of the apartment where an incident occurred.\n3. Apartment: The location where the mentioned event took place.\n4. Friday night: The timeframe of when the incident in Lily's apartment occurred.\n\nInconsistencies:\nThere are no clear inconsistencies or contradictions in the statement. Mr. Carter acknowledges his understanding of the situation and the specific topic of discussion related to an event that occurred at Lily's apartment on the mentioned Friday night.  `;

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

  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>AI Statement Analysis</h1>
      <p>
        Easily analyze suspect or witness statements for insights and patterns.
      </p>
      <form className="ai-statement-form" onSubmit={handleSubmit}>
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
