import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Home.css";
import shortid from "shortid";

export default function Home() {
  const ProjectList = [
    {
      title: "CFO Services",
      image: "assets/images/25.jpg",
      description:
        "Freelancing Chief Financial Officer services CFO.Finsafe CFO services,strong financial growth just like large MNCs.",
    },
    {
      title: "Loan Services",
      image: "assets/images/24.jpg",
      description:
        "Finsafe maintains with banks and Financial institutions which helps to raise required growth capital for your organisation",
    },
    {
      title: "Transaction Advisory",
      image: "assets/images/23.jpg",
      description:
        "Finsafe experts will help you in drafting and vetting business agreements which help you enter into strong business relationships",
    },
    {
      title: "Tax Planning",
      image: "assets/images/22.jpg",
      description:
        "Our Tax Experts will help implement best Tax best planning for your organisation.",
    },
    {
      title: "Statutory Compliances",
      image: "assets/images/21.jpg",
      description:
        "Our experienced team ensures your organisation is always compliant (GST, RERA, Income tax and Companies act etc.)",
    },
    {
      title: "Business Services",
      image: "assets/images/20.jpg",
      description:
        "FINSAFE efficient process such as payroll, AP & AR will help reduce operations cost signficantly.",
    },
    {
      title: "Financial planning",
      image: "assets/images/19.jpg",
      description:
        "FINSAFE's Certified financial planners builds a robust plan to help achive your financial targets",
    },
    {
      title: "Investment",
      image: "assets/images/18.jpg",
      description:
        "Our relationship with large financial institutions ensure highest value loan at lowest possible returns	",
    },
    {
      title: "Wealth Management services",
      image: "assets/images/17.jpg",
      description:
        "Our team of Experts ensures your wealth, assets are preserved and passed on to Generations to come.	",
    },
  ];

  return (
    <>
    <Splide aria-label="Home Slide" options={{ autoplay: true, width: "100%" }}>
      {ProjectList.map((project) => {
        return (
          <SplideSlide key={shortid.generate()}>
            <div className="splider_box">
              <img src={project.image} alt="" className="slider_image" />
              <div className="text_overlay">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
    {/*Card Slider*/}
     
    <div className="container">
       <h2>Services Silder</h2>
        <div className="cards">
             

        </div>
    </div>













          <div class="scroll-left">
            <p>Finsafe provides financial planning and mentorship services Individuals and wants to be trusted partner in their sucessful financial journey.</p>
          </div>
    {/*card slider*/}
    {/*cilent silder*/}
        
    </>
   )
 }