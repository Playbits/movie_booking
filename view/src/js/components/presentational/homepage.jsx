import React from "react";
import Banner from "../container/Banner.jsx";
import { Icon, withBaseIcon } from 'react-icons-kit';
import {heart} from 'react-icons-kit/ikons/';

const bannerSlides = [1, 2, 3];
const services = [
    {
        heading: 'BOOKING SYSTEM',
        icon: <Icon size='64' icon={heart} />,
        content: "OMB comes with a fully working booking system & an amazing visual cinema layout generator."
    },
    {
        heading: 'MOVIES IMPORTER',
        icon: '',
        content: "OMB comes with a fully working booking system & an amazing visual cinema layout generator."
    },
    {
        heading: 'CINEMA LOCATIONS',
        icon: '',
        content: "With OMB, you can easily create and manage cinema lounges, locations and also coffee & bar menus."
    }
];

export const CompanyServices = (props) => {
    const services = props.services;
    const serviceSection = services.map((service, i) => {
        const icon = service.icon;
        const heading = service.heading;
        const content = service.content;
        const output =
            (<div key={i} className="col-md-4">
                <div className="row">
                    <div className="col-md-2">
                        {icon}
                    </div>
                    <div className="col-md-10">
                        <h5>{heading}</h5>
                        <p>{content}</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>);
        return output;
    });
    const sectionOutput = (
        <div className="container">
            <div className="company-services row">
                {serviceSection}
            </div>
        </div>
    );
    return sectionOutput;
}

const Homepage = () => {
    return (
        <div>
            <Banner slides={bannerSlides} />
            <CompanyServices services={services} />
        </div>
    )
}

export default Homepage();