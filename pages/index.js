import { motion } from "framer-motion";

import AppleLogo from "../components/AppleLogo";
import FooterLink from "../components/FooterLink";
import { stagger, slideIn } from "../lib/animations";

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
      className="flex w-full min-h-screen justify-center flex-col px-4 sm:px-10 py-10 font-light"
    >
      <div>
        <div className="flex mb-6">
          <img
            className="flex-initial w-11 h-11"
            alt="Plug logo – a pink heart filled with a music equalizer"
            src="/images/logo.png"
            width="40px"
            height="40px"
          />
          <h1 className="text-4xl ml-2">Plug</h1>
        </div>
        <p className="mb-10 text-xl text-white text-opacity-70">
          Discover and listen to music from{" "}
          <a
            className="underline"
            href="http://hypem.com"
            rel="nofollow noopener"
            target="_blank"
          >
            Hype Machine
          </a>
        </p>
        <a
          target="_blank"
          rel="nofollow noopener"
          href="https://apps.apple.com/app/plug-for-hype-machine/id1514182074"
          className="download-button rounded-lg text-black inline-flex px-6 py-4 mr-auto font-normal items-center shadow-md tracking-wide mb-4 cursor-pointer"
        >
          <AppleLogo />
          <p className="ml-3">Get it on the App Store</p>
        </a>
      </div>
      <motion.div variants={slideIn} className="-ml-6 sm:-ml-12">
        <img
          alt="Plug application UI showing two lists of songs from Hypem; popular and favourite"
          src="/images/app.png"
          width="600px"
          height="565px"
          quality="100"
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="text-xs tracking-wide flex flex-col sm:flex-row"
      >
        <FooterLink href="http://www.twitter.com/plugformac">
          Follow on Twitter
        </FooterLink>
        <FooterLink href="https://github.com/wulkano/plug">
          Contribute on GitHub
        </FooterLink>
        <FooterLink href="https://github.com/wulkano/Plug/issues/new">
          Submit feedback
        </FooterLink>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
