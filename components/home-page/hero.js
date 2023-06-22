import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpeg"
          alt="An image showing Jonathan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Jonathan</h1>
      <p>
        I blog about web development. Currently learning JavaScript and React
      </p>
    </section>
  );
};

export default Hero;
