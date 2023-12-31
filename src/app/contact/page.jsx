import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";


export const metadata = {
  title: "Blog App Contact Info ",
  description: "This is Contact Page",
};


function Contact() {
  return (
    <div className={styles.container}>
      {/* titulo */}
      <h1 className={styles.title}>Let's Keep in Touch</h1>

      {/* contenido */}
      <div className={styles.content}>
        {/* imagen */}
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        {/* formulario */}
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
