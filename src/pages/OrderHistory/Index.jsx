import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import logo from "../../img/logo1.png";
import Command from "../../components/Command/Index";
import { getData } from "../../firebase/firebaseService";

import Flatpickr from 'react-flatpickr'

import "./style.css";

const OrderHistory = () => {
  const history = useHistory();
  const [requests, setRequests] = useState([]);
  const [calendar, setCalendar] = useState(new Date());

  useEffect(() => {
    function get(data) {
      setRequests(data)
    }
    getData(calendar, get)
  }, [calendar]);

  const onClickBack = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <Button className="button button-history" value="Voltar" onClick={onClickBack} />
      <div className="container-history">
        {/* <img className="img-history" src={logo} alt="logo" /> */}
        <Flatpickr className="input calendar"
          onChange={(e) => setCalendar(e[0])}
          // onChange={ item setCalendar}
          value={calendar}
        />
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