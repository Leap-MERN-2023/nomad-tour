"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import { staggerContainer } from "@/utils/motions";

const SectionWrapper = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=""
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
