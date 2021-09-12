import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowStudent() {
  const classes = useStyles();
  const [studentList, showStudentList] = useState([]);

  const deleteStudent = (id)=>{
    axios.delete(`http://localhost:5000/students/${id}`).then(()=>{
      window.location.reload(false);
    })
  }

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((allStudents) => {
      showStudentList(allStudents.data);
    });
  }, []);

  return (
    <>
      <h1>All Students</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" fontWeight="bold">
                RegId
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Name
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Course
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Section
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((student, key) => (
              <TableRow key={student.key}>
                <TableCell align="center" component="th" scope="row">
                  {student.regId}
                </TableCell>
                <TableCell align="center">{student.name}</TableCell>
                <TableCell align="center">{student.course}</TableCell>
                <TableCell align="center">{student.section}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="small" onClick={()=> deleteStudent(student._id)}/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
