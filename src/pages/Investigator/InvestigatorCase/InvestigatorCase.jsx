import React, { useState } from "react";
import "./investigatorCase.css";
import evidenceOne from "../../../assets/images/evidence-1.svg";
import evidenceTwo from "../../../assets/images/evidence-2.svg";
import addEvidence from "../../../assets/images/add-evidence.svg";
import suspect from "../../../assets/images/suspect.svg";
import Modal from "../../../components/SuspectModal/SuspectModal";
import StatementModal from "../../../components/StatementModal/StatementModal";
import { useNavigate } from "react-router-dom";

import ChooseStatementModal from "../../../components/ChooseStatementModal/ChooseStatementModal";

const InvestigatorCase = () => {
  const statements = [
    {
      id: 1,
      name: "Ahmad Ibrahim",
      date: "January 5, 2025",
      statement:
        "Ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur viIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diamet, consectetur adipiscing elit. Curabitur vitae diamIpsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diam iaculis nunc molestie lacinia id eu nunc. Nam velit odio, aliquet nec mi at, bibendum imperdiet elit. Suspendisse accumsan nisl et libero ornare molestie. In viverra, est non egestas pretium, metus diam mollis est, egestas sollicitudin turpis libero sodales velit. Praesent ullamcorper ornare lacus ac auctor. Aenean ut varius felis, a consequat risus. Maecenas eleifend fringilla metus sed porta. In interdum tellus dui, at faucibus dui sagittis sit amet. Nam efficitur leo vel hendrerit rutrum.Praesent sem ante, egestas eu mi eu, ultricies imperdiet arcu. Proin nisl risus, finibus eget imperdiet nec, sollicitudin eget dui. Pellentesque ipsum turpis, facilisis sit amet cursus id, laoreet non augue. Mauris commodo lectus orci. Curabitur nec purus erat. Donec eros massa, congue ut interdum eu, sodales ut magna. Donec tincidunt magna id augue volutpat tincidunt. Donec eget lorem sit amet eros mattis euismod. Duis sed felis accumsan, blandit orci et, varius arcu. Aliquam erat volutpat. Donec eget neque aliquam, congue eros in, maximus erat. Nulla nunc orci, placerat a libero in, euismod imperdiet sapien. Morbi lobortis convallis luctus. Nulla convallis, magna id luctus sollicitudin, augue ligula cursus nunc, vitae cursus dui nibh eu nisi.",
    },
    {
      id: 2,
      name: "Adnan Ibrahim",
      date: "February 10, 2025",
      statement:
        " id eu nunc. Nam velit odio, aliquet nec mi at, bibendum imperdiet elit. Suspendisse accumsan nisl et libero ornare molestie. In viverra, est non egestas pretium, metus diam mollis est, egestas sollicitudin turpis libero sodales velit. Praesent ullamcorper ornare lacus ac auctor. Aenean ut varius felis, a consequat risus. Maecenas eleifend fringilla metus sed porta. In interdum tellus dui, at faucibus dui sagittis sit amet. Nam efficitur leo vel hendrerit rutrum.Praesent sem ante, egestas eu mi eu, ultricies imperdiet arcu. Proin nisl risus, finibus eget imperdiet nec, sollicitudin eget dui. Pellentesque ipsum turpis, facilisis sit amet cursus id, laoreet non augue. Mauris commodo lectus orci. Curabitur nec purus erat. Donec eros massa, congue ut interdum eu, sodales ut magna. Donec tincidunt magna id augue volutpat tincidunt. Donec eget lorem sit amet eros mattis euismod. Duis sed felis accumsan, blandit orci et, varius arcu. Aliquam erat volutpat. Donec eget neque aliquam, congue eros in, maximus erat. Nulla nunc orci, placerat a libero in, euismod imperdinvallis luctus. Nulla convallis, magna id luctus sollicitudin, augue ligula cursus nunc, vitae cursus dui nibh eu nisi.",
    },
    {
      id: 3,
      name: "Omar Sulieman",
      date: "February 10, 2025",
      statement:
        "Lorem  Curabitur vitae diam iaculis nunc molestie lacinia id eu nunc. Nam velit odio, aliquet nec mi at, bibendum imperdiet elit. Suspendisse accumsan nisl et libero ornare molestie. In viverra, est non egestas pretium, metus diam mollis est, egestas sollicitudin turpis libero sodales velit. Praesent ullamcorper ornare lacus ac auctor. Aenean ut varius felis, a consequat risus. Maecenas eleifend fringilla metus sed porta. In interdum tellus dui, at faucibus dui sagittis sit amet. Nam efficitur leo vel hendrerit rutrum.Praesent sem ante, egestas eu mi eu, ultricies imperdiet arcu. Proin nisl risus, finibus eget imperdiet nec, sollicitudin eget dui. Pellentesque ipsum turpis, facilisis sit amet cursus id, laoreet non augue. Mauris commodo lectus orci. Curabitur nec purus erat. Donec eros massa, congue ut interdum eu, sodales ut magna. Donec tincidunt magna id augue volutpat tincidunt. Donec eget lorem sit amet eros mattis euismod. Duis sed felis accumsan, blandit orci et, varius arcu. Aliquam erat volutpat. Donec eget neque aliquam, congue eros in, maximus erat. Nulla nunc orci, placerat a libero in, euismod imperdiet sapien. Morbi lobortis convallis luctus. Nulla convallis, magna id luctus sollicitudin, augue ligula cursus nunc, vitae cursus dui nibh eu nisi.",
    },
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

  const [isChooseOpen, setChooseOpen] = useState(false);
  const [chooseModalData, setChooseModalData] = useState("");

  const navigate = useNavigate();
  const addEvidenceHandler = () => {
    navigate("/add-evidence");
  };
  const addSuspectHandler = () => {
    navigate("/add-suspect");
  };

  const AddStatementHandler = () => {
    navigate("/add-statement");
  };

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
  const openChoose = (data) => {
    setChooseModalData(data);
    setChooseOpen(true);
  };

  const closeChoose = () => {
    setChooseOpen(false);
  };

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
            <button
              className="case-evidence flex center column"
              onClick={addEvidenceHandler}
            >
              <img className="add-evidence" src={addEvidence} alt="" />
            </button>
          </div>
        </div>
        <div className="case-suspects flex center column">
          <div className="case-suspects-header flex">
            <h3>Suspects</h3>
            <button className="flex center" onClick={addSuspectHandler}>
              +
            </button>
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
            <button className="flex center" onClick={openChoose}>
              +
            </button>
          </div>
          <div className="case-statements-body flex center column">
            {statements.map((statement) => (
              <button
                key={statement.id}
                className="flex center"
                onClick={() => openStatementModal(statement)}
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
      <ChooseStatementModal
        isOpen={isChooseOpen}
        onClose={closeChoose}
        data={chooseModalData}
      />
    </div>
  );
};

export default InvestigatorCase;
