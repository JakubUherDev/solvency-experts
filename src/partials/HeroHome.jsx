import React, {useState} from 'react';
import groovyWalkAnimation from "../images/animation/ani1.json";
import Lottie from "lottie-react";

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">


      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col md:flex-row">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-4xl text-white font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Voluntary<br/> Liquidation</h1>
            <div className="max-w-3xl mx-auto">
              <div className={'flex flex-col p-8 text-left pb-16'}>
                <p className="text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">Liquidating your business can be both stressful and overwhelming but thankfully we are here to help.</p>
                <p className="text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">To confidentially discuss your options going forward simply leave us your number and we will call you back for a friendly no obligations chat.</p>
              </div>


              <div className={'my-8 md:my-0 m-8 animate-bounce md:animate-pulse'}>
                <img className={'w-1/2 mx-auto  rotate-90 md:rotate-0 '} src={'src/images/enter-details-icon.webp'}/>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className={'pt-14'}>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <div className={'w-full md:w-7/8 mx-auto bg-white p-4 rounded-2xl px-4'}>
                  <div className={'p-2'}>
                    <h1 className={'text-center text-xl font-bold'}>Enter Your Details Below</h1>
                    <p className={'text-center '}>
                      Your personal data will be held in accordance with our Privacy Policy.
                    </p>
                  </div>
                  <form className={'mt-2 flex flex-col space-y-8'}>
                    <input placeholder={'Name'} type="text" name="name" className={'rounded-l'}/>
                    <input placeholder={'Telephone Number'} type="text" name="phone" className={'rounded-l'}/>
                    <input placeholder={'E-Mail Address'} type="text" name="email" className={'rounded-l'}/>

                    <input className={'btn bg-[#dd390d] text-white rounded-2xl w-1/2 mx-auto hover:cursor-pointer hover:bg-[#ae2d0a]'} type="submit" value="GET HELP" />
                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>

          <div className={'mx-auto p-4 w-3/4'}>
            <Lottie loop={'true'} animationData={groovyWalkAnimation}/>
          </div>
      </div>
    </section>
  );
}

export default HeroHome;