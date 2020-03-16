import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../../layout/user/navbar/Navbar'
import { Banner } from '../../layout/user/homepage/Banner'
import { QuickLinks } from '../../layout/user/homepage/QuickLinks'
import { About } from '../../layout/user/homepage/About'
import { HoursOfOperation } from '../../layout/ui/HoursOfOperation'
import { Logo, EmpireFooter, NavBarContact } from '../../layout/ui/Layout'
import Map from '../../layout/ui/Map'
import Header from "../../layout/user/navbar/Header";
const { Content } = Layout;




const Homepage = () => {

    return (
        <Layout className="layout">
            <Header/>
            <Content >
                <Banner />
                <QuickLinks />
                <About />
                <HoursOfOperation />
                <Map />
            </Content>
            <EmpireFooter />
        </Layout>
    )
}

export default Homepage