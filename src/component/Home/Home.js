import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const img1 = "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?t=st=1650124217~exp=1650124817~hmac=58dd4660ada2f0176b4076695fbadcdd774480db7e1fe9e5fad528a1147cee87&w=740"

    const img2 = "https://img.freepik.com/free-photo/surgeons-performing-operation-operation-room_1170-2224.jpg?w=740"

    const img3 = "https://img.freepik.com/free-photo/surgeons-performing-operation-operation-room_1170-2235.jpg?t=st=1650130898~exp=1650131498~hmac=aaa0d64845cd04ba271dbffc8af35cc93c9f3cf2438c2ecc62544254db04fb61&w=740"

    const img4 = "https://img.freepik.com/free-photo/portrait-confident-male-doctor-dressed-uniform_171337-1484.jpg?w=740"
    return (
        <div>
            <h1 className='head-line'>Complete Surgical Care</h1>
            <div>
                <Carousel className=' mx-auto'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 rounded-3"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className='slide-header'>Welcome To My Clinic</h1>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block  w-100 rounded-3"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className='slide-header'>Stay at Home. Consult Doctors Online</h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-3"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='slide-header'>Covid Care Plan</h3>
                            {/* s */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h1 className='service-header mt-4' id='#/service'>Our Service</h1>
                <div className='d-flex justify-content-around  row row-cols-1 row-cols-md-4 g-4 m-3'>
                    {services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)}
                </div>
            </div>

            <div className='container'>
                <h2 className='text-center'>About Me</h2>
                <section className='row container d-flex justify-content-between w-100 my-5'>
                    <div className='col-md-6 col-sm-12'>
                        <img src={img4} className="img-fluid rounded-3" alt="" />
                    </div>
                    <div className='col-md-6 col-sm-12'>

                        <h4 className='m-0'>Dr John Smith</h4>
                        <p>General surgeon with eight years of experience as an attending, as well as broad medical experience prior to completing medical school. Past positions have included both emergency departments and independent clinic work. Excellent bedside manner and patient communication skills developed through more than a decade of combined schooling and teaching experience.</p>
                        <h5 className='m-0'>Skills</h5>
                        <p>-Literate with information technology and HIM, including fluency with industry-standard medical database software.
                            -Command knowledge of a diverse range of surgical procedures appropriate to emergency response, trauma surgery, and thoracic surgery.
                            -Analyze and synthesize the results of various imaging scans to make decisions about patient...
                        </p>
                    </div>
                </section>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;