import React from 'react'

function Reservemodal() {
    return (
        <div className="modalseats">
        <div className="modalconfirm">
          <div className="modal-container">
            <div className="w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
                className="form-4"
              >
                <div className="seats-prompt">
                  <label htmlFor="name-3" className="modallabel">
                    How many seats would you like to reserve?
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
                <div className="button-container">
                  <input
                    type="submit"
                    defaultValue="Yes"
                    data-wait="Please wait..."
                    className="yes w-button"
                  />
                  <input
                    type="submit"
                    defaultValue="no"
                    data-wait="Please wait..."
                    className="no w-button"
                  />
                </div>
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

export default Reservemodal
