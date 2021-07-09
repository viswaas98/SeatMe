import React from 'react'

function Hostmodal() {
    return (
        <div className="modalwrapper">
        <div className="modal">
          <div className="modal-menu-container">
            <div className="modal-menu-title-container">
              <h1 className="modal-menu-titlle">Room Details</h1>
            </div>
            <div className="modal-menu">
              <a href="#" className="modal-menuitem w-inline-block">
                <div className="icon-wrapper">
                  <img
                    src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd8757f3ecf36cca4aab8_image%20(24).png"
                    loading="lazy"
                    width={37}
                    sizes="100vw"
                    srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd8757f3ecf36cca4aab8_image%20(24)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd8757f3ecf36cca4aab8_image%20(24).png 565w"
                    alt=""
                    className="modal-menu-icon"
                  />
                </div>
                <div>
                  <div className="icon-description">Title</div>
                </div>
              </a>
              <a href="#" className="modal-menuitem w-inline-block">
                <div className="icon-wrapper">
                  <img
                    src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd87529ee87fe53c14911_image%20(25).png"
                    loading="lazy"
                    width={37}
                    sizes="100vw"
                    srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd87529ee87fe53c14911_image%20(25)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd87529ee87fe53c14911_image%20(25).png 542w"
                    alt=""
                  />
                </div>
                <div className="icon-description-wrapper">
                  <div className="icon-description">Title</div>
                </div>
              </a>
              <a href="#" className="modal-menuitem w-inline-block">
                <div className="icon-wrapper">
                  <img
                    src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png"
                    loading="lazy"
                    width={37}
                    alt=""
                  />
                </div>
                <div>
                  <div className="icon-description">Title</div>
                </div>
              </a>
            </div>
          </div>
          <div className="div-block-54">
            <div className="modal-prompt">
              <h1 className="modal-heading">Title</h1>
            </div>
            <div className="form-block-4 w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
                action="/"
              >
                <div>
                  <label htmlFor="name" className="modallabel">
                    Name of event
                  </label>
                  <input
                    type="text"
                    className="modalinput w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder
                    id="name"
                  />
                </div>
                <div>
                  <label htmlFor="name-2" className="modallabel">
                    Name of event
                  </label>
                  <input
                    type="text"
                    className="modalinput w-input"
                    maxLength={256}
                    name="name-2"
                    data-name="Name 2"
                    placeholder
                    id="name-2"
                  />
                </div>
                <div>
                  <label htmlFor="name-3" className="modallabel">
                    Name of event
                  </label>
                  <div className="div-block-57">
                    <a href="#" className="link-block-11 w-inline-block">
                      <img
                        src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dd061df5818052a19411df_image%20(26).png"
                        loading="lazy"
                        width={16}
                        alt=""
                        className="image-11"
                      />
                    </a>
                    <input
                      type="text"
                      className="modalinput editable w-input"
                      maxLength={256}
                      name="name-2"
                      data-name="Name 2"
                      placeholder
                      id="name-2"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  defaultValue="Save"
                  data-wait="Please wait..."
                  data-w-id="5fa7a4b0-d6e3-bfba-667e-697b8e05e362"
                  className="no w-button"
                />
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Hostmodal
