import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GET_CLASS_OF_STUDENT } from "../graphql";
import { ClassContext } from "../utils/RouteHandler";
import { Link } from "react-router-dom";

import jsPDF from "jspdf";

const PrintDebtorsList = () => {
  function printDebtorsList() {
    // const doc = new jsPDF()
    
    //  const list = document.getElementById("printArea")

    // doc.html(list, )


    var doc = new jsPDF();
    var elementHandler = {
      '#dontPrint': function (element, renderer) {
        return true;
      }
    };
    const list = document.getElementById("printArea")
    doc.html(list, {
      callback: function (doc) {
        doc.output("dataurlnewwindow");
      },
      x: 1,
      y: 1,
     autoPaging: "text",
    },
      doc.setFontSize(10),
      {
       'elementHandlers': elementHandler
    });
  }
  const { studentClass } = useContext(ClassContext);

  const { loading, error, data } = useQuery(GET_CLASS_OF_STUDENT, {
    variables: { classNumber: studentClass },
  });
  if (loading) return "Loading...";

  if (!data) return "NO DEBTOR IN THIS CLASS";
  let balances = data?.getClassOfStudents.map((student) => student.balance);
  let debtors = data?.getClassOfStudents.map((student) => {
    return student.balance > 0 && student;
  });
  const outstandingBalance = balances.reduce((a, b) => a + b);
  
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Link to="/" style={{ fontSize: 20, marginLeft: 13 }}>
        Go back
      </Link>
      <div id="printArea" style={{  margin: 10, fontSize: 8 }}>
        <h3> {studentClass} Debtors List</h3>
        <table style={{ border: "1px solid", marginTop: 10 }}>
          <thead>
            <tr>
              <th
                style={{ borderBottom: "1px solid", borderRight: "1px solid" }}
              >
                Name
              </th>
              <th
                style={{ borderBottom: "1px solid", borderRight: "1px solid" }}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {debtors?.map((student) => {
              return (
                student.cleared === false ?
                <tr
                  key={student.admissionNumber}
                  
                >
                  <td
                  >
                    {student.surname} {student.otherNames}
                  </td>

                  <td
                    style={{
                      borderBottom: "1px solid",
                      borderRight: "1px solid",
                    }}
                  >
                    {student.balance}
                  </td>
                  </tr>
                  : null
              );
            })}
            <tr>
              <th style={{ borderRight: "1px solid" }}>Total</th>
              <th># {outstandingBalance}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <input
        type="button"
        variant="contained"
        onClick={printDebtorsList}
        value="Print debtors list"
        style={{
          padding: 10,
          marginTop: 15,
          fontSize: 20,
          marginLeft: 13,
          backgroundColor: "#FF1450",
        }}
      />
    </div>
  );
};

export default PrintDebtorsList;
