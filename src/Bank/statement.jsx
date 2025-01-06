import { useContext } from "react";
import { BankDataContext } from "./bankDataContext";
import Box from "@mui/material/Box";
import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const handleColor = (type, theme) => {
  return type === "credit"
    ? theme.palette.success.main
    : theme.palette.error.main;
};

export default function Statement() {
  const theme = useTheme();
  console.log("==> theme", theme);
  const { balance, creditList, isStatementModalOpen, setIsStatementModalOpen } =
    useContext(BankDataContext);

  const handleClose = () => {
    setIsStatementModalOpen(false);
  };

  const arrayDataItems = creditList.map((i) => {
    return (
      <div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: handleColor(i.type, theme), display: "inline" }}
                >
                  {i.type} - {i.amount}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
        </List>
      </div>
    );
  });
  return (
    <div>
      <Dialog
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 2,
          py: 2,
          px: 4,
        }}
        open={isStatementModalOpen}
        // onClose={handleClose}
        className="dialog-box-"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 2,
            margin: 2,
          }}
          variant="h6"
        >
          <Box
            sx={{
              color: "grey.700",
              px: 2,
            }}
          >
            Account Statement
          </Box>
          <Box sx={{ color: "grey.600" }} onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </Box>
        </DialogTitle>
        <DialogActions sx={{ px: 8 }}>Current Balance: {balance}</DialogActions>
        <DialogContent
          sx={{
            pb: 0,
            px: 2,
            margin: 2,
            borderColor: "grey.400",
            borderLeft: 0,
            borderRight: 0,
            borderTop: 0,
          }}
        >
          {arrayDataItems}
        </DialogContent>
      </Dialog>
    </div>
  );
}
