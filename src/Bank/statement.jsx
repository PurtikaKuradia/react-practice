import { useContext } from "react";
import { BankDataContext } from "./bankDataContext";
import Box from "@mui/material/Box";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function Statement() {
  const { balance, creditList, isStatementModalOpen, setIsStatementModalOpen } =
    useContext(BankDataContext);

  const handleClose = () => {
    setIsStatementModalOpen(false);
  };
  const arrayDataItems = creditList.map((i) => (
    <div>
      <li>
        {i.type} - {i.amount}
      </li>
    </div>
  ));
  return (
    <div>
      <Dialog
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 4,
          py: 4,
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
            border: "1px solid",
            borderColor: "grey.300",
            borderLeft: 0,
            borderRight: 0,
          }}
        >
          {arrayDataItems}
        </DialogContent>
      </Dialog>
    </div>
    // <div>
    //   <Modal
    //     open={isStatementModalOpen}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box
    //       sx={{
    //         position: "absolute",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //         width: 300,
    //         "& > :not(style)": { m: 2, width: "30ch" },
    //         bgcolor: "background.paper",
    //         border: "2px solid #000",
    //         boxShadow: 24,
    //         p: 4,
    //       }}
    //     >
    //       <Box sx={{ py: 2 }}>
    //         <Typography
    //           variant="body2"
    //           sx={{ pt: 1, pb: 2, color: "grey.700" }}
    //         >
    //           Current Balance: {balance}
    //         </Typography>
    //       </Box>
    //       {arrayDataItems}
    //     </Box>
    //   </Modal>
    // </div>
  );
}
