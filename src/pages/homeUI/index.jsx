import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { useStyles } from "./styles";
import { useLoaderData, redirect } from "react-router-dom";

// import LectureProf from "./professor";
// import LectureStudent from "./student";
// import LectureForm from "./professor/Form";
// import ClassRoom from "../ClassRoom";
// import ResultStudent from "../Result/Student";

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'; 
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import { getSubjectList } from "./hooks";

import { isLogin } from "../../services/axiosPromise";

let classList;

export const loader = async ({ params }) => {
  if(!(await isLogin())) return redirect("/account");

  const userId = Number(sessionStorage.getItem('userId'));
  let data;

  const result = getSubjectList(userId);
  console.log("sidebar 실행");
  result.then((list) => {
    console.log(list);
    for (let i = 0; i < Object.keys(list['classes']).length; i++) {
      // console.log(list['classes'][i]);
      // console.log(Object.keys(list['classes']).length);
      data.put(list['classes'][i]);
      console.log(list['classes'][i]);
    }
    console.log("data");
    console.log(data);
  });

  return data;
};


export default function TemporaryDrawer(props) {

  const navigate = useNavigate();
  const { tests } = useLoaderData();
  console.log(tests);

  const user_info = props.data;

  console.log(user_info);

  // let name = "전유영"
  // let grade = "1"
  // let id = "20201015"

  const classes = useStyles();

  return (
    <span>
      <Box className = {classes.box}>
        <div className={styles.info}>
          <h1>{user_info['name']}</h1><br/>
          <Button onClick={()=> navigate("/account", { replace: true}) }>로그아웃</Button>
          <div>
            <span>{user_info['email']}</span>
          </div>
        </div>
        <Divider />
          <List>
            {/* {lecture_list.map((lecture) => (
              <ListItem 
                key={Number(lecture['lecture_id'])}
                onClick={() => {navigate(`/classes/${lecture['lecture_id']}`, {state: lecture['lecture_id']})}}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary={lecture['name']} />
                </ListItemButton>
              </ListItem>
            ))} */}
          </List>
      </Box>  
    </span>
  );
}

