import type {ReactNode} from "react";
import {NavLink} from "react-router";
import {Button} from "@mui/material";

export default function MenuItemLink({children, to}:{children:ReactNode, to:string}){

    return (
        <Button component={NavLink}
                to={to}
                variant="outlined"
                sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "rgba(255,255,255,0.85)",
                    borderColor: "rgba(255,255,255,0.5)",
                    "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderColor: "rgba(255,255,255,0.8)",
                    },
                    '&.active':{
                        color: 'yellow'
                    }
                }}
        >

            {children}
        </Button>

    )
}