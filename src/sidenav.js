import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useStyles } from "./sidenavStyle";
import SearchBar from "material-ui-search-bar";
import { borderRadius } from "@mui/system";


export default function SideNav() {
  const demo = useStyles();
  return (
    <Paper style={{ background: "#E8F5FE" }} className={demo.mainDiv}>
      <span className={demo.span}>Patients</span>
      <div className={demo.sbar}>
      <SearchBar value="search"/>
      </div>

      <Paper>
        <div className={demo.eachGrid1}>
          <span className={demo.paper}>
            <Grid>
              <img className={demo.user1} src="user1.jpg" alt="img" />
            </Grid>

            <Grid>
              <span className={demo.typo1}> Sara Smith </span>
              <span className={demo.typo2}> 15 Aug 2020 </span>
            </Grid>
          </span>

          <Grid className={demo.dot}>
            <img style={{ height: "15px", borderRadius:"40px" }} alt="dot" src="green dot.png" />
          </Grid>
        </div>
      </Paper>
      <Paper className={demo.eachGrid}>
        <span className={demo.paper}>
          <Grid>
            <img src="user2.png" alt="img" />
          </Grid>

          <Grid>
            <span className={demo.typo1}>James Johnson</span>
            <span className={demo.typo2}>No Clearance</span>
          </Grid>
        </span>
        <Grid className={demo.dot}>
          <img style={{ height: "20px" }} alt="dot" src="red dot.png" />
        </Grid>
      </Paper>

      <Paper className={demo.eachGrid}>
        <span className={demo.paper}>
          <Grid>
            <img src="user3.png" alt="img" />
          </Grid>
          <Grid>
            <span className={demo.typo1}>Patrice Page</span>
            <span className={demo.typo2}>19 Aug 2020</span>
          </Grid>
        </span>
        <Grid className={demo.dot}>
          <img style={{ height: "15px" }} alt="dot" src="green dot.png" />
        </Grid>
      </Paper>

      <Paper className={demo.eachGrid}>
        <span className={demo.paper}>
          <Grid>
            <img src="user4.png" alt="img" />
          </Grid>

          <Grid>
            <span className={demo.typo1}>Dereck Diamon</span>
            <span className={demo.typo2}>21 Aug 2021 </span>
          </Grid>
        </span>
        <Grid className={demo.dot}>
          <img style={{ height: "15px" }} alt="dot" src="green dot.png" />
        </Grid>
      </Paper>
    </Paper>
  );
}
