import "./StateData.css";
import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Table } from "react-bootstrap";
import Axios from "axios";

const StateData = () => {
  const [stateData, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://api.covid19india.org/state_district_wise.json").then(
      (res) => {
        setData(res.data);
      }
    );
  }, []);

  let allState = Object.keys(stateData);
  allState.shift();
  return (
    <div
      className="scroll"
      style={{ width: "100%", height: "100vh", overflowY: "auto" }}
    >
      {allState?.length > 0 ? (
        <>
          <div className="container">
            <div className="row pt-5">
              <div className="col-12">
                {allState.map((data, index) => {
                  let district = stateData[data].districtData;
                  let districtName = Object.keys(district);
                  let total_active = 0;
                  let total_confirmed = 0;
                  let total_recover = 0;
                  let total_death = 0;
                  let district_list = [];

                  for (let x in district) {
                    total_active = total_active + district[x].active;
                    total_confirmed = total_confirmed + district[x].confirmed;
                    total_death = total_death + district[x].deceased;
                    total_recover = total_recover + district[x].recovered;
                    let ob = district[x];
                    ob["district_name"] = [x];
                    district_list.push(district[x]);
                  }

                  return (
                    <Accordion defaultActiveKey="1">
                      <Card className="bg-light">
                        <Card.Header className="bg-success">
                          <Accordion.Toggle
                            as={Button}
                            variant=""
                            eventKey="0"
                            className="bg-light"
                          >
                            {data}{" "}
                            <span className="bg-info ">
                              [Total Confirmered:{total_confirmed}]
                            </span>{" "}
                            <span className="bg-warning ">
                              [Total Active:{total_active}]
                            </span>{" "}
                            <span className="bg-light ">
                              [Total Recovery:{total_recover}]
                            </span>{" "}
                            <span className="bg-danger">
                              [Total Death:{total_death} ]
                            </span>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Table
                              striped
                              bordered
                              hover
                              className="bg-warning"
                              responsive
                            >
                              <thead>
                                <tr>
                                  <th>No</th>
                                  <th>Districts</th>
                                  <th>Confirmered</th>
                                  <th>Active Case</th>
                                  <th>Recovery Case</th>
                                  <th>Death</th>
                                </tr>
                              </thead>
                              <tbody>
                                {district_list.map((item, index) => {
                                  return (
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{item.district_name}</td>
                                      <td>{item.confirmed}</td>
                                      <td>{item.active}</td>
                                      <td>{item.recovered}</td>
                                      <td>{item.deceased}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default StateData;
