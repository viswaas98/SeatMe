// import React, { useState, useRef } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import Inputfield from "./Inputs/Inputfield";

// const Signin = () => {
//   const emailRef = useRef();
//   const nameRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();
//   return (
//     <div className="form-sign-in">
//       <form
//         id="sign-in-form"

//         className="form"
//       >
//         <a href="/dashboard" className="try-now-button">
//           <div className="try-button">Try now as Guest</div>
//         </a>
//         <link rel="prerender" href="/dashboard" />
//         <div className="partition">
//           <div className="dash" />
//           <div className="or">OR</div>
//           <div className="dash" />
//         </div>
//         <div className="signin">
//           <Inputfield
//             type="email"
//             class="inputfield"
//             maxLength={256}
//             placeholder="Email Address"
//             id="email"
//             ref={emailRef}
//           />
//           <Inputfield
//             type="password"
//             class="inputfield"
//             maxLength={256}
//             placeholder="Password"
//             id="password"
//             ref={passwordRef}
//           />

//           <label className="checkbox-field">
//             <input
//               type="checkbox"
//               id="checkbox"
//               className="w-checkbox-input checkbox"
//             />
//             <span className="checkbox-label w-form-label">Remember Me</span>
//           </label>
//           <div className="button-container">

//             <a href="#" className="signupbutton w-inline-block">
//               <div className="signupbut-copy">Sign In</div>
//             </a>
//             <a href="#" className="signup-prompt">
//               Forgot Password?
//             </a>
//           </div>
//           <div className="button-container">

//               <a href="#" className="signup-prompt">
//                 Don't have an account? Sign Up!
//               </a>
//             </div>
//         </div>
//         <a href="#" className="google-oauth w-inline-block">
//           <img
//             src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c145c09e3faa5d435f7f50_btn_google_signin_light_pressed_web.png"
//             loading="lazy"
//             alt=""
//             className="image"
//           />
//         </a>
//         <a href="#" className="facebook-oauth w-inline-block">
//           <img
//             src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n.png"
//             loading="lazy"
//             width={231}
//             sizes="(max-width: 479px) 58vw, 230.99609375px"
//             srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n-p-800.png 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n.png 988w"
//             alt=""
//             className="image"
//           />
//         </a>
//       </form>
//       <div className="success w-form-done">
//         <div>Thank you! Your submission has been received!</div>
//       </div>
//       <div className="error w-form-fail">
//         <div>Oops! Something went wrong while submitting the form.</div>
//       </div>
//     </div>
//   );
// };

// export default Signin;

import { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import {Link, useHistory} from 'react-router-dom'

export default function Signin() {
  const emailRef = useRef();
  //const nameRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard")
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <>
    
      <Card id="login-card" className="w-100">
        <Card.Body className="text-white">
          <h2 className="pb-3">Login</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="pb-3 d-flex flex-column justify-content-start align-items-start"
              id="email"
            >
              <Form.Label className="text-white text-white">Email</Form.Label>
              <Form.Control
                id="login-card"

                className="text-white"
                type="email"
                ref={emailRef}
              ></Form.Control>
            </Form.Group>
            <Form.Group
              className="pb-3 d-flex flex-column justify-content-start align-items-start"
              id="password"
            >
              <Form.Label className="text-white text-white">
                Password
              </Form.Label>
              <Form.Control
                id="login-card"
                className="text-white"
                type="password"
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>

            <Button disabled={loading} className="w-100 mb-2" type="submit">
              Login
            </Button>

            <a href="#" className="google-oauth w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c145c09e3faa5d435f7f50_btn_google_signin_light_pressed_web.png"
                loading="lazy"
                alt=""
                className="image"
              />
            </a>
            <a href="#" className="facebook-oauth w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n.png"
                loading="lazy"
                width={231}
                sizes="(max-width: 479px) 58vw, 230.99609375px"
                srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n-p-800.png 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbae5425b8c098011fb0f4_17639236_1785253958471956_282550797298827264_n.png 988w"
                alt=""
                className="image"
              />
            </a>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mb-4">
          Need an account? <Link to="/auth/signup"> Sign Up</Link>
        </div>
      </Card>
    </>
  );
}
