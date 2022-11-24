import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        type="text"
        name="name"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
      {/* <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label> */}
      {/* <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label> */}
      {/* <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label> */}
      <Button variant="contained" type="submit">
        Register
      </Button>
      {/* <button type="submit">Register</button> */}
    </form>
  );
};
