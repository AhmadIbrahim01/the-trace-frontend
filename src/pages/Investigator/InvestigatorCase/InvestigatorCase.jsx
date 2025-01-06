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
const InvestigatorCase = () => {
  const [theCase, setCase] = useState({});
  const [evidences, setEvidences] = useState({});
  const [suspects, setSuspects] = useState({});
  const [witnesses, setWitnesses] = useState({});
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("suspects");
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
        console.log("wet", witnesses);

        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getCase();
  }, [caseId]);

  // console.log(theCase);
  // console.log(suspects);

  if (loading) return <div>Loading...</div>;

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const openStatementModal = (data) => {
    setStatementModalData(data);
    setIsStatementModalOpen(true);
  };
  const closeStatementModal = () => setIsStatementModalOpen(false);

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

  const openWitnessModal = (data) => {
    setWitnessModalData(data);
    setWitnessModalOpen(true);
  };
  const closeWitnessModal = () => setWitnessModalOpen(false);

  const toggleView = () => {
    setView((prevView) => (prevView === "suspects" ? "witnesses" : "suspects"));
  };

  const allStatements = suspects.flatMap((suspect) =>
    suspect.statements.map((statement) => ({
      name: suspect.name,
      suspectPhoto: suspect.photos[0],
      statement: statement.statement,
      id: statement._id,
      date: new Date(statement.date).toString(),
      location: statement.locationOfIncident,
    }))
  );

  return (
    <div className="investigator-case flex column center">
      <div className="investigator-case-header flex center wrap">
        {/* Evidence Section */}
        <div className="case-evidence-container flex column scrollable-div">
          <h3>Evidences</h3>
          <div className="case-evidences flex wrap">
            {evidences.map((evidence) => (
              <button
                key={evidence._id}
                className="case-evidence flex center column"
                onClick={() => openEvidence([evidence])}
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
          </div>
        </div>
        {/* Suspects Section */}

        <div className="case-suspects flex center column">
          <div className="switch-button flex center">
            <button onClick={toggleView}>
              {view === "suspects" ? "Show Witnesses" : "Show Suspects"}
            </button>
          </div>
          {view === "suspects" ? (
            <>
              <div className="case-suspects-header flex">
                <h3>Suspects</h3>
                <button onClick={() => navigate("/add-suspect")}>+</button>
              </div>
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
              </div>
            </>
          ) : (
            <>
              <div className="case-suspects-header flex">
                <h3>Witnesses</h3>
                <button onClick={() => navigate("/add-witness")}>+</button>
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
          <div className="case-statements-header flex center">
            <h3>Statements</h3>
            <button className="flex center" onClick={openChoose}>
              +
            </button>
          </div>
          <div className="case-statements-body scrollable-div">
            {allStatements.map((statement) => (
              <button
                key={statement.id}
                className="flex center"
                onClick={() => openStatementModal(statement)}
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
      <ChooseStatementModal
        isOpen={isChooseOpen}
        onClose={closeChoose}
        data={chooseModalData}
      />
    </div>
  );
};

export default InvestigatorCase;
