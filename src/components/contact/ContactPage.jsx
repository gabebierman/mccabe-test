import React from "react";

function ContactPage() {
    return(
        <dim>
            <p>email:</p>
            <p>phone:</p>
            <p></p>
            <p>contact us</p>
            <label id="email" htmlFor="email">Email</label>
            <textarea id="email" defaultValue={"email"}></textarea>
            <label id="phone" htmlFor="phone">Phone Number</label>
            <textarea id="phone" defaultValue={"phone"}></textarea>
            <label id="subject" htmlFor="subject">Subject</label>
            <textarea name="subject" id="subject" defaultValue={"subject"}></textarea>
            <label id="message" htmlFor="message">Message</label>
            <textarea name="message" id="message" defaultValue={"Enter your message here"}></textarea>
            <button>Submit</button>
        </dim>
    )
}

export default ContactPage