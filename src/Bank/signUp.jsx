import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();

  return (
    <Box
      width={300}
      display="flex"
      alignItems="center"
      gap={3}
      p={1}
      sx={{
        "& > :not(style)": { m: 3, width: "40ch" },
        border: "1px solid",
        borderColor: "grey.500",
        borderRadius: 1,
      }}
      autoComplete="off"
    >
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" gutterBottom>
          Sign-Up
        </Typography>
        <TextField
          sx={{ m: 1, width: "30ch" }}
          id="outlined-basic"
          label="Name"
          size="small"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          sx={{ m: 1, width: "30ch" }}
          id="outlined-basic"
          label="Age"
          size="small"
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          sx={{ m: 1, width: "30ch" }}
          id="outlined-basic"
          label="Email"
          size="small"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ m: 1, width: "30ch" }}
          type="password"
          id="filled-basic"
          label="Password"
          size="small"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ cursor: "grab", size: "small" }}
          variant="contained"
          onClick={() => {
            if (email?.trim()) {
              localStorage.setItem(
                email,
                JSON.stringify({
                  name,
                  age,
                  email,
                  password,
                  balance: 0,
                  CreditList,
                })
              );
              navigate("/bank/account");
            }
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
    // <div>
    /* <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button
          onClick={() => {
            if (email?.trim()) {
              localStorage.setItem(
                email,
                JSON.stringify({ name, age, email, password, balance: 0 })
              );
              navigate("/bank/account");
            }
          }}
        >
          Submit
        </button>
      </div> */
    /* </div> */
  );
}
