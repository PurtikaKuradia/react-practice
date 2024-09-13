import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BankDataContext } from "./bankDataContext";
import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setLoggedIn } = useContext(BankDataContext);
  const navigate = useNavigate();
  const theme = useTheme();

  console.log("==> login", theme);
  return (
    <>
     
      <Box
        height={280}
        width={300}
        my={10}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{
          "& > :not(style)": { m: 6, width: "40ch" },
          border: "1px solid",
          borderColor: "grey.500",
          borderRadius: 1,
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Stack
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" gutterBottom>
            Account Login
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            id="filled-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              const user = JSON.parse(localStorage.getItem(email));
              if (user && user.password === password) {
                navigate("/bank/account");
                setLoggedIn(true);
                console.log(user);
                console.log("Password", user.password);
              } else {
                alert("Please Enter correct Password");
              }
            }}
          >
            SIGN IN
          </Button>
        </Stack>
      </Box>
    </>
    /*{" "}
      <div>
        <button
          onClick={() => {
            navigate("/bank/sign-up");
          }}
        >
          Sign-up
        </button>
      </div>{" "}
      */
  );
}
