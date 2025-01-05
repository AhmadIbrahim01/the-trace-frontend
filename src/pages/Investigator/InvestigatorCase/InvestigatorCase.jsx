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
const InvestigatorCase = () => {
  const [theCase, setCase] = useState({});
  const [evidences, setEvidences] = useState({});
  const [suspects, setSuspects] = useState({});
  const [loading, setLoading] = useState(true);
  const caseId = localStorage.getItem("caseId");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [isStatementModalOpen, setIsStatementModalOpen] = useState(false);
  const [statementModalData, setStatementModalData] = useState("");
  const [isChooseOpen, setChooseOpen] = useState(false);
  const [chooseModalData, setChooseModalData] = useState("");
  const [isEvidenceModalOpen, setEvidenceModalOpen] = useState(false);
  const [evidenceModalData, setEvidenceModalData] = useState("");

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
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getCase();
  }, [caseId]);

  // console.log(theCase);
  console.log(suspects);

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
          <div className="case-suspects-header flex">
            <h3>Suspects</h3>
            <button onClick={() => navigate("/add-suspect")}>+</button>
          </div>
          <div className="case-suspects-body flex center wrap scrollable-div">
            {suspects.map((suspect) => (
              <button key={suspect._id} onClick={() => openModal(suspect)}>
                <img
                  src={suspect.photos[0] || suspectImage}
                  alt={suspect.name}
                  className="suspect-image"
                />
              </button>
            ))}
          </div>
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
          <div className="case-statements-body flex center column scrollable-div">
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
                  <h4>{statement.name}</h4>
                  <p>Given on {statement.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Modals */}
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
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
