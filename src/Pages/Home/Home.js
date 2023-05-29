import React from "react";
import shortid from "shortid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ServiceCard from "../../Components/ServiceCard";
import { GrBusinessService, GrServices, GrServicePlay } from "react-icons/gr";
import { FcServices, FcServiceMark } from "react-icons/fc";
import { FaServicestack } from "react-icons/fa";
import {
  MdMiscellaneousServices,
  MdOutlineHomeRepairService,
} from "react-icons/md";

import "@splidejs/react-splide/css";
import "./Home.css";

const ProjectList = [
  {
    title: "CFO Services",
    image: "assets/images/banner_2.png",
    description:
      "Freelancing Chief Financial Officer services CFO. Finsafe CFO services,strong financial growth just like large MNCs.",
  },
  {
    title: "Loan Services",
    image: "assets/images/banner_3.png",
    description:
      "Finsafe maintains with banks and Financial institutions which helps to raise required growth capital for your organisation",
  },
  {
    title: "Transaction Advisory",
    image: "assets/images/banner_4.png",
    description:
      "Finsafe experts will help you in drafting and vetting business agreements which help you enter into strong business relationships",
  },
  {
    title: "Tax Planning",
    image: "assets/images/banner_5.png",
    description:
      "Our Tax Experts will help implement best Tax best planning for your organisation.",
  },
  {
    title: "Statutory Compliances",
    image: "assets/images/banner_6.png",
    description:
      "Our experienced team ensures your organisation is always compliant (GST, RERA, Income tax and Companies act etc.)",
  },
  {
    title: "Business Services",
    image: "assets/images/banner_7.png",
    description:
      "FINSAFE efficient process such as payroll, AP & AR will help reduce operations cost signficantly.",
  },
  {
    title: "Financial planning",
    image: "assets/images/banner_8.png",
    description:
      "FINSAFE's Certified financial planners builds a robust plan to help achive your financial targets",
  },
  {
    title: "Investment",
    image: "assets/images/banner_9.png",
    description:
      "Our relationship with large financial institutions ensure highest value loan at lowest possible returns	",
  },
  {
    title: "Wealth Management services",
    image: "assets/images/banner_10.png",
    description:
      "Our team of Experts ensures your wealth, assets are preserved and passed on to Generations to come.	",
  },
];

const SERVICE_CARDS = [
  {
    title: "test1",
    icon: GrBusinessService,
  },
  {
    title: "test2",
    icon: FcServices,
  },
  {
    title: "test1",
    icon: GrServices,
  },
  {
    title: "test2",
    icon: FaServicestack,
  },
  {
    title: "test1",
    icon: GrServicePlay,
  },
  {
    title: "test2",
    icon: MdMiscellaneousServices,
  },
  {
    title: "test1",
    icon: MdOutlineHomeRepairService,
  },
  {
    title: "test2",
    icon: FcServiceMark,
  },
];

export default function Home() {
  return (
    <>
      <Splide
        aria-label="Home Slide"
        options={{ autoplay: true, width: "100%" }}
      >
        {ProjectList.map((project) => {
          return (
            <SplideSlide key={shortid.generate()}>
              <div className="splider_box">
                <img src={project.image} alt="" className="slider_image" />
                <div className="text_overlay overlay_text">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <Splide options={{ perPage: 4 }}>
        {/* Add Breakpoints to the perPage property */}
        {SERVICE_CARDS.map((serviceCard) => {
          return (
            <SplideSlide key={shortid.generate()}>
              <ServiceCard title={serviceCard.title} ICON={serviceCard.icon} />
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="scroll-left">
        <p>
          Finsafe provides financial planning and mentorship services
          Individuals and wants to be trusted partner in their sucessful
          financial journey.
        </p>
      </div>
      {/*card slider*/}
      {/*cilent silder*/}
    </>
  );
}
