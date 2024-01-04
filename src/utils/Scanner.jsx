// QrScanner.js
import React, { useEffect, useState } from "react";

import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = (event) => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: 600,
      aspectRatio: 1.0,
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      checkInTicket(result);
    }
    function error(err) {
      console.warn(err);
    }
  }, []);

  const checkInTicket = async (qr_str) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/check_in/?qr_str=${qr_str}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        // let attendeeDetail = getAttendeeDetail(response.attendee_id);
        console.alert("Ticket checked in successfully" + response);
      } else {
        console.alert("Error checking in ticket:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // const getAttendeeDetail = async (attendee_id) => {   const response = await fetch("http://127.0.0.1:8000/attendee/{attendee_id}", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // });

  // }
  return (
    <div style={{ height: 100, width: 1000 }}>
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>{scanResult}</a>
          <button>checkin again</button>
        </div>
      ) : (
        <div id="reader">FAiled to scan</div>
      )}
    </div>
  );
};
export default Scanner;
