const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderid');
const apiUrl = `https://nosostats.com:49443/api/orderFinder/${orderId}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const order = data.data.order;
    const inputSegment = order.inputSegment;
    const receiverLink = `addresslookup.html?addresslookup=${order.receiver}`;

    const orderData = {
      "Order ID": order.orderId,
      "Order Type": order.orderType,
      "Reference": order.reference,
      "Receiver": `<a href="${receiverLink}">${order.receiver}</a>`,
      "Order Amount (Noso)": order.orderAmountInNoso,
      "Order Amount (Pedro)": order.orderAmountInPedro,
      "Order Fee (Noso)": order.orderFeeInNoso,
      "Order Fee (Pedro)": order.orderFeeInPedro,
      "Control Type": order.controlType,
      "SN": order.sn,
      "Timestamp": order.timestamp
    };

    // Add input segment data to orderData
    inputSegment.forEach((segment, index) => {
      orderData[`Input Segment ${index+1} Sender`] = `<a href="addresslookup.html?addresslookup=${segment.sender}">${segment.sender}</a>`;
      orderData[`Input Segment ${index+1} Transfer ID`] = segment.transferId;
      orderData[`Input Segment ${index+1} Order Amount (Pedro)`] = segment.orderAmountInPedro;
      orderData[`Input Segment ${index+1} Order Fee (Pedro)`] = segment.orderFeeInPedro;
      orderData[`Input Segment ${index+1} Order Signature`] = segment.orderSignature;
    });

    const table = document.getElementById("orderTable");
    const tableBody = document.createElement("tbody");

    Object.entries(orderData).forEach(([key, value]) => {
      const row = document.createElement("tr");
      const header = document.createElement("td");
      const cell = document.createElement("td");

      header.appendChild(document.createTextNode(key));
      cell.innerHTML = value;

      row.appendChild(header);
      row.appendChild(cell);
      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
  })
  .catch(error => console.error(error));
