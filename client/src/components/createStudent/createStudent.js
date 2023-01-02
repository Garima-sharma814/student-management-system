import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddStudent() {
  const classes = useStyles();
  const [student, setStudent] = useState({
    regId: 0,
    name: '',
    course: '',
    section: '',
  });
  const createStudent = () => {
    axios.post('http://localhost:80/students', student).then(() => {
      window.location.reload(false);
    });
  };
  return (
    <>
      <h1>Add your data</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Reg. Id"
          value={student.regId}
          onChange={(event) => {
            setStudent({ ...student, regId: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Name"
          value={student.name}
          onChange={(event) => {
            setStudent({ ...student, name: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Course"
          value={student.course}
          onChange={(event) => {
            setStudent({ ...student, course: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Section"
          value={student.section}
          onChange={(event) => {
            setStudent({ ...student, section: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
          Submit
        </Button>
      </form>
    </>
  );
}

