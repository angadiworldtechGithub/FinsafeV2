import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Home() {

const customStyles = {
  content: {
    top: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height:"50vh",
    zIndex: 2147483647
  },
};

const ProjectList= [
  {
    title: "CFO Services",
    image: "assets/images/25.jpg",
    description:
    "Freelancing Chief Financial Officer services CFO.Finsafe CFO services,strong financial growth just like large MNCs."
  },
  {
    title: "Loan Services",
    image: "assets/images/24.jpg",
    description:
       "Finsafe maintains with banks and Financial institutions which helps to raise required growth capital for your organisation" 
  },
  {
    title: "Transaction Advisory",
    image: "assets/images/23.jpg",
    description:
      "Finsafe experts will help you in drafting and vetting business agreements which help you enter into strong business relationships"
  },
  {
    title: "Tax Planning",
    image: "assets/images/22.jpg",
    description:
      "Our Tax Experts will help implement best Tax best planning for your organisation."
  },
  {
    title: "Statutory Compliances",
    image: "assets/images/21.jpg",
    description:
     "Our experienced team ensures your organisation is always compliant (GST, RERA, Income tax and Companies act etc.)"
      
  },
  {
    title: "Business Services",
    image: "assets/images/20.jpg",
    description:
      "FINSAFE efficient process such as payroll, AP & AR will help reduce operations cost signficantly."
  },
  {
    title: "Financial planning",
    image: "assets/images/19.jpg",
    description:
      "FINSAFE's Certified financial planners builds a robust plan to help achive your financial targets"
  },
  {
    title: "Investment",
    image: "assets/images/18.jpg",
    description:
      "Our relationship with large financial institutions ensure highest value loan at lowest possible returns	"
  },
  {
    title: "Wealth Management services",
    image: "assets/images/17.jpg",
    description:
      "Our team of Experts ensures your wealth, assets are preserved and passed on to Generations to come.	"
  }
]; 

    
  return (
    <div>
    
        <div style={{margin:"auto",width:"60%",marginBottom:'20px'}}>
           <Splide aria-label='Home Slide' options={{autoplay:true}}>
               {ProjectList.map(project => {
                 return (<SplideSlide>

                  <div style={{position:"relative",textAlign:"center"}}>
                      
                       <section style={{paddingBottom:'0', paddingTop:'0px', marginBottom:'100px',backgroundColor:'#F8F5F1'}}>
                            <div class="slider-sec">
                              <div class="container">
                                 <div class="row aos-init aos-animate" data-aos="fade-up">
                                    <div class="col-sm-12">
                                          
                                    </div>
                               </div>
                                    <div class="row aos-init aos-animate" data-aos="fade-up">
                                       <div class="col-sm">
                                       <img src={project.image} alt=""/>
                                          <span style= {{zIndex:30}}>
                                
                                            <h4 style={{opacity:'0.75',position:'absolute',top:'25%',left:'25%',right:"25%",backgroundColor:'#FFF',borderRadius:"5px"}}>{project.title}</h4>
                                            <p style={{opacity:'0.75',position:'absolute',top:'35%',left:'25%',right:"25%",background:'#FFF',borderRadius:"5px"}}>{project.description}</p>
                                 
                                          </span>
                                        
                                    </div>
                               </div>
                            </div>
                         </div>
                       </section>
                         </div> 
  
                     </SplideSlide>)

               })}
           </Splide>
        </div>  
    </div>
  );
}
