import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

// const initialValues = {
//   email: '',
//   password: '',
// };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      {/* <span>Welcome</span> */}
      <TextField
        id="outlined-basic"
        label="Please write your email"
        variant="outlined"
        type="email"
        name="email"
      />
      <TextField
        id="outlined-basic"
        label="Please write your password"
        variant="outlined"
        type="password"
        name="password"
      />
      {/* <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label> */}
      {/* <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label> */}
      <Button variant="contained" type="submit">
        Log In
      </Button>
      {/* <button type="submit">Log In</button> */}
    </form>
  );
};

//  return (
//    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//      {/* <span>Welcome</span> */}
//      <TextField
//        id="outlined-basic"
//        label="Please write your email"
//        variant="outlined"
//        type="email"
//        name="email"
//      />
//      <TextField
//        id="outlined-basic"
//        label="Please write your password"
//        variant="outlined"
//        type="password"
//        name="password"
//      />
//      {/* <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label> */}
//      {/* <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label> */}
//      <Button variant="contained" type="submit">
//        Log In
//      </Button>
//      {/* <button type="submit">Log In</button> */}
//    </form>
//  );

// return (
//   <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//     <label className={css.label}>
//       Email
//       <input type="email" name="email" />
//     </label>
//     <label className={css.label}>
//       Password
//       <input type="password" name="password" />
//     </label>
//     <button type="submit">Log In</button>
//   </form>
// );
