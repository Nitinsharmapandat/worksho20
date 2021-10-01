import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  leftSide: {
    
    width: "500px",
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    justifyContent: "space-between",
    marginLeft: "-140px",
    marginTop: "-.1px",
    height: "73px",
  },

  headerMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "70px",
    backgroundColor: "#FFFFFF",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent:"right",
  marginRight:"-90px",
  },
  img: {
    height: "70px",
    marginRight:"20px",
  },
  notificatioIcon: {
    margin: "11px",
  },

  li: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#0F0F0F",
    fontSize: "12px",
    fontWeight: "bold",
    width: "110px",
  },
  sli: {
    backgroundColor: "#00A0F0",
    color: "white",
    display: "flex",
    fontSize:"14px",
    justifyContent: "center",
    alignItems: "center",
    width: "110px",
  },
});
