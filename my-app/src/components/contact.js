import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function Contact() {
  return (
    <div className="site-content">
      <div
        className="site-header-spacer-desktop"
        aria-hidden="true"
        style={{ height: "131.047px" }}
      />
      <div
        className="site-header-spacer-mobile"
        aria-hidden="true"
        style={{ height: "58px" }}
      />
      <main className="site-content__main page-id--219063">
        <span id="main-content" className="sr-only">
          Main content starts here, tab to start navigating
        </span>
        <section
          id="intro"
          className="content c-intro container-sm revealable revealed"
        >
          <h1>Contact Us</h1>
          <p>
            Send us a message and we’ll get back to you as soon as possible.
            Looking forward to hearing from you.
          </p>
        </section>
        <div className="content container-sm">
          <form
            className="js-form-ajax revealable revealed"
            data-form-endpoint="/forms/submit/contact/"
            encType="multipart/form-data"
            method="post"
          >
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              defaultValue="w7p1ViQAhkiCfkoyIltB1G6u0CamcQ0nL9upg0S3b5Bbce5ODXxOv4WuSPUqYO7c"
            />
            <div style={{ display: "none" }}>
              <label>
                leave this field blank
                <input type="text" name="comment_body" defaultValue />
              </label>
            </div>
            <div
              data-bb-track="form"
              data-bb-track-on="submit"
              data-bb-track-category="Forms"
              data-bb-track-action="Submit"
              data-bb-track-label="Contact"
              aria-hidden="true"
            />
            <div className="form-header"></div>
            <div className="form-ui">
              <label htmlFor={346772}>
                <i className="error-label input--error show-error-label" />
                <span className="input-label">Email</span>
                <input
                  id={346772}
                  className="form-control"
                  type="email"
                  name={346772}
                  placeholder="Email"
                  required
                  autoComplete="email"
                  aria-describedby="346772-error"
                />
              </label>
              <label htmlFor={346773}>
                <span className="input-label">
                  Phone Number{" "}
                  <span className="input-label-optional">- Optional</span>
                </span>
                <input
                  id={346773}
                  className="form-control"
                  type="text"
                  name={346773}
                  placeholder="Phone Number"
                  data-input-validator="phone"
                  autoComplete="tel"
                  aria-describedby="346773-error"
                />
              </label>
              <label htmlFor={637616}>
                <i className="error-label input--error show-error-label" />
                <span className="input-label">Location</span>
                <div className="form-control-group has-icon-right">
                  <select
                    id={637616}
                    className="form-control unselected"
                    name={637616}
                    required
                    aria-describedby="637616-error"
                  >
                    <option value selected disabled>
                      Location
                    </option>
                    <option value="federalist-pig-adams-morgan">
                      Adams Morgan
                    </option>
                    <option value="federalist-pig-hyattsville">
                      Fedmobile - Hyattsville
                    </option>
                    <option value="bethesda-outpost-by-ensemble">
                      Bethesda Outpost by Ensemble
                    </option>
                    <option value="catering">Catering</option>
                  </select>
                  <span
                    className="form-control-group--icon is-positioned-right"
                    aria-hidden="true"
                  >
                    <i className="fa fa-chevron-down" />
                  </span>
                </div>
              </label>
              <label htmlFor={640068}>
                <i className="error-label input--error show-error-label" />
                <span className="input-label">
                  What are you getting in touch about?
                </span>
                <div className="form-control-group has-icon-right">
                  <select
                    id={640068}
                    className="form-control unselected"
                    name={640068}
                    required
                    aria-describedby="640068-error"
                  >
                    <option value selected disabled>
                      What are you getting in touch about?
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Catering">Catering</option>
                    <option value="Sandwich Suggestion">
                      Sandwich Suggestion
                    </option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="Order Issue">Order Issue</option>
                  </select>
                  <span
                    className="form-control-group--icon is-positioned-right"
                    aria-hidden="true"
                  >
                    <i className="fa fa-chevron-down" />
                  </span>
                </div>
              </label>
              <label htmlFor={346775}>
                <i className="error-label" />
                <span className="input-label">Your Message</span>
                <textarea
                  id={346775}
                  className="form-control"
                  name={346775}
                  placeholder="Your Message"
                  required
                  aria-describedby="346775-error"
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-brand">
                Send
              </button>
              <span className="form-error-msg">
                Please check errors in the form above
              </span>
            </div>
            <div className="form-success-msg">
              <span>
                Thank you for your inquiry. We’ll be in touch shortly.
              </span>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
