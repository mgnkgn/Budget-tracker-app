import React from "react";
import { Card } from "@mui/material";
import ListItems from "./ListItems";

const TransactionList = () => {
  return (
    <div className="transactions-list">
      <Card
        sx={{
          minWidth: 275,
          width: { xs: "85%", md: "100%" },
          height: { xs: "12rem", md: "15rem" },
          borderRadius: ".5rem",
          // background: "linear-gradient(90deg,#00D7FF,#0096FF)",
          background: "transparent",
          overflow: "auto",
          boxShadow: " -3px -8px rgba(0, 0, 0, 0.2)",
          borderTop: "1.5px solid  rgba(0,220,220,0.75)",
          borderLeft: "1.5px solid rgba(0,220,220,0.75)",
        }}
      >
        <ListItems></ListItems>
      </Card>
    </div>
  );
};

export default TransactionList;
