import { Component } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

class Dialog extends Component{
    render(){
        return(
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
            >
              <DialogTitle id="alert-dialog-title">
                {`คุณต้องการจะลบ วิชา ${currentSubject.name} ใช่หรือไม่ ?`}
              </DialogTitle>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    toDeleteSubject(currentSubject.id);
                    handleClose();
                  }}
                >
                  Yes
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
        )
    }
}

export default Dialog