"use client";

import { motion } from "framer-motion";
import styles from "../styles";

import { fadeIn, zoomIn, staggerContainer } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className=" relative flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a]"
      >
        <div className="feedback-gradient"></div>
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Shristi
          </h4>
          <p className="mt-[8px] sm:text-[18px] text-[12px] font-normal sm:leading-[22px] leading-[16px] text-white">
            Founder | Metaversus
          </p>
        </div>
        <p className="mt-[24px] sm:text-[24px] text-[18px] font-normal sm:leading-[45px] leading-[38px] text-white">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet"
          className="w-full lg:h-[610px] h-auto min-h-[210px] rounded-[40px] object-cover"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block  hidden absolute top-[3%] -left-[10%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="h-[155px] w-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
