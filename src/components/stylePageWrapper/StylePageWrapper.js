import React from 'react';
import {allStyles} from "../../assets/serverMock/allStyles";
import StylePage from "../stylePage/StylePage";

const StylePageWrapper = () => {

    return (
        <div>
            {allStyles.map(stylePageItem =>
                <StylePage stylePageItem={stylePageItem} />
            )}
        </div>
    );
};

export default StylePageWrapper;
