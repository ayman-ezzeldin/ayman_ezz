import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {  slideIn } from "../utils/motion";
import AlertCorrect from "./AlertCorrect";
import AlertWrong from "./AlertWrong";

const Contact = () => {
  const formRef = useRef();
  const [correctAlert , setCorrectAlert] = useState(false)
  const [wrongAlert , setWrongAlert] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form , [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setCorrectAlert(true)
    //   setWrongAlert(true)
    // }, 3000);

    emailjs
      .send(
        'service_xesepsi',
        'template_5krcean',
        {
          from_name: form.name,
          to_name: "Ayman",
          from_email: form.email,
          to_email: "aymanmae12@gmail.com",
          message: form.message,
        },
        'SKyo4AsXtg4jRsAcE'
      ).then(() => {
        setCorrectAlert(true)
        setTimeout(() => {
          setCorrectAlert(false)
        }, 2000);
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, (error) => {
        setWrongAlert(true)
        setTimeout(() => {
          setWrongAlert(false)
        },2000)
        setLoading(false);
      })

  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <div className="flex flex-col">
          <p className={styles.sectionSubText}>get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary resize-none text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        { correctAlert && <motion.div variants={slideIn("bottom", "tween", 0.2, 1)} className="mt-10" >
          <AlertCorrect />
        </motion.div>}
        { wrongAlert && <motion.div variants={slideIn("bottom", "tween", 0.2, 1)} className="mt-10" >
          <AlertWrong />
        </motion.div>}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact")
