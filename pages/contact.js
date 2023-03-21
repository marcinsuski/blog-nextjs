import Head from "next/head";
import React, { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact me</title>
                <meta
                    name="description"
                    content="Send me a message."
                />
            </Head>
            <ContactForm />
        </Fragment>
    );
};

export default ContactPage;
