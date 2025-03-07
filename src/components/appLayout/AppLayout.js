import * as React from 'react';
import PropTypes from 'prop-types';
import DescriptionIcon from '@mui/icons-material/Description';
import {AppProvider} from '@toolpad/core/AppProvider';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {useDemoRouter} from '@toolpad/core/internal';
import {createTheme} from "@mui/material";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import image1 from '../../assets/images/icon-1.png'
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from "../../redux/reduces";
import {getIsAuth} from "../../redux/selectors";
import {PageContent} from "./PageContent";
import {MODAL_TYPES} from "../../ui/modalWindow/ModalWindow";

export const PAGES = {
    creatingDNK: 'creatingDNK',
    basicStylesReview: 'basicStylesReview',
    howToStyleBase: 'howToStyleBase',
    mixingStyles: 'mixingStyles',
    sport: 'sport',
    grange: 'grange',
    dandy: 'dandy',
    jockey: 'jockey',
    safari: 'safari',
    military: 'military',
    marine: 'marine',
    preppy: 'preppy',
    romantic: 'romantic',
    feminine: 'feminine',
    business: 'business',
    smart: 'smart',
    retro: 'retro',
    vintage: 'vintage',
    drama: 'drama',
    ethnic: 'ethnic',
    boho: 'boho',
    classic: 'classic',
    businessCasual: 'businessCasual',
    smartCasual: 'smartCasual',
    minimalism: 'minimalism',
    deconstructivism: 'deconstructivism',
    conceptualism: 'conceptualism',
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
        icon: <ColorLensOutlinedIcon/>,
    },
    {
        segment: PAGES.basicStylesReview,
        title: 'Basic styles review',
        icon: <ListAltOutlinedIcon/>,
    },
    {
        segment: PAGES.howToStyleBase,
        title: 'Styling base',
        icon: <ColorLensOutlinedIcon/>,
    },
    {
        segment: PAGES.mixingStyles,
        title: 'Mixing styles',
        icon: <AutoGraphIcon/>,
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
        icon: <AutoGraphIcon/>,
        children: [
            {
                segment: PAGES.sport,
                title: 'Sport chic',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.grange,
                title: 'Grange',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.dandy,
                title: 'Dandy',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.jockey,
                title: 'Jockey',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.safari,
                title: 'Safari',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.military,
                title: 'Military',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.preppy,
                title: 'Preppy',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.marine,
                title: 'Marine',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.business,
                title: 'Business casual',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.smart,
                title: 'Smart casual',
                icon: <DescriptionIcon/>,
            },
        ],
    },
    {
        segment: 'otherStyles',
        title: 'Other styles',
        icon: <AutoGraphIcon/>,
        children: [
            {
                segment: PAGES.romantic,
                title: 'Romantic',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.feminine,
                title: 'Feminine',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.drama,
                title: 'Drama',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.retro,
                title: 'Retro',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.vintage,
                title: 'Vintage',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.boho,
                title: 'Boho',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.classic,
                title: 'Classic',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.minimalism,
                title: 'Minimalism',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.deconstructivism,
                title: 'Deconstructivism',
                icon: <DescriptionIcon/>,
            },
            {
                segment: PAGES.conceptualism,
                title: 'Conceptualism',
                icon: <DescriptionIcon/>,
            },
        ],
    },
];

const themes = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {light: true, dark: true},
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

PageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic() {

    const router = useDemoRouter('/main');
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth)
    const user = isAuth
        ? {image: "https://img.freepik.com/premium-vector/girl-with-laptop-vector_951778-16402.jpg?size=626&ext=jpg&ga=GA1.1.1027489879.1705504765&semt=ais"}
        : null;

    const signIn = () => {
        dispatch(modalActions.openModal({type: MODAL_TYPES.AUTH}))
    }
    const signOut = () => {
        localStorage.removeItem('isAuth');
        dispatch(modalActions.signOut())
    }

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={themes}
            branding={
                {
                    title: 'Styles Anatomy',
                    logo: <img className='logo_image' src={image1} alt="main"/>
                }
            }
            authentication={
                {
                    signIn,
                    signOut,
                }
            }
            session={{
                user,
            }}

        >
            <DashboardLayout>
                <PageContent pathname={router.pathname}/>
            </DashboardLayout>

        </AppProvider>
        // preview-end
    );
}

export default DashboardLayoutBasic;
