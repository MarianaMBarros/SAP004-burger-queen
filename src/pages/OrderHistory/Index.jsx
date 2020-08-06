import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import logo from "../../img/logo1.png";
import Command from "../../components/Command/Index";
import { getData } from "../../firebase/firebaseService";
import "./style.css";

const OrderHistory = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    function get(data) {
      setRequests(data)
    }
    getData(get)
  }, []);

  const onClickBack = () => {

  };

  return (
    <div className="container">
      <Button className="button button-history" value="Voltar" onClick={onClickBack} />
      <div className="container-history">
        {/* <img className="img-history" src={logo} alt="logo" /> */}
        {/* <span>Calendario</span> */}
      </div>
      <div className="request" >
        {requests.map(request =>
          <Command request={request} />
        )}
      </div>
    </div>
  )
};

export default OrderHistory;