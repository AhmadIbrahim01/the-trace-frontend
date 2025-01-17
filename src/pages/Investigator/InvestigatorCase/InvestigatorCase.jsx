import React, { useState, useEffect } from "react";
import "./investigatorCase.css";
import evidenceOne from "../../../assets/images/evidence-1.svg";
import evidenceTwo from "../../../assets/images/evidence-2.svg";
import addEvidence from "../../../assets/images/add-evidence.svg";
import suspect from "../../../assets/images/suspect.svg";
import suspectImage from "../../../assets/images/suspect.svg";
import Modal from "../../../components/SuspectModal/SuspectModal";
import StatementModal from "../../../components/StatementModal/StatementModal";
import { useNavigate } from "react-router-dom";

import ChooseStatementModal from "../../../components/ChooseStatementModal/ChooseStatementModal";
import MapComponent from "../../../components/MapComponent/MapComponent";
import axios from "axios";
import EvidenceModal from "../../../components/EvidenceModal/EvidenceModal";
import WitnessModal from "../../../components/WitnessModal/WitnessModal";
import WitnessStatementModal from "../../../components/WitnessStatementModal/WitnessStatementModal";
import SketchesModal from "../../../components/SketchesModal/SketchesModal";

import AIStaementIcon from "../../../assets/icons/ai-statement-icon.svg";
import AISketchIcon from "../../../assets/icons/ai-sketch-icon.svg";
import InvestigatorGPTIcon from "../../../assets/icons/investigation-gpt-icon.svg";

import Key from "../../../assets/icons/key.svg";
import UserEdit from "../../../assets/icons/user-edit.svg";
import EyeIcon from "../../../assets/icons/eye-icon.svg";
import SuspectIcon from "../../../assets/icons/suspect-icon.svg";

const InvestigatorCase = () => {
  const [theCase, setCase] = useState({});
  const [evidences, setEvidences] = useState({});
  const [suspects, setSuspects] = useState({});
  const [witnesses, setWitnesses] = useState({});
  const [sketches, setSketches] = useState({});

  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("suspects");
  const [statementsView, setStatementsView] = useState("suspects");
  const [sketchView, setSketchView] = useState("evidences");

  const caseId = localStorage.getItem("caseId");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [isStatementModalOpen, setIsStatementModalOpen] = useState(false);
  const [statementModalData, setStatementModalData] = useState("");
  const [isChooseOpen, setChooseOpen] = useState(false);
  const [chooseModalData, setChooseModalData] = useState("");
  const [isEvidenceModalOpen, setEvidenceModalOpen] = useState(false);
  const [evidenceModalData, setEvidenceModalData] = useState("");
  const [isWitnessModalOpen, setWitnessModalOpen] = useState(false);
  const [witnessModalData, setWitnessModalData] = useState("");
  const [isWitnessStatementModalOpen, setWitnessStatementModalOpen] =
    useState(false);
  const [witnessStatementModalData, setWitnessStatementModalData] =
    useState("");

  const [isSketchesModalOpen, setSketchesModalOpen] = useState(false);
  const [sketchesModalData, setSketchesModalData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getCase = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/case/${caseId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setCase(response.data);
        setEvidences(response.data.evidence);
        setSuspects(response.data.suspects);
        setWitnesses(response.data.witnesses);
        setSketches(response.data.suspectSketches);

        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getCase();
  }, [caseId]);

  if (!caseId)
    return (
      <div className="error flex column center">
        <h1 className="t-center">
          Please select a case
          <br /> to view this page.
        </h1>
      </div>
    );
  if (loading)
    return (
      <div className="error flex column center">
        <h1 className="t-center">LOADING</h1>
      </div>
    );

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const openStatementModal = (data) => {
    setStatementModalData(data);
    setIsStatementModalOpen(true);
  };
  const closeStatementModal = () => {
    localStorage.removeItem("statementId");
    localStorage.removeItem("suspectId");
    setIsStatementModalOpen(false);
  };

  const openChoose = (data) => {
    setChooseModalData(data);
    setChooseOpen(true);
  };
  const closeChoose = () => setChooseOpen(false);

  const openEvidence = (data) => {
    setEvidenceModalData(data);
    setEvidenceModalOpen(true);
  };
  const closeEvidenceModal = () => setEvidenceModalOpen(false);

  const openSketches = (data) => {
    setSketchesModalData(data);
    setSketchesModalOpen(true);
  };
  const closeSketches = () => setSketchesModalOpen(false);

  const openWitnessModal = (data) => {
    setWitnessModalData(data);
    setWitnessModalOpen(true);
  };
  const closeWitnessModal = () => setWitnessModalOpen(false);

  const openWitnessStatementModal = (data) => {
    setWitnessStatementModalData(data);
    setWitnessStatementModalOpen(true);
  };
  const closeWitnessStatementModal = () => {
    localStorage.removeItem("statementId");
    localStorage.removeItem("witnessId");
    setWitnessStatementModalOpen(false);
  };

  const toggleView = () => {
    setView((prevView) => (prevView === "suspects" ? "witnesses" : "suspects"));
  };
  const toggleStatementsView = () => {
    setStatementsView((prevView) =>
      prevView === "suspects" ? "witnesses" : "suspects"
    );
  };
  const toggleSketchView = () => {
    setSketchView((prevView) =>
      prevView === "evidences" ? "sketches" : "evidences"
    );
  };

  const allSuspectsStatements = suspects.flatMap((suspect) =>
    suspect.statements.map((statement) => ({
      name: suspect.name,
      suspectPhoto: suspect.photos[0],
      statement: statement.statement,
      suspectId: suspect._id,
      id: statement._id,
      date: new Date(statement.date).toString(),
      location: statement.locationOfIncident,
    }))
  );
  const allWitnessesStatements = witnesses.flatMap((witness) =>
    witness.statements.map((statement) => ({
      name: witness.name,
      witnessPhoto: witness.photo,
      witnessId: witness._id,
      statement: statement,
      id: statement._id,
      date: new Date(statement.date).toString(),
      location: statement.locationOfIncident,
    }))
  );

  const goToStatementModel = (statement) => {
    localStorage.setItem("statementId", statement.id);
    localStorage.setItem("suspectId", statement.suspectId);
    openStatementModal(statement);
  };

  const goToWitnessModel = (statement) => {
    localStorage.setItem("statementId", statement.id);
    localStorage.setItem("witnessId", statement.witnessId);
    openWitnessStatementModal(statement);
  };

  return (
    <div className="investigator-case flex column center">
      <div className="investigator-tools flex center wrap">
        <button
          onClick={() => navigate("/ai-statement")}
          className="investigator-tool flex center"
        >
          <img src={AIStaementIcon} alt="" />
          <h2>AI Statement Analysis</h2>
        </button>
        <button
          onClick={() => navigate("/ai-sketch")}
          className="investigator-tool flex center"
        >
          <img src={AISketchIcon} alt="" />
          <h2>AI Suspect Drawing</h2>
        </button>
        <button
          onClick={() => navigate("/investigatorgpt")}
          className="investigator-tool flex center"
        >
          <img src={InvestigatorGPTIcon} alt="" />
          <h2>Investigation GPT</h2>
        </button>
      </div>

      <div className="investigator-case-header flex center wrap">
        {/* Evidence Section */}
        <div className="case-evidence-container flex column scrollable-div">
          <div className="switch-button flex center">
            <h3>{sketchView === "evidences" ? "Evidences" : "Sketches"}</h3>

            <div className="switch-sketches flex center">
              <button
                onClick={toggleSketchView}
                className={`flex center ${
                  sketchView === "evidences"
                    ? "selected-btn"
                    : "not-selected-btn"
                }`}
              >
                <img src={Key} alt="" />
                Evidences
              </button>
              <button
                onClick={toggleSketchView}
                className={`flex center ${
                  sketchView === "sketches"
                    ? "selected-btn"
                    : "not-selected-btn"
                }`}
              >
                <img src={UserEdit} alt="" />
                Sketches
              </button>
            </div>
          </div>
          <div className="case-evidences flex wrap">
            {sketchView === "evidences" ? (
              <>
                {evidences.map((evidence) => (
                  <button
                    key={evidence._id}
                    className="case-evidence flex center column"
                    onClick={() => openEvidence(evidence)}
                  >
                    <img
                      className="case-evidence-img"
                      src={evidence.photo || evidenceOne}
                      alt={`Evidence ${evidence.id}`}
                    />
                  </button>
                ))}
                <button
                  className="case-evidence flex center column"
                  onClick={() => navigate("/add-evidence")}
                >
                  <img
                    className="add-evidence"
                    src={addEvidence}
                    alt="Add Evidence"
                  />
                </button>
              </>
            ) : (
              <>
                {sketches.map((sketch) => (
                  <button
                    key={sketch._id}
                    className="case-evidence flex center column"
                    onClick={() => openSketches(sketch)}
                  >
                    <img
                      className="case-evidence-img"
                      src={sketch.image || evidenceOne}
                    />
                  </button>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="case-suspects flex center column">
          {view === "suspects" ? (
            <>
              <div className="case-suspects-header flex">
                <h3>Suspects</h3>
                <div className="switch-sketches flex center">
                  <button
                    onClick={toggleView}
                    className={`flex center ${
                      view === "suspects" ? "selected-btn" : "not-selected-btn"
                    }`}
                  >
                    <img src={SuspectIcon} alt="" />
                    Suspects
                  </button>
                  <button
                    onClick={toggleView}
                    className={`flex center ${
                      view === "witnesses" ? "selected-btn" : "not-selected-btn"
                    }`}
                  >
                    <img src={EyeIcon} alt="" />
                    Witnesses
                  </button>
                </div>
              </div>
              {/* <button onClick={() => navigate("/add-suspect")}>+</button> */}
              <div className="case-suspects-body flex center wrap scrollable-div">
                {suspects.map((suspect) => (
                  <button
                    className="flex center"
                    key={suspect._id}
                    onClick={() => openModal(suspect)}
                  >
                    <img
                      src={suspect.photos[0] || suspectImage}
                      alt={suspect.name}
                      className="suspect-image"
                    />
                  </button>
                ))}
                <button
                  className="case-evidence flex center column"
                  onClick={() => navigate("/add-suspect")}
                >
                  <img
                    className="add-evidence"
                    src={addEvidence}
                    alt="Add Evidence"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="case-suspects-header flex">
                <h3>Witnesses</h3>
                <div className="switch-sketches flex center">
                  <button
                    onClick={toggleView}
                    className={`flex center ${
                      view === "suspects" ? "selected-btn" : "not-selected-btn"
                    }`}
                  >
                    <img src={Key} alt="" />
                    Suspects
                  </button>
                  <button
                    onClick={toggleView}
                    className={`flex center ${
                      view === "witnesses" ? "selected-btn" : "not-selected-btn"
                    }`}
                  >
                    <img src={UserEdit} alt="" />
                    Witnesses
                  </button>
                </div>{" "}
              </div>
              <div className="case-suspects-body flex center wrap scrollable-div">
                {witnesses.map((witness) => (
                  <button
                    className="flex center"
                    key={witness._id}
                    onClick={() => openWitnessModal(witness)}
                  >
                    <img
                      src={witness.photo || suspectImage}
                      alt={witness.name}
                      className="suspect-image"
                    />
                  </button>
                ))}
                <button
                  className="case-evidence flex center column"
                  onClick={() => navigate("/add-witness")}
                >
                  <img
                    className="add-evidence"
                    src={addEvidence}
                    alt="Add Evidence"
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="investigator-case-body flex center wrap">
        <div className="case-map">
          <MapComponent
            latitude={theCase.map.latitude}
            longitude={theCase.map.longitude}
          />
        </div>
        <div className="case-statements flex center column">
          {/* <div className="switch-button flex center">
            <button onClick={toggleStatementsView}>
              {statementsView === "suspects"
                ? "Show Suspects"
                : "Show Witnesses"}
            </button>
          </div> */}

          <div className="case-statements-header flex center">
            <h3>Statements</h3>
            {/* <button className="flex center" onClick={openChoose}>
              +
            </button> */}
            <div className="case-suspects-header flex">
              <div className="switch-statements flex center">
                <button
                  onClick={toggleStatementsView}
                  className={`flex center ${
                    statementsView === "suspects"
                      ? "selected-btn"
                      : "not-selected-btn"
                  }`}
                >
                  <img src={SuspectIcon} alt="" />
                </button>
                <button
                  onClick={toggleStatementsView}
                  className={`flex center ${
                    statementsView === "witnesses"
                      ? "selected-btn"
                      : "not-selected-btn"
                  }`}
                >
                  <img src={EyeIcon} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="case-statements-body scrollable-div">
            {statementsView === "suspects"
              ? allWitnessesStatements.map((statement) => (
                  <button
                    key={statement.id}
                    className="flex center"
                    onClick={() => goToWitnessModel(statement)}
                  >
                    <img
                      src={statement.witnessPhoto || suspect}
                      alt={statement.name}
                      className="statement-image"
                    />
                    <div className="statement-info flex column">
                      <h4>{statement.name}</h4>
                      <p>Given on {statement.date.slice(0, 16)}</p>
                    </div>
                  </button>
                ))
              : allSuspectsStatements.map((statement) => (
                  <button
                    key={statement.id}
                    className="flex center"
                    onClick={() => goToStatementModel(statement)}
                  >
                    <img
                      src={statement.suspectPhoto || suspect}
                      alt={statement.name}
                      className="statement-image"
                    />
                    <div className="statement-info flex column">
                      <h4>{statement.name}</h4>
                      <p>Given on {statement.date.slice(0, 16)}</p>
                    </div>
                  </button>
                ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
      <WitnessModal
        isOpen={isWitnessModalOpen}
        onClose={closeWitnessModal}
        data={witnessModalData}
      />
      <EvidenceModal
        isOpen={isEvidenceModalOpen}
        onClose={closeEvidenceModal}
        data={evidenceModalData}
      />
      <StatementModal
        isOpen={isStatementModalOpen}
        onClose={closeStatementModal}
        data={statementModalData}
      />
      <WitnessStatementModal
        isOpen={isWitnessStatementModalOpen}
        onClose={closeWitnessStatementModal}
        data={witnessStatementModalData}
      />
      <ChooseStatementModal
        isOpen={isChooseOpen}
        onClose={closeChoose}
        data={chooseModalData}
      />
      <SketchesModal
        isOpen={isSketchesModalOpen}
        onClose={closeSketches}
        data={sketchesModalData}
      />
    </div>
  );
};

export default InvestigatorCase;
