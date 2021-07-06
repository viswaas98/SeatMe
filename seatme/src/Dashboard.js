import React from 'react';

const Dashboard = () => {
    return (
        <div id="dashboard-body">
        <div className="modalwrapper">
          <div className="modal">
            <div>
              <div className="div-block-55">
                <h1 className="heading-4">Room Details</h1>
              </div>
              <div className="div-block-53"><a href="#" className="link-block-10 w-inline-block">
                  <div className="div-block-51"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd8757f3ecf36cca4aab8_image%20(24).png" loading="lazy" width={37} sizes="100vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd8757f3ecf36cca4aab8_image%20(24)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd8757f3ecf36cca4aab8_image%20(24).png 565w" alt="" /></div>
                  <div>
                    <div className="text-block-23">Title</div>
                  </div>
                </a>
                <div className="div-block-50">
                  <div className="div-block-52"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd87529ee87fe53c14911_image%20(25).png" loading="lazy" width={37} sizes="100vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd87529ee87fe53c14911_image%20(25)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd87529ee87fe53c14911_image%20(25).png 542w" alt="" /></div>
                  <div>
                    <div className="text-block-23">Venue</div>
                  </div>
                </div>
                <div className="div-block-50 seats">
                  <div className="div-block-52-copy"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={33} alt="" /></div>
                  <div>
                    <div className="text-block-23">Seats</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-54">
              <div className="div-block-56">
                <h1 className="heading-5">Title</h1>
              </div>
              <div className="form-block-4 w-form">
                <form id="email-form-3" name="email-form-3" data-name="Email Form 3" action="/">
                  <div><label htmlFor="name" className="modallabel">Name of event</label><input type="text" className="modalinput w-input" maxLength={256} name="name" data-name="Name" placeholder id="name" /></div>
                  <div><label htmlFor="name-2" className="modallabel">Name of event</label><input type="text" className="modalinput w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /></div>
                  <div><label htmlFor="name-3" className="modallabel">Name of event</label>
                    <div className="div-block-57"><a href="#" className="link-block-11 w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dd061df5818052a19411df_image%20(26).png" loading="lazy" width={16} alt="" className="image-11" /></a><input type="text" className="modalinput editable w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /></div>
                  </div><input type="submit" defaultValue="Save" data-wait="Please wait..." data-w-id="5fa7a4b0-d6e3-bfba-667e-697b8e05e362" className="no w-button" />
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
        <div className="modalwrapperconfirm">
          <div className="modalconfirm">
            <div className="div-block-54-copy">
              <div className="div-block-56">
                <h1 className="heading-5">Are you sure you want to perform this action?</h1>
              </div>
              <div className="w-form">
                <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                  <div><input type="submit" defaultValue="Yes" data-wait="Please wait..." data-w-id="1c782d93-5ab9-59b4-c7ed-f421ce8f681b" className="yes w-button" /><input type="submit" defaultValue="no" data-wait="Please wait..." className="no w-button" /></div>
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
        <div className="modalseats">
          <div className="modalconfirm">
            <div className="div-block-54-copy">
              <div className="w-form">
                <form id="email-form-3" name="email-form-3" data-name="Email Form 3" className="form-4">
                  <div><label htmlFor="name-3" className="modallabel">How many seats would you like to
                      reserve?</label><input type="text" className="modalinput w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /></div>
                  <div><input type="submit" defaultValue="Yes" data-wait="Please wait..." className="yes w-button" /><input type="submit" defaultValue="no" data-wait="Please wait..." className="no w-button" /></div>
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
        <div className="div-block-8"><a href="/" className="link-block-5 w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c186337870b4d11051f030_image%20(3).png" loading="lazy" width={79} sizes="(max-width: 479px) 100vw, 78.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c186337870b4d11051f030_image%20(3)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c186337870b4d11051f030_image%20(3).png 700w" alt="" className="image-3" />
            <div className="text-block-5">SeatMe</div>
          </a>
          <link rel="prerender" href="/" /><a href="#" className="dashboard-button-wrapper w-inline-block">
            <div className="dashboard-logo-container host-dashboard-logo"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbaf375eab00461522eaa3_image%20(22).png" loading="lazy" width={39} sizes="(max-width: 479px) 100vw, 38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbaf375eab00461522eaa3_image%20(22)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbaf375eab00461522eaa3_image%20(22).png 615w" alt="" className="dashboard-logo" /></div>
            <div className="dashboard-button-label-container">
              <div className="dashboard-label">Hosted Rooms</div>
            </div>
          </a><a href="#" className="dashboard-button-wrapper w-inline-block">
            <div className="dashboard-logo-container"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={50} sizes="(max-width: 479px) 100vw, 50px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="dashboard-logo" /></div>
            <div className="dashboard-button-label-container">
              <div className="dashboard-label reservation">Reservations</div>
            </div>
          </a><a href="#" className="dashboard-button-wrapper w-inline-block">
            <div className="dashboard-logo-container"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe89e3faad80b60eaed_image%20(7).png" loading="lazy" width={35} sizes="(max-width: 479px) 100vw, 35px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe89e3faad80b60eaed_image%20(7)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe89e3faad80b60eaed_image%20(7).png 601w" alt="" className="dashboard-logo" /></div>
            <div className="dashboard-button-label-container">
              <div className="dashboard-label settings">Settings</div>
            </div>
          </a>
        </div>
        <div className="div-block-13">
          <div className="div-block-14">
            <div className="div-block-15">
              <div className="form-block-2 w-form">
                <form id="email-form" name="email-form" data-name="Email Form" className="form-2"><input type="text" className="search-field w-input" maxLength={256} name="Rooms" data-name="Rooms" placeholder="Search hosted rooms..." id="Rooms" /></form>
                <div className="w-form-done" />
                <div className="w-form-fail" />
              </div>
              <div className="div-block-32"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe8baac34ce2448fbb4_image%20(5).png" loading="lazy" width={25} sizes="(max-width: 479px) 7vw, (max-width: 767px) 25px, (max-width: 991px) 3vw, 25px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe8baac34ce2448fbb4_image%20(5)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe8baac34ce2448fbb4_image%20(5).png 599w" alt="" /></div>
            </div>
            <div className="div-block-16">
              <div className="div-block-18"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe876a2a3fa832252ad_image%20(4).png" loading="lazy" width={25} alt="" className="image-4" /></div>
              <div className="div-block-19">
                <div className="form-block-3 w-form">
                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="form-3"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={60} sizes="(max-width: 479px) 16vw, 60px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-8" /><select id="field" name="field" className="select-field-2 w-select" /></form>
                  <div className="w-form-done" />
                  <div className="w-form-fail" />
                </div>
              </div><a href="#" className="link-block-8 w-inline-block">
                <div className="text-block-14">LogOut</div>
              </a>
            </div>
          </div>
          <div>
            <div className="div-block-25">
              <div className="div-block-34">
                <div className="div-block-35">
                  <div className="div-block-31">
                    <div className="text-block-7">Your Hosted Rooms</div>
                  </div>
                  <div className="div-block-26">
                    <div className="text-block-10">No rooms hosted yet. Would you like to</div><a href="#" className="link-2">host one?</a>
                  </div>
                </div><a href="#" className="link-block-9 w-inline-block">
                  <div className="div-block-17">
                    <div className="text-block-3">+</div>
                  </div>
                  <div className="text-block-15">Host a room</div>
                </a>
              </div>
              <div className="div-block-43"><a data-w-id="6fedb361-3526-5ad4-eb30-fc0df37dbffb" href="#" className="link-block-12 w-inline-block">
                  <div className="small">
                    <div className="div-block-45">
                      <div className="div-block-36">
                        <div>
                          <div>Car Care - Home Page</div>
                        </div>
                        <div>
                          <div className="text-block-17">Tue, Jun 29</div>
                        </div>
                      </div>
                      <div>
                        <p className="paragraph-2">Project Manager - Roki Pasto </p>
                      </div>
                    </div>
                    <div className="div-block-40">
                      <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                      <div className="div-block-42">
                        <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={25} alt="" className="image-9" />
                          <div className="text-block-16">45</div>
                        </div>
                        <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                          <div className="text-block-16">45</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a><a href="#" className="link-block-13 w-inline-block">
                  <div className="medium">
                    <div>
                      <div className="div-block-36">
                        <div>
                          <div>Car Care - Home Page</div>
                        </div>
                        <div>
                          <div className="text-block-17">Tue, Jun 29</div>
                        </div>
                      </div>
                      <div>
                        <p className="paragraph-2">Project Manager - Roki Pasto </p>
                      </div>
                    </div>
                    <div className="div-block-37">
                      <div className="div-block-37">
                        <div className="currentprogress">
                          <div className="text-block-22">50<br />‍</div>
                        </div>
                        <div className="div-block-37-copy">
                          <div className="text-block-18">of</div>
                        </div>
                        <div className="div-block-37">
                          <div className="text-block-19">100%</div>
                        </div>
                      </div>
                      <div className="div-block-37">
                        <div className="div-block-37-copy">
                          <div className="text-block-21">3</div>
                        </div>
                        <div className="div-block-37">
                          <div className="text-block-20">days left</div>
                        </div>
                      </div>
                    </div>
                    <div className="progress-bar">
                      <div className="bar" />
                    </div>
                    <div className="div-block-40">
                      <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                      <div className="div-block-42">
                        <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                          <div className="text-block-16">45</div>
                        </div>
                        <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                          <div className="text-block-16">45</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="large">
                  <div className="div-block-36">
                    <div>
                      <div>Promotional Video</div>
                    </div>
                    <div>
                      <div>Tue, Jun 29</div>
                    </div>
                  </div>
                  <div className="thumbnail__wrapper"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA.jpg" loading="lazy" width={394} sizes="(max-width: 479px) 197.8515625px, (max-width: 767px) 41vw, (max-width: 991px) 35vw, (max-width: 1279px) 24vw, 15vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA.jpg 2464w" alt="" className="image-9-copy" /></div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small">
                  <div className="div-block-45">
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medium">
                  <div>
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-37">
                    <div className="div-block-37">
                      <div className="currentprogress">
                        <div className="text-block-22">50<br />‍</div>
                      </div>
                      <div className="div-block-37-copy">
                        <div className="text-block-18">of</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-19">100%</div>
                      </div>
                    </div>
                    <div className="div-block-37">
                      <div className="div-block-37-copy">
                        <div className="text-block-21">3</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-20">days left</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="bar" />
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small">
                  <div className="div-block-45">
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="large">
                  <div className="div-block-36">
                    <div>
                      <div>Promotional Video</div>
                    </div>
                    <div>
                      <div>Tue, Jun 29</div>
                    </div>
                  </div>
                  <div className="thumbnail__wrapper"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash.jpg" loading="lazy" width={397} sizes="(max-width: 479px) 197.8515625px, (max-width: 767px) 41vw, (max-width: 991px) 35vw, (max-width: 1279px) 24vw, 15vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc0923aea8f4b4c5cb1731_fernando-puente-Pje_ZMU1M9A-unsplash.jpg 3159w" alt="" className="image-9-copy" /></div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medium">
                  <div>
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-37">
                    <div className="div-block-37">
                      <div className="currentprogress">
                        <div className="text-block-22">50<br />‍</div>
                      </div>
                      <div className="div-block-37-copy">
                        <div className="text-block-18">of</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-19">100%</div>
                      </div>
                    </div>
                    <div className="div-block-37">
                      <div className="div-block-37-copy">
                        <div className="text-block-21">3</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-20">days left</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="bar" />
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medium">
                  <div>
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-37">
                    <div className="div-block-37">
                      <div className="currentprogress">
                        <div className="text-block-22">50<br />‍</div>
                      </div>
                      <div className="div-block-37-copy">
                        <div className="text-block-18">of</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-19">100%</div>
                      </div>
                    </div>
                    <div className="div-block-37">
                      <div className="div-block-37-copy">
                        <div className="text-block-21">3</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-20">days left</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="bar almost" />
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="large">
                  <div className="div-block-36">
                    <div>
                      <div>Promotional Video</div>
                    </div>
                    <div>
                      <div>Tue, Jun 29</div>
                    </div>
                  </div>
                  <div className="thumbnail__wrapper"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd254f44f7e063df6b8_Performance-Venue.jpg" loading="lazy" width={394} sizes="(max-width: 479px) 197.8515625px, (max-width: 767px) 41vw, (max-width: 991px) 35vw, (max-width: 1279px) 24vw, 15vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd254f44f7e063df6b8_Performance-Venue-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd254f44f7e063df6b8_Performance-Venue-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd254f44f7e063df6b8_Performance-Venue-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd254f44f7e063df6b8_Performance-Venue-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd254f44f7e063df6b8_Performance-Venue.jpg 2500w" alt="" className="image-9-copy" /></div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="large">
                  <div className="div-block-36">
                    <div>
                      <div>Promotional Video</div>
                    </div>
                    <div>
                      <div>Tue, Jun 29</div>
                    </div>
                  </div>
                  <div className="thumbnail__wrapper"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash.jpg" loading="lazy" width={394} sizes="(max-width: 479px) 197.8515625px, (max-width: 767px) 41vw, (max-width: 991px) 35vw, (max-width: 1279px) 24vw, 15vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc092036e9bcc60a183a8b_jakayla-toney-66xudbdQZuU-unsplash.jpg 3154w" alt="" className="image-9-copy" /></div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medium">
                  <div>
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-37">
                    <div className="div-block-37">
                      <div className="currentprogress">
                        <div className="text-block-22">50<br />‍</div>
                      </div>
                      <div className="div-block-37-copy">
                        <div className="text-block-18">of</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-19">100%</div>
                      </div>
                    </div>
                    <div className="div-block-37">
                      <div className="div-block-37-copy">
                        <div className="text-block-21">3</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-20">days left</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="bar" />
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="large">
                  <div className="div-block-36">
                    <div>
                      <div>Promotional Video</div>
                    </div>
                    <div>
                      <div>Tue, Jun 29</div>
                    </div>
                  </div>
                  <div className="thumbnail__wrapper"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd39775fdd283a88738_020519-sotu-superwide.jpg" loading="lazy" width={394} sizes="(max-width: 479px) 197.8515625px, (max-width: 767px) 41vw, (max-width: 991px) 35vw, (max-width: 1279px) 24vw, 15vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd39775fdd283a88738_020519-sotu-superwide-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd39775fdd283a88738_020519-sotu-superwide-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd39775fdd283a88738_020519-sotu-superwide.jpg 937w" alt="" className="image-9-copy" /></div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small">
                  <div className="div-block-45">
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medium">
                  <div>
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-37">
                    <div className="div-block-37">
                      <div className="currentprogress">
                        <div className="text-block-22">50<br />‍</div>
                      </div>
                      <div className="div-block-37-copy">
                        <div className="text-block-18">of</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-19">100%</div>
                      </div>
                    </div>
                    <div className="div-block-37">
                      <div className="div-block-37-copy">
                        <div className="text-block-21">3</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-20">days left</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="bar" />
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="large">
                  <div className="div-block-36">
                    <div>
                      <div>Promotional Video</div>
                    </div>
                    <div>
                      <div>Tue, Jun 29</div>
                    </div>
                  </div>
                  <div className="thumbnail__wrapper"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA.jpg" loading="lazy" width={378} sizes="(max-width: 479px) 197.8515625px, (max-width: 767px) 41vw, (max-width: 991px) 35vw, (max-width: 1279px) 24vw, 15vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA.jpg 2464w" alt="" className="image-9-copy" /></div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medium">
                  <div>
                    <div className="div-block-36">
                      <div>
                        <div>Car Care - Home Page</div>
                      </div>
                      <div>
                        <div className="text-block-17">Tue, Jun 29</div>
                      </div>
                    </div>
                    <div>
                      <p className="paragraph-2">Project Manager - Roki Pasto </p>
                    </div>
                  </div>
                  <div className="div-block-37">
                    <div className="div-block-37">
                      <div className="currentprogress">
                        <div className="text-block-22">50<br />‍</div>
                      </div>
                      <div className="div-block-37-copy">
                        <div className="text-block-18">of</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-19">100%</div>
                      </div>
                    </div>
                    <div className="div-block-37">
                      <div className="div-block-37-copy">
                        <div className="text-block-21">3</div>
                      </div>
                      <div className="div-block-37">
                        <div className="text-block-20">days left</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="bar" />
                  </div>
                  <div className="div-block-40">
                    <div className="div-block-39"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy" /><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg" loading="lazy" width={39} sizes="38.984375px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w" alt="" className="image-10-copy-copy" /></div>
                    <div className="div-block-42">
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png" loading="lazy" width={28} alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                      <div className="div-block-41"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png" loading="lazy" width={38} sizes="37.98828125px" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w" alt="" className="image-9" />
                        <div className="text-block-16">45</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-33">
            <div className="div-block-25">
              <div className="div-block-31">
                <div className="text-block-7">Your Current Reservations</div>
              </div>
              <div className="div-block-26">
                <div className="text-block-10">No reservations found. Search above for hosted rooms.</div>
              </div>
              <div className="div-block-22">
                <div className="div-block-28">
                  <div className="div-block-23">
                    <div>
                      <div className="div-block-24">
                        <div className="text-block-9">9:00am 11th June</div>
                        <div className="text-block-9">11:00am 11th June</div>
                      </div>
                      <div className="text-block-8">Mondavi Center Room B</div>
                    </div>
                  </div>
                  <div className="div-block-27"><a href="#" className="link-block-4-copy w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png" loading="lazy" width={26} sizes="100vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png 580w" alt="" className="image-5" />
                      <div className="text-block-11">Edit</div>
                    </a><a href="#" className="link-block-4 w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd996d0359e0176c492f_image%20(8).png" loading="lazy" width={25} alt="" className="image-6" />
                      <div className="text-block-11">Delete</div>
                    </a></div>
                </div>
                <div className="div-block-28">
                  <div className="div-block-23">
                    <div>
                      <div className="div-block-24">
                        <div className="text-block-9">9:00am 11th June</div>
                        <div className="text-block-9">11:00am 11th June</div>
                      </div>
                      <div className="text-block-8">Shields Library Room 90A</div>
                    </div>
                  </div>
                  <div className="div-block-27"><a href="#" className="link-block-4-copy w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png" loading="lazy" width={26} sizes="100vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png 580w" alt="" className="image-5" />
                      <div className="text-block-11">Edit</div>
                    </a><a href="#" className="link-block-4 w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd996d0359e0176c492f_image%20(8).png" loading="lazy" width={25} alt="" className="image-6" />
                      <div className="text-block-11">Delete</div>
                    </a></div>
                </div>
                <div className="div-block-28">
                  <div className="div-block-23">
                    <div>
                      <div className="div-block-24">
                        <div className="text-block-9">9:00am 11th June</div>
                        <div className="text-block-9">11:00am 11th June</div>
                      </div>
                      <div className="text-block-8">Olson Hall Room 110</div>
                    </div>
                  </div>
                  <div className="div-block-27"><a href="#" className="link-block-4-copy w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png" loading="lazy" width={26} sizes="100vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png 580w" alt="" className="image-5" />
                      <div className="text-block-11">Edit</div>
                    </a><a href="#" className="link-block-4 w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd996d0359e0176c492f_image%20(8).png" loading="lazy" width={25} alt="" className="image-6" />
                      <div className="text-block-11">Delete</div>
                    </a></div>
                </div>
                <div className="div-block-28">
                  <div className="div-block-23">
                    <div>
                      <div className="div-block-24">
                        <div className="text-block-9">9:00am 11th June</div>
                        <div className="text-block-9">11:00am 11th June</div>
                      </div>
                      <div className="text-block-8">Wellman Hall Room 210</div>
                    </div>
                  </div>
                  <div className="div-block-27"><a href="#" className="link-block-4-copy w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png" loading="lazy" width={26} sizes="100vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png 580w" alt="" className="image-5" />
                      <div className="text-block-11">Edit</div>
                    </a><a href="#" className="link-block-4 w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd996d0359e0176c492f_image%20(8).png" loading="lazy" width={25} alt="" className="image-6" />
                      <div className="text-block-11">Delete</div>
                    </a></div>
                </div>
                <div className="div-block-28">
                  <div className="div-block-23">
                    <div>
                      <div className="div-block-24">
                        <div className="text-block-9">9:00am 11th June</div>
                        <div className="text-block-9">11:00am 11th June</div>
                      </div>
                      <div className="text-block-8">Scrub Oak Auditorium</div>
                    </div>
                  </div>
                  <div className="div-block-27"><a href="#" className="link-block-4-copy w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png" loading="lazy" width={26} sizes="100vw" srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd99576ab73c3abd9d85_image%20(9).png 580w" alt="" className="image-5" />
                      <div className="text-block-11">Edit</div>
                    </a><a href="#" className="link-block-4 w-inline-block"><img src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c1cd996d0359e0176c492f_image%20(8).png" loading="lazy" width={25} alt="" className="image-6" />
                      <div className="text-block-11">Delete</div>
                    </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Dashboard;