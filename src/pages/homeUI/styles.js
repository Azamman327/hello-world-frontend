import { makeStyles } from "@material-ui/core/styles";
import { SosOutlined } from "@mui/icons-material";

export const useStyles = makeStyles({
    box: {
        // width: "454px",
        height: "100%",

        padding: "40px 0px 10px 16px",

        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.14), 0px 0px 30px rgba(0, 0, 0, 0.12), 0px 0px 10px rgba(0, 0, 0, 0.2)"
    },
    list: {
        width: "100%",
        '&:hover': {
            background: "linear-gradient(0deg, rgba(187, 134, 252, 0.12), rgba(187, 134, 252, 0.12)), #FFFFFF",
        },
    },

});