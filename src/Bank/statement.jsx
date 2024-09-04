import { useContext } from "react";
import { BankDataContext } from "./bankDataContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Statement() {
  const { creditList, isStatementModalOpen, setIsStatementModalOpen } =
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
      <Modal
        open={isStatementModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            "& > :not(style)": { m: 2, width: "30ch" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {arrayDataItems}
        </Box>
      </Modal>
    </div>
  );
}
