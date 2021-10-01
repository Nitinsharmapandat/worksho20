import React from "react";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { useStyles } from "./headerStyle";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";

function Header() {
  const demo = useStyles();

  return (
    <Container >
      <div className={demo.headerMain}>
        <ul className={demo.leftSide}>
          <li className={demo.li}>
            <img className={demo.img} src="logo.png" alt="logoImage"></img>
          </li>

          <li className={(demo.li, demo.sli)}>PATIENTS</li>

          <li className={demo.li}>CALENDER</li>

          <li className={demo.li}>USERS</li>

          <li className={demo.li}>BILLING</li>
        </ul>

        <div className={demo.rightSide}>
          <NotificationsSharpIcon
            fontSize="medium"
            className={demo.notificatioIcon}
          />


          <Avatar
  alt="Remy Sharp"
  src="profile1.jpg"
  sx={{ width: 27, height: 27 }}
/>
        

        </div>
      </div>
    </Container>
  );
}

export default Header;
