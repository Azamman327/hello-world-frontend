import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Timer from "./timer";

import styles from "./style.module.scss";
import { AppBar, Toolbar, Button } from "@mui/material";

export default () => {
  const { name, classData } = useLoaderData();

  return (
    <AppBar className={styles.header}>
      <Toolbar position="fixed">
        <div>{classData.className}: {name}</div>
        <div>
          <Timer />
          <Button color="secondary" variant="contained">
            시험 종료
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
