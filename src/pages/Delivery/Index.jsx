import React, { useState, useEffect } from "react";
import logo from "../../img/logo1.png";
import Button from "../../components/Button";
import Modal from "../../components/Modal/Index";
import Command from "../../components/Command/Index";
import { useHistory } from "react-router-dom";
import { getDataByStatus, updateData } from "../../firebase/firebaseService";
import "./style.css";

const Delivery = () => {
  const history = useHistory();
  const [itemSelected, setitemSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    function get(data) {
      setRequests(data);
    }
    getDataByStatus(get, 2);
  }, []);

  const handleModal = (request) => {
    setitemSelected(request);
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleFinish = () => {
    updateData(itemSelected.id, {
      status: 3,
      dateDelivery: new Date(),
    });
    setShowModal(false);
  };

  const onClickHall = () => {
    history.push("/hall");
  };

  return (
    <div className="container-delivery">
      <div className="kitchen">
        <img className="img-kitchen" src={logo} alt="logo" />
        <Button
          value="Novo pedido"
          className="button button-kitchen"
          onClick={onClickHall}
        />
      </div>

      <div className="request">
        {requests.map((request) => (
          <Command
            requests={requests}
            request={request}
            date={request.requestDate}
            onClick={() => handleModal(request)}
            command={"command-box"}
          />
        ))}
      </div>
      <Modal show={showModal} onCancel={handleCancel} onFinish={handleFinish} />
    </div>
  );
};

export default Delivery;
