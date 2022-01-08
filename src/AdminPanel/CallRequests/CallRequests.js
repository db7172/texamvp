import React, { useEffect, useState } from "react";
import "./callRequests.css";
import firebase from "../../firebase";

const CallRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("requests")
      .get()
      .then((querySnap) => {
        setRequests(querySnap.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="call-requests">
      <table class="fl-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>
                  +{request.prefix}
                  {request.number}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CallRequests;
