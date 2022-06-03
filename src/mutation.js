import {
  ADMIN_LOGIN,
  EDIT_PAYMENT,
  EDIT_STUDENT,
  GET_EXSTUDENT,
  GET_EXSTUDENTS,
  GET_STUDENT,
  GET_STUDENTS,
  REGISTER_STUDENT,
  SET_SCHOOLFEES,
  WITHDRAW_STUDENT,
} from "./graphql";

function RegisterStudent() {
  let input;
  const [registerStudent, { data, loading, error }] =
    useMutation(REGISTER_STUDENT);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
}
function EditStudent() {
  let input;
  const [editStudent, { data, loading, error }] = useMutation(EDIT_STUDENT);
  if (loading) return "Editting...";
  if (error) return `Submission error! ${error.message}`;
}
function EditPayment() {
  let input;
  const [editPayment, { data, loading, error }] = useMutation(EDIT_PAYMENT);
  if (loading) return "Editting...";
  if (error) return `Submission error! ${error.message}`;
}
function SetSchoolfees() {
  let input;
  const [setSchoolfees, { data, loading, error }] = useMutation(SET_SCHOOLFEES);
  if (loading) return "Editting...";
  if (error) return `Submission error! ${error.message}`;
}
function AdminLogin() {
  let input;
  const [adminLogin, { data, loading, error }] = useMutation(ADMIN_LOGIN);
  if (loading) return "Editting...";
  if (error) return `Submission error! ${error.message}`;
}
function AdminLogin() {
  let input;
  const [withdrawStudent, { data, loading, error }] =
    useMutation(WITHDRAW_STUDENT);
  if (loading) return "Withdrawing...";
  if (error) return `Submission error! ${error.message}`;
}
function GetStudents() {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
}
function GetExStudents() {
  const { loading, error, data } = useQuery(GET_EXSTUDENTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
}
function GetStudent() {
  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { admissionNumber },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
}
function GetExStudent() {
  const { loading, error, data } = useQuery(GET_EXSTUDENT, {
    variables: { admissionNumber },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
}
