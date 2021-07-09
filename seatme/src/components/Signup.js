// const Signup = () => {
//   const emailRef = useRef();
//   const nameRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();
//   const {signup} = useAuth();
//   const [error,setError] = useState('')
//   const [loading,setLoading] = useState(false);

//   async function handleSubmit(e){
//     // alert("Hello");
//     e.preventDefault();

//     if(passwordRef.current !== confirmPasswordRef.current){

//       alert("Passwords do not match!");
//       return setError("Passwords do not match!");
//     }
//     try{
//       setError('')
//       setLoading(true)
//       await signup(emailRef.current.value, passwordRef.current.value)
//     }catch{
//       setError("Failed to create an account.");
//     }
//     setLoading(false);

//   }
//   return (
//     <div className="form-sign-up">
//       <form
//         id="email-form"
//         className="form"
//         onSubmit={handleSubmit}
//       >
//         <a href="/dashboard" className="try-now-button">
//           <div className="try-button">Try now as Guest</div>
//         </a>

//         <div className="partition">
//           <div className="dash" />
//           <div className="or">OR</div>
//           <div className="dash" />
//         </div>

//         <div className="signup">
//           <Inputfield
//             type="email"
//             class="inputfield"
//             maxLength={256}
//             placeholder="Email Address"
//             id="email"
//             ref={emailRef}
//           />
//           <Inputfield
//             type="text"
//             class="inputfield"
//             maxLength={256}
//             placeholder="Full Name"
//             id="name"
//             ref={nameRef}
//           />
//           <Inputfield
//             type="password"
//             class="inputfield"
//             maxLength={256}
//             placeholder="Password"
//             id="password"
//             ref={passwordRef}
//           />
//           <Inputfield
//             type="password"
//             class="inputfield"
//             maxLength={256}
//             placeholder="Confirm Password"
//             id="confirm-password"
//             ref={confirmPasswordRef}
//             onChange={handleSubmit}
//           />
//           <label className="checkbox-field">
//             <input
//               type="checkbox"
//               id="checkbox"
//               className="w-checkbox-input checkbox"
//             />
//             <span className="checkbox-label ">I agree to the terms and conditions</span>
//           </label>
//           <div className="button-container">
//             <button type="submit" href="#" className="signupbutton w-inline-block" disabled={loading}>
//               <div className="signupbut-copy">Sign Up</div>
//             </button>
//             <a href="#" className="signup-prompt">
//               Already have an account? Sign in
//             </a>
//           </div>
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

// export default Signup;

import { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  //const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <Card id="login-card" className="w-100">
        <Card.Body className="text-white">
          <h2 className="pb-3">Sign Up</h2>

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
            <Form.Group
              className="pb-3 d-flex flex-column justify-content-start align-items-start"
              id="confirm-password"
            >
              <Form.Label className="text-white">Confirm Password</Form.Label>
              <Form.Control
                id="login-card"
                className="text-white"
                type="password"
                ref={passwordConfirmRef}
              ></Form.Control>
            </Form.Group>

            <Button disabled={loading} className="w-100 mb-2" type="submit">
              Sign Up
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
        </Card.Body>
        <div className="w-100 text-center mb-4">
          Already have an account? <Link to="/auth/signin">Sign in</Link>
        </div>
      </Card>
    </>
  );
}
