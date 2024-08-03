import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { styles } from '../styles'
import { SectionWrapper } from "../hoc";
import 'react-vertical-timeline-component/style.min.css'
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')