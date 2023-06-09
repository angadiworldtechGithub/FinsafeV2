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

const SERVICE_CARDS_1 = [
  {
    title: "Start Your Business",
    icon: GrBusinessService,
    link: "/startyourbusiness",
  },
  {
    title: "Get Expert Financial advice",
    icon: FcServices,
    link: "/businesslegalservices",
  },
  {
    title: "Raise Capital - Loans & Equity",
    icon: GrServices,
    link: "/loanscapital",
  },
  {
    title: "File your Income tax returns",
    icon: FaServicestack,
    link: "/incometaxreturns",
  },
  {
    title: "GST compliances",
    icon: GrServicePlay,
    link: "/gst",
  },
  {
    title: "Personal Financial planner",
    icon: MdMiscellaneousServices,
    link: "/businesslegalservices",
  },
  {
    title: "Virtual CFO services",
    icon: MdOutlineHomeRepairService,
    link: "/cfoservices",
  },
  {
    title: " Business Transaction Advisory",
    icon: FcServiceMark,
    link: "/BusinessTransaction",
  },
];

const SERVICE_CARDS_2 = [
  {
    title: "Loan Documentation Support",
    icon: GrBusinessService,
    link: "/businesslegalservices",
  },
  {
    title: "Joint Ventures",
    icon: FcServices,
    link: "/businesslegalservices",
  },
  {
    title: "Investment planning",
    icon: GrServices,
    link: "/businesslegalservices",
  },
  {
    title: "Payroll Management",
    icon: FaServicestack,
    link: "/businesslegalservices",
  },
  {
    title: "GST E-Way Bill",
    icon: GrServicePlay,
    link: "/businesslegalservices",
  },
  {
    title: "Test3",
    icon: MdMiscellaneousServices,
    link: "/businesslegalservices",
  },
  {
    title: "Test3",
    icon: MdOutlineHomeRepairService,
    link: "/businesslegalservices",
  },
  {
    title: "Test3",
    icon: FcServiceMark,
    link: "/businesslegalservices",
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

      <h1><center> Our Popular Services</center></h1>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            500: {
              perPage: 1,
            },
            840: {
              perPage: 2,
            },
            1000: {
              perPage: 3,
            },
          },
        }}
      >
        {SERVICE_CARDS_1.map((serviceCard) => {
          return (
            <SplideSlide key={shortid.generate()}>
              <ServiceCard
                title={serviceCard.title}
                ICON={serviceCard.icon}
                link={serviceCard.link}
              />
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

      <h1><center><u>Frequently Used Services</u></center></h1>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            500: {
              perPage: 1,
            },
            840: {
              perPage: 2,
            },
            1000: {
              perPage: 3,
            },
          },
        }}
      >
        {SERVICE_CARDS_2.map((serviceCard) => {
          return (
            <SplideSlide key={shortid.generate()}>
              <ServiceCard
                title={serviceCard.title}
                ICON={serviceCard.icon}
                link={serviceCard.link}
              />
            </SplideSlide>
          );
        })}
      </Splide>

      {/*cilent silder*/}
    </>
  );
}
