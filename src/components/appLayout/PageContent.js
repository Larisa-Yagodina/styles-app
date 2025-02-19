import Box from "@mui/material/Box";
import StylePage from "../stylePage/StylePage";
import {allStyles} from "../../assets/pagesContent/allStyles";
import * as React from "react";

export function PageContent({pathname}) {


    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {pathname !== '/main' &&
                <StylePage stylePageItem={allStyles.find(el => `/` + el.segment === pathname)}/>
            }
            {/*<div> There will be a content {pathname} </div>*/}
        </Box>
    );
}
