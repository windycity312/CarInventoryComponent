import React, {useState} from 'react'
import {Button, Drawer, Icon, Menu} from "antd";
import {Link} from "react-router-dom";
import {EmpireHeader, Logo} from "../../ui/Layout";
import windowSize from "react-window-size";

const Header = ({windowWidth}) => {
    const [visible, setVisible] = useState(false);
    const [isDesktop, setDesktop] = useState(windowWidth >= 768 ? 1 : 0);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const renderMobileNavbar = () =>{
        return [
            <Menu.Item key="1">
                <Link to="/inventory">
                    Inventory
                </Link>
            </Menu.Item>,
            <Menu.Item key="2">
                <Link to="/finance">
                    Finances
                </Link>
            </Menu.Item>,
            <Menu.Item key="3">
                <Link to="/about">
                    About Us
                </Link>
            </Menu.Item>,
            <Menu.Item key="4">
                <Link to="tel:+17787534972">Call Us <Icon type="phone" /></Link>
                <Link to="mailto:sales@empiremotors.ca" >Email Us<Icon type="mail" /></Link>
            </Menu.Item>
        ]
    };
    const renderDesktopNavbar = () => {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                style={{backgroundColor: 'black'}}>
                <Menu.Item key="1">
                    <Link to="/inventory">
                        Inventory
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/finance">
                        Finances
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/about">
                        About Us
                    </Link>
                </Menu.Item>
            </Menu>
        );
    };
    const renderNavbarContact = () => {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                style={{backgroundColor: 'black', float: 'right'}}>
                <Menu.Item>
                    <a href="tel:+17787534972">Call Us <Icon type="phone" /></a>
                </Menu.Item>
                <Menu.Item>
                    <a href="mailto:sales@empiremotors.ca" >Email Us<Icon type="mail" /></a>
                </Menu.Item>
            </Menu>
        )
    };
    return (
        <EmpireHeader>
            <Logo href="/" />
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Menu mode="vertical">{ renderMobileNavbar() }</Menu>
            </Drawer>
            <div style={{display: isDesktop ? 'flex':'none', justifyContent: 'space-between', height:'105px'}}>
                {renderDesktopNavbar()}
                {renderNavbarContact()}
            </div>

            {   isDesktop ? null : <Button onClick = {showDrawer}
                                           icon="bars" style={{float:'right', marginTop:'30px'}}
                                           ghost
            />
            }

        </EmpireHeader>
    )
};

export default windowSize(Header);
