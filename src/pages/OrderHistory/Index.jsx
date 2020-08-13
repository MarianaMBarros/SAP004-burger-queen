import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Command from "../../components/Command/Index";
import { getData } from "../../firebase/firebaseService";
import Flatpickr from "react-flatpickr";
import flatpickr from "flatpickr"
import { Portuguese } from "flatpickr/dist/l10n/pt"

import logo from "../../img/logo3.png";
import "./style.css";

flatpickr.localize(Portuguese)
const OrderHistory = () => {

  const history = useHistory();
  const [requests, setRequests] = useState([]);
  const [status, setStatus] = useState(null);
  const [calendarStart, setCalendarStart] = useState(new Date());
  const [calendarFinish, setCalendarFinish] = useState(new Date());

  function getCalback(data) {
    setRequests(data);
  }

  useEffect(() => {
    getData(calendarStart, calendarFinish, status, getCalback);
  }, [calendarStart, calendarFinish, status]);

  const onClickBack = () => {
    history.push("/");
  };

  // const orderByDate = (a, b) => {
  //   return a.requestDate - b.requestDate;
  // };
  // let array = requests;
  // array.sort(orderByDate);

  // const setStatusSelect = (event) => {
  //   setStatus(Number(event.target.value) || null);
  // };

  console.log(status);
  return (
    <div className="container">
      <Button
        className="button button-history"
        value="Voltar"
        onClick={onClickBack}
      />
      <div className="history">
        <img className="img-history" src={logo} alt="logo" />
        <div className="history-style">
<<<<<<< HEAD
          <div className="style container-history">
            <span>Data Inicio
            <Flatpickr
                className="input calendar"
                onChange={(e) => setCalendarStart(e[0])}
                value={calendarStart}
                options={{ dateFormat: "d-m-Y" }}
              />
            </span>
            <span>Data Final
            <Flatpickr
                className="input calendar"
                onChange={(e) => setCalendarFinish(e[0])}
                value={calendarFinish}
                options={{ dateFormat: "d-m-Y" }}
              />
            </span>
=======
          {/* <div className="style container-history"> */}
          <div>
            Data inicio
            <Flatpickr
              className="calendar"
              onChange={(e) => setCalendarStart(e[0])}
              value={calendarStart}
            />
          </div>
          <div>
            Data final
            <Flatpickr
              className="calendar"
              onChange={(e) => setCalendarFinish(e[0])}
              value={calendarFinish}
            />
>>>>>>> layout
          </div>
          {/* </div> */}
          {/* <div className="style"> */}
          <select
            className="calendar select"
            name="select"
            onChange={(e) => setStatus(Number(e.target.value) || null)}
          >
            <option value={2}>Para Entrega</option>
            <option value={1}>Em Preparo</option>
            <option value={3}>Finalizado</option>
            <option value={""} selected>
              Todos
            </option>
          </select>

          {/* <Button
              className="button button-filter style-button"
              value="Para Entrega"
              onClick={() => setStatus(2)}
            />
            <Button
              className="button button-filter style-button"
              value="Em Preparo"
              onClick={() => setStatus(1)}
            />
            <Button
              className="button button-filter style-button"
              value="Finalizado"
              onClick={() => setStatus(3)}
            />
            <Button
              className="button button-filter style-button"
              value="Todos"
              onClick={() => setStatus(null)}
            /> */}
          {/* </div> */}
        </div>
      </div>
      <div className="request">
        {requests.map((request) => (
          <Command
            requests={requests}
            request={request}
            data={request.requestDate}
            command={"command-box"}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
