import React, {useState} from 'react';
import {
    Nav,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

function Menu() {

    const [dropdown1Open, setDropdown1Open] = useState(false);
    const toggle1 = () => setDropdown1Open(!dropdown1Open);

    const [dropdown2Open, setDropdown2Open] = useState(false);
    const toggle2 = () => setDropdown2Open(!dropdown2Open);

    const [dropdown3Open, setDropdown3Open] = useState(false);
    const toggle3 = () => setDropdown3Open(!dropdown3Open);

    return (
        <Nav tabs >
            <div className={'header'}>
            <div>
                <h1>Styles anatomy</h1>
            </div>
            <Dropdown nav isOpen={dropdown1Open} toggle={toggle1}>
                <DropdownToggle nav caret>
                    Basics
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Creating DNK</DropdownItem>
                    <DropdownItem>Basic styles review</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>Combining styles</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Dropdown nav isOpen={dropdown2Open} toggle={toggle2}>
                <DropdownToggle nav caret>
                    Basic Styles
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Business casual</DropdownItem>
                    <DropdownItem>Dandy</DropdownItem>
                    <DropdownItem>Grange</DropdownItem>
                    <DropdownItem>Jockey</DropdownItem>
                    <DropdownItem>Military</DropdownItem>
                    <DropdownItem>Preppy</DropdownItem>
                    <DropdownItem>Safari</DropdownItem>
                    <DropdownItem>Sea style</DropdownItem>
                    <DropdownItem>Smart casual</DropdownItem>
                    <DropdownItem>Sport chic</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Dropdown nav isOpen={dropdown3Open} toggle={toggle3}>
                <DropdownToggle nav caret>
                    Nonbasic Styles
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Boho</DropdownItem>
                    <DropdownItem>Minimalism</DropdownItem>
                    <DropdownItem>Conceptualism</DropdownItem>

                </DropdownMenu>
            </Dropdown>
            </div>
        </Nav>
    );
}


export default Menu;
