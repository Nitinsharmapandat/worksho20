import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useStyles } from "./mainStyle";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

export default function Main() {
  const demo = useStyles();
  return (
    <div className={demo.mainDiv}>
      <div className={demo.insidemainDiv}>
        <div className={demo.margin}>
          <div className={demo.mainTop}>
            <span className={demo.span1}>Patients Information</span>
            <span className={demo.span2}>Last Updated Today...</span>
          </div>

          <div className={demo.below1stDiv}>
            <div>
              <img alt="img" src="user1.jpg"   style={{
              
                      height: "60px",
                      width: "60px",
                    }} />
            </div>
            <div>
              <p className={demo.sara}>SARA SMITH</p>

              <div className={demo.Detail}>
                <div className={demo.insideDetail}>
                  <div>
                    <p className={demo.inDetail1}>Phone:</p>
                    <p className={demo.inDetail1}>Email:</p>
                    <p className={demo.inDetail1}>Gender:</p>
                    <p className={demo.inDetail1}>Age:</p>
                  </div>
                  <div>
                    <p className={demo.inDetail2}>999887766</p>
                    <p className={demo.inDetail2}>sarasmity@gmail.com</p>
                    <p className={demo.inDetail2}>Female</p>
                    <p className={demo.inDetail2}>39</p>
                  </div>
                </div>

                <div className={demo.insideDetail}>
                  <div>
                    <p className={demo.inDetail1}>Surgery Type:</p>
                    <p className={demo.inDetail1}>Surgery Date:</p>
                    <p className={demo.inDetail1}>Height(cm):</p>
                    <p className={demo.inDetail1}>Weight(lb):</p>
                    <p className={demo.inDetail1}>BMI:</p>
                  </div>
                  <div>
                    <p className={demo.inDetail2}>Rotator Cuff Repair</p>
                    <p className={demo.inDetail2}>15 Aug 2020</p>
                    <p className={demo.inDetail2}>163</p>
                    <p className={demo.inDetail2}>110</p>
                    <p className={demo.inDetail2}>19</p>
                  </div>
                </div>

                <div className={demo.insideDetail}>
                  <div>
                    <p className={demo.inDetail1}>Anesthesiologist:</p>
                    <p className={demo.inDetail1}>Anesthesiologist Phone:</p>
                    <p className={demo.inDetail1}>anesthesiologist Email:</p>
                  </div>
                  <div>
                    <p className={demo.inDetail2}>Dr.Christina Hardway</p>
                    <p className={demo.inDetail2}>9876543210</p>
                    <p className={demo.inDetail2}>christina@1232gmail.com</p>
                  </div>
                </div>

                <div className={demo.insideDetail1}>
                  <p className={demo.inDetail1}>Surgury Clearance</p>
                  <Avatar
                    style={{
                      backgroundColor: "#43C43F",
                      height: "60px",
                      width: "60px",
                    }}
                    className={demo.avatar}
                  >
                    Yes
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
          <ul className={demo.list}>
            <li className={demo.li}>List of Prior Surgeries</li>
            <li className={demo.li}>List of Medical Diagnosis</li>
            <li className={demo.li}>List of Medications</li>
            <li className={demo.li}>Airway Evaluation</li>
            <li className={demo.li}>
              Anesthesia Clearance and Recommendation
            </li>
          </ul>
        </div>
      </div>
      <div className={demo.margin}>
        <div className={demo.aboveTable}>
          <div>
            <p className={demo.p}>First Time Surgery</p>
            <p className={demo.para}>No</p>
          </div>

          <div>
            <p className={demo.p}>
              Family History of Surgical Complications ?
            </p>
            <p className={demo.para}>Yes</p>
          </div>
          <div>
            <p className={demo.p}>If Yes, please provide more details</p>
            <p className={demo.para}>
              In laboris reprehenderit excepteur enim mollit nulla anim dolore
              qui ex ullamco. Eiusmod cillum elit sit aliqua commodo quis
              exercitation reprehenderit nisi et deserunt eiusmod do. Aute nisi
              velit velit ad.
            </p>
          </div>
        </div>
        <span className={demo.span}>Previous Surgeries</span>
        <table className={demo.Table}>
          <tr className={demo.th}>
            <td>Surgery Type</td>
            <td>Date</td>
            <td>Anesthesia Type</td>
            <td>Surgical Complications</td>
            <td>
              Anesthetic Complications(nausea,vomiting,difficult intubation)
            </td>
          </tr>
          <tr className={demo.tr}>
            <td>Shoulder reconstruction</td>
            <td>January 2008</td>
            <td>General "Breathing Tube"</td>
            <td>No</td>
            <td className={demo.td}>
              No
              <td>
                <DeleteIcon /> <CreateIcon />
              </td>
            </td>
          </tr>
        </table>
        <button className={demo.button}>
          <span className={demo.plus}>+</span>Add Surgery
        </button>
      </div>
    </div>
  );
}
