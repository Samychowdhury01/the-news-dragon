import moment from 'moment';
import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import logo from '../../../assets/logo.png'
import HeaderNav from '../Nav/HeaderNavbar';

const Header = () => {
    return (
        <Container>
           <div className='text-center pt-5'>
            <img src={logo} className="mb-3" alt="" />
            <h6 className='mb-2'>Journalism Without Fear or Favour</h6>
            {moment().format("dddd, MMMM D, YYYY")}
           </div>
           <div className='p-3 bg-secondary bg-opacity-10 d-inline-flex justify-content-center align-items-center mt-4'>
             <button className='btn btn-danger'>Latest</button>
             <Marquee speed={50} gradient={false}>
             Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Marquee>                     
           </div>
        </Container>
    );
};

export default Header;