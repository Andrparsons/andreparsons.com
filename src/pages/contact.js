import React from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";

import Layout from "../components/layout";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <div id="contact">
          <h2>Get in touch</h2>
          <p>Intro text to go here when I think of something good</p>
          <form
            name="contact-recaptcha"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-recaptcha="true"
            onSubmit={this.handleSubmit}
          >
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>
            <div className="fields">
              <div className="field half">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="7"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
              theme="dark"
            />
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </Layout>
    );
  }
}
