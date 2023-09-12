import { Button } from "@mui/material";
import { DeleteForeverRounded } from "@mui/icons-material";

export const DeleteButton = ({onclick}) => {

    return (
        <Button 
            variant="outlined" 
            color="error"
            size="small"
            onClick={onclick}
            startIcon={<DeleteForeverRounded />}
        >
            Delete
        </Button>
    )
}