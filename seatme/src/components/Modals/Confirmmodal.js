import React from 'react'

function Confirmmodal() {
    return (
        <div className="modalwrapperconfirm">
        <div className="modalconfirm">
          <div className="modal-container">
            <div className="modal-prompt">
              <h1 className="modal-heading">
                Are you sure you want to perform this action?
              </h1>
            </div>
            <div className="w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
              >
                <div className="button-container">
                  <input
                    type="submit"
                    defaultValue="Yes"
                    data-wait="Please wait..."
                    data-w-id="1c782d93-5ab9-59b4-c7ed-f421ce8f681b"
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

export default Confirmmodal
