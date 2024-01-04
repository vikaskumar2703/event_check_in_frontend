import React, { useEffect, useState } from "react";

import { Html5QrcodeScanner } from "html5-qrcode";

export const RevertCheckIn = () => {
  const [scanResult, setScanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 250 },
      fps: 5,
    });

    scanner.render(success);

    function success(result) {
      setScanResult(result);
      checkInTicket(result);
    }
    function error(err) {
      console.warn(err);
    }
  }, []);

  const checkInTicket = async (qr_str) => {
    const response = await fetch(
      `http://127.0.0.1:8000/revert_check_in/?qr_str=${qr_str}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        alert(
          "Ticket Check In reverted successfully\n" +
            "Name :" +
            data.attendee.name +
            "\n" +
            "Email :" +
            data.attendee.email +
            "\n" +
            "Branch :" +
            data.attendee.branch +
            "\n" +
            "Checked In for Event:" +
            data.event.name
        );
      })
      .catch((error) => {
        alert("Error:", error.message);
      });
  };

  return (
    <div>
      <h1>Scan QR Code</h1>
      <div id="reader"></div>
    </div>
  );
};
