import React, { useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    function sendMessageHandler(event) {
        event.preventDefault();

        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return (
        <section className={classes.contact}>
            <h1>Jak mogę pomóc?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={enteredEmail}
                            onChange={(e) => setEnteredEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Imię</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={enteredName}
                            onChange={(e) => setEnteredName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Wiadomość</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={enteredMessage}
                        onChange={(e) => setEnteredMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Wyślij</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
