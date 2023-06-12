import React from "react";
import shortid from "shortid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ServiceCard from "../../Components/ServiceCard";
import { GrBusinessService, GrServices, GrServicePlay } from "react-icons/gr";
import { RiCopyrightFill } from "react-icons/ri";
import { FcServices } from "react-icons/fc";
import { FaServicestack } from "react-icons/fa";
import {
  MdMiscellaneousServices,
  MdOutlineHomeRepairService,
  MdOutlineBusiness,
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
    color1: "#BB710D",
    color2: "#BB710D",
    link: "/businesslegalservices",
  },
  {
    title: "Get Expert Financial advice",
    icon: FcServices,
    color1: "#BF570D",
    color2: "#BF570D",
    link: "/businesslegalservices",
  },
  {
    title: "Raise Capital - Loans & Equity",
    icon: GrServices,
    color1: "#CC4922",
    color2: "#CC4922",
    link: "/loanscapital",
  },
  {
    title: "File your Income tax returns",
    icon: FaServicestack,
    color1: "#BC331C",
    color2: "#BC331C",
    link: "/incometax",
  },
  {
    title: "GST compliances",
    icon: GrServicePlay,
    image: "assets/images/banner_10.png",
    color1: "#C2701C",
    color2: "#C2701C",
    link: "/ieccompliance",
  },
  {
    title: "Personal Financial planner",
    icon: MdMiscellaneousServices,
    color1: "#BC331C",
    color2: "#C2701C",
    link: "",
  },
  {
    title: "Virtual CFO services",
    icon: MdOutlineHomeRepairService,
    color1: "#BF570D",
    color2: "#BF570D",
    link: "/CfoServices",
  },
  {
    title: " Business Transaction Advisory",
    icon: MdOutlineBusiness,
    color1: "#CC4922",
    color2: "#CC4922",
    link: "/BusinessTransaction",
  },
];

const SERVICE_CARDS_2 = [
  {
    title: "Loan Documentation Support",
    icon: GrBusinessService,
    color1: "#CC4922",
    color2: "#CC4922",
    link: "/loandocumentationsupport",
  },
  {
    title: "Joint Ventures",
    icon: FcServices,
    color1: "#BF4827",
    color2: "#BF4827",
    link: "/JointVentures",
  },
  {
    title: "Investment planning",
    icon: GrServices,
    link: "/investment",
    color1: "#BF570D",
    color2: "#BF570D",
  },
  {
    title: "Payroll Management",
    icon: FaServicestack,
    link: "/payroll",
    color1: "#BB710D",
    color2: "#BB710D",
  },
  {
    title: "GST E-Way Bill",
    icon: GrServicePlay,
    link: "/gstEwaybill",
    color1: "#BC331C",
    color2: "#BC331C",
  },
  {
    title: "Investor Relationship Management",
    icon: MdMiscellaneousServices,
    link: "/Investorrelationship",
    color1: "#BF570D",
    color2: "#BF570D",
  },
  {
    title: "Land Title Due Diligence",
    icon: MdOutlineHomeRepairService,
    link: "/landlittle",
    color1: "#CC4922",
    color2: "#CC4922",
  },
  {
    title: "Trademark/Copyright",
    icon: RiCopyrightFill,
    link: "/trademark",
    color1: "#E29513",
    color2: "#E29513",
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

      <h1>
        <center> Our Popular Services</center>
      </h1>
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
                color1={serviceCard.color1}
                color2={serviceCard.color2}
                image={serviceCard.image}
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

      <h1>
        <center>Frequently Used Services</center>
      </h1>
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
                color1={serviceCard.color1}
                color2={serviceCard.color2}
                image={serviceCard.image}
              />
            </SplideSlide>
          );
        })}
      </Splide>

      {/*cilent silder*/}
    </>
  );
}
