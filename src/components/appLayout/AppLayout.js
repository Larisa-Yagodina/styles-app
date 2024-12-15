import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import StylePage from "../stylePage/StylePage";
import {allStyles} from '../../assets/serverMock/allStyles';
import {createTheme} from "@mui/material";

export const PAGES = {
    creatingDNK: 'creatingDNK',
    basicStylesReview: 'basicStylesReview',
    sport: 'sport',
    grange: 'grange',
    boho: 'boho',
    minimalism: 'minimalism',
}

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Basics',
    },
    {
        kind: 'page',
        segment: 'creatingDNK',
        title: 'Creating DNK',
        // children: <StylePage stylePageItem={allStyles[0]} />,
        // icon: <DashboardIcon />,
    },
    {
        segment: PAGES.basicStylesReview,
        title: 'Basic styles review',
        // icon: <ShoppingCartIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Styles',
    },
    {
        segment: 'basicStyles',
        title: 'Basic styles',
        icon: <BarChartIcon />,
        children: [
            {
                segment: PAGES.sport,
                title: 'Sport chic',
                icon: <DescriptionIcon />,
            },
            {
                segment: PAGES.grange,
                title: 'Grange',
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: 'otherStyles',
        title: 'Other styles',
        icon: <BarChartIcon />,
        children: [
            {
                segment: PAGES.boho,
                title: 'Boho',
                icon: <DescriptionIcon />,
            },
            {
                segment: PAGES.minimalism,
                title: 'Minimalism',
                icon: <DescriptionIcon />,
            },
        ],
    },
];

const themes = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent({ pathname }) {

    console.log('Pathname - ' +  pathname)

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
            { pathname !== '/dashboard' &&
                <StylePage stylePageItem={allStyles.find(el => `/` + el.segment === pathname)} />
            }
            {/*<Typography> There will be a content {pathname} </Typography>*/}
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic() {

    const router = useDemoRouter('/dashboard');

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={themes}
            branding={{title: 'Styles Anatomy'}}
        >
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname}  />
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}

export default DashboardLayoutBasic;
