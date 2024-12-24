import React, { useState } from "react";
import "./investigatorCase.css";
import evidenceOne from "../../../assets/images/evidence-1.svg";
import evidenceTwo from "../../../assets/images/evidence-2.svg";
import addEvidence from "../../../assets/images/add-evidence.svg";
import suspect from "../../../assets/images/suspect.svg";
import Modal from "../../../components/SuspectModal/SuspectModal";
import StatementModal from "../../../components/StatementModal/StatementModal";

const InvestigatorCase = () => {
  const statements = [
    { id: 1, name: "Ahmad Ibrahim", date: "January 5, 2025" },
    { id: 2, name: "Adnan Ibrahim", date: "February 10, 2025" },
    { id: 3, name: "Omar Sulieman", date: "February 10, 2025" },
  ];

  const suspects = [
    { id: 1, name: "Adnan Ibrahim", imageUrl: suspect },
    { id: 2, name: "Adnan Ibrahim", imageUrl: suspect },
    { id: 3, name: "Adnan Ibrahim", imageUrl: suspect },
  ];

  const evidences = [
    { id: 1, src: evidenceOne },
    { id: 2, src: evidenceTwo },
    { id: 3, src: evidenceOne },
    { id: 4, src: evidenceOne },
    { id: 5, src: evidenceTwo },
    { id: 6, src: evidenceOne },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [isStatementModalOpen, setIsStatementModalOpen] = useState(false);
  const [statementModalData, setStatementModalData] = useState("");

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openStatementModal = (data) => {
    setStatementModalData(data);
    setIsStatementModalOpen(true);
  };

  const closeStatementModal = () => {
    setIsStatementModalOpen(false);
  };

  console.log(suspects[1].id);

  return (
    <div className="investigator-case flex column center">
      <div className="investigator-case-header flex center wrap">
        <div className="case-evidence-container flex center column">
          <h3>Evidence</h3>
          <div className="case-evidences flex wrap center">
            {evidences.map((evidence, index) => (
              <button
                key={evidence.id}
                className="case-evidence flex center column"
              >
                <img
                  className="case-evidence-img"
                  src={evidence.src}
                  alt={`Evidence ${evidence.id}`}
                />
              </button>
            ))}
            <button className="case-evidence flex center column">
              <img className="add-evidence" src={addEvidence} alt="" />
            </button>
          </div>
        </div>
        <div className="case-suspects flex center column">
          <div className="case-suspects-header flex">
            <h3>Suspects</h3>
            <button className="flex center">+</button>
          </div>
          <div className="case-suspects-body flex center">
            {suspects.map((suspect) => (
              <button key={suspect.id} onClick={() => openModal(suspect.id)}>
                <img
                  src={suspect.imageUrl}
                  alt={suspect.name}
                  className="suspect-image"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="inevstigator-case-body flex center wrap">
        <div className="case-map"></div>
        <div className="case-statements flex center column">
          <div className="case-statements-header flex center">
            <h3>Statements</h3>
            <button className="flex center">+</button>
          </div>
          <div className="case-statements-body flex center column">
            {statements.map((statement) => (
              <button
                key={statement.id}
                className="flex center"
                onClick={() => openStatementModal(suspect.id)}
              >
                <img
                  src={suspect}
                  alt={statement.name}
                  className="statement-image"
                />
                <div className="statement-info flex column">
                  <h4 className="t-left">{statement.name}</h4>
                  <p className="t-left">Given on {statement.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
      <StatementModal
        isOpen={isStatementModalOpen}
        onClose={closeStatementModal}
        data={statementModalData}
      />
    </div>
  );
};

export default InvestigatorCase;
