import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import {
  Header,
  Hero,
  Form,
  About,
  CarCollections,
  HowItWorks,
  Services,
  Testimonials,
  DownloadApp,
  Footer,
  Modal,
  Fleet,
  Rentage,
  OurCoreValues,
  BookNow,
  OurBlog,
  Waitlist,
  Mission,
} from "./component";

function App() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, [])

  return (
    <>
      <Header displayModal={showModal} />
      <Hero />
      {/* <Form displayModal={showModal} /> */}
      <Fleet />
      <Rentage />
      <OurCoreValues />
      <BookNow />
      <OurBlog />
      {/* <HowItWorks /> */}
      <About />
      <Waitlist />
      <Mission />
      {/* <CarCollections displayModal={showModal} /> */}
      
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <DownloadApp displayModal={showModal} /> */}
      {/* <Footer /> */}
      {/* {modal ? <Modal displayModal={showModal} /> : null} */}
    </>
  );
}

export default App;
