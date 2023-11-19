import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DocumentCllection.css";

const DocumentCllection = () => {
  const navigate = useNavigate();

  const onDetailsCollectionContainerClick = useCallback(() => {
    navigate("/");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick2 = useCallback(() => {
    navigate("/statement-of-purpose");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick3 = useCallback(() => {
    navigate("/interview-availability");
   
    
  }, [navigate]);
  



  return (
    <div className="document-cllection">
      <div className="global-nav2">
        <img className="base-icon2" alt="" src="/base.svg" />
        <div className="menuglobal-nav-item8">
          <div className="menuglobal-nav-item-child5" />
          <div className="jobs8">Jobs</div>
        </div>
        <div className="menuglobal-nav-item9">
          <div className="menuglobal-nav-item-child5" />
          <div className="jobs8">Calendar</div>
        </div>
        <div className="menuglobal-nav-item10">
          <div className="menuglobal-nav-item-child5" />
          <div className="jobs8">Candidates</div>
        </div>
        <div className="menuglobal-nav-item11">
          <div className="menuglobal-nav-item-child5" />
          <div className="jobs8">Reports</div>
        </div>
        <img className="lgsettings-icon6" alt="" src="/lgsettings.svg" />
        <div className="profile2">
          <div className="profile-child2" />
          <div className="profile-child3" />
          <div className="raju-rastogi2">Raju Rastogi</div>
          <img className="xsarrow-down-icon2" alt="" src="/xsarrow-down.svg" />
        </div>
        <img className="lgsettings-icon7" alt="" src="/lgsettings.svg" />
        <img className="lgsettings-icon8" alt="" src="/lgsettings.svg" />
      </div>
      <div className="logo2">
        <img
          className="turbohirelonglogo-1-icon2"
          alt=""
          src="/turbohirelonglogo-1@2x.png"
        />
      </div>
      <div className="document-cllection-child" />
      <div className="document-cllection-item" />
      <div className="document-cllection-inner" />
      <div className="document-cllection-child1" />
      <div className="document-cllection-child2" />
      <div className="rectangle-parent12" onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child35"  />
        <div className="details-collection2">Details Collection</div>
        <div className="collect-information-from-container2">
          <p className="collect-information-from2">{`Collect information from Candidates on their education, work experience, `}</p>
          <p className="collect-information-from2">contact no,etc</p>
        </div>
        <div className="frame-child36" />
      </div>
      <div className="rectangle-parent13" onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child35" />
        <div className="details-collection2">New Form</div>
        <div className="start-creating-a6">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child36" />
      </div>
      <div className="rectangle-parent14">
        <div className="frame-child39" />
        <div className="details-collection2">Document Collection</div>
        <div className="save-time-and2">{`Save time and efforts: Explore this template to find a set of questions required for document collection `}</div>
        <div className="frame-child40" />
      </div>
      <div className="rectangle-parent15"  onClick={onDetailsCollectionContainerClick2}>
        <div className="frame-child35" />
        <div className="statement-of-purpose3">Statement of Purpose</div>
        <div className="start-creating-a7">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child42" />
      </div>
      <div className="header2">
        <div className="header-inner" />
        <img className="clear-24px-icon2" alt="" src="/clear24px.svg" />
        <div className="select-a-template-container">
          <div className="select-a-template2">Select a Template</div>
          <div className="create-a-new2">
            Create a new from or choose from the existing templates
          </div>
        </div>
        <div className="vector-container">
          <img className="frame-child43" alt="" src="/vector-131.svg" />
          <div className="ellipse-parent2">
            <div className="group-child5" />
            <img className="done-24px-2-icon6" alt="" src="/done24px-2.svg" />
            <div className="form-creation2">Form Creation</div>
          </div>
          <img className="frame-child44" alt="" src="/vector-131.svg" />
          <div className="ellipse-parent3">
            <div className="group-child5" />
            <div className="review2">Review</div>
          </div>
          <div className="set-up-container">
            <div className="set-up2">Set up</div>
            <div className="group-child5" />
            <img className="done-24px-2-icon7" alt="" src="/done24px-2.svg" />
          </div>
          <img className="frame-child45" alt="" src="/vector-131.svg" />
          <div className="form-selection-container">
            <div className="form-selection2">Form Selection</div>
            <div className="group-child8" />
            <img className="done-24px-2-icon8" alt="" src="/done24px-2.svg" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent16" onClick={onDetailsCollectionContainerClick3}>
        <div className="frame-child35" />
        <div className="statement-of-purpose3">{`Interview Availability `}</div>
        <div className="collect-information-from-container2">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child42" />
      </div>
      <div className="explore-the-following2">
        Explore the following Templates:
      </div>
      <div className="preview-container">
        <div className="preview2">Preview</div>
        <div className="you-will-be2">
          You will be able to customize the fields in the later stage
        </div>
      </div>
      <div className="footer2">
        <div className="footer-child1" />
        <img className="navigate-icon2" alt="" src="/navigate.svg" />
        <img className="options-icon2" alt="" src="/options.svg" />
        <div className="footer-child2" />
        <div className="button-primary6">
          <div className="button-primary-child4" />
          <img className="settings-icon6" alt="" src="/settings.svg" />
          <div className="next2"  onClick={onDetailsCollectionContainerClick2}>next</div>
        </div>
        <div className="button-secondary8">
          <div className="button-secondary9">
            <div className="button-secondary9">
              <div className="button-primary-child5" />
              <img className="settings-icon6" alt="" src="/settings1.svg" />
              <div className="next2">Select more Candidates</div>
            </div>
          </div>
        </div>
        <img
          className="attach-file-24px-icon2"
          alt=""
          src="/attach-file-24px.svg"
        />
        <div className="button-secondary10">
          <div className="button-secondary9">
            <div className="button-secondary9">
              <div className="button-primary-child5" />
              <img className="settings-icon6" alt="" src="/settings1.svg" />
              <div className="next2">Previous</div>
            </div>
          </div>
        </div>
      </div>
      <div className="document-cllection-child3" />
      <div className="rectangle-parent17">
        <div className="frame-child48" />
        <div className="rectangle-parent18">
          <div className="frame-child49" />
          <div className="frame-parent10">
            <div className="provide-the-following-informat-frame">
              <div className="provide-the-following2">
                Provide the following information to process your application
              </div>
            </div>
            <div className="name-of-the-enquiry-form-container">
              <div className="preview2">Name of the Enquiry Form</div>
              <div className="one-line-description2">
                One line description of the form
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child50" alt="" src="/vector-179.svg" />
        <div className="frame-parent11">
          <div className="frame-parent12">
            <div className="frame-parent13">
              <div className="how-did-you-hear-about-us-frame">
                <div className="how-did-you2">
                  6. How did you hear about us?
                </div>
              </div>
              <div className="note-one-line2">{`*Note: One line hint for the answer `}</div>
            </div>
            <div className="frame-parent14">
              <div className="check-box-outline-blank-24px-4-parent4">
                <img
                  className="check-box-outline-blank-24px-4-icon6"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication2">
                  Professional Publication
                </div>
              </div>
              <div className="check-box-outline-blank-24px-4-parent5">
                <img
                  className="check-box-outline-blank-24px-4-icon6"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication2">
                  Company Employee
                </div>
              </div>
              <div className="check-box-outline-blank-24px-4-parent6">
                <img
                  className="check-box-outline-blank-24px-4-icon6"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication2">Newspaper</div>
              </div>
            </div>
          </div>
          <div className="frame-parent15">
            <div className="th-marksheet-wrapper">
              <div className="th-marksheet">1. 10th Marksheet*</div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent16">
            <div className="th-marksheet-wrapper">
              <div className="th-marksheet1">2. 12th Marksheet*</div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent17">
            <div className="th-marksheet-wrapper">
              <div className="th-marksheet">3. Graduation Marksheet*</div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent18">
            <div className="th-marksheet-wrapper">
              <div className="post-graduation-marksheet">
                4. Post Graduation Marksheet
              </div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent19">
            <div className="th-marksheet-wrapper">
              <div className="post-graduation-marksheet">5. Offer Letter*</div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent20">
            <div className="th-marksheet-wrapper">
              <div className="post-graduation-marksheet">6. Salary Slips*</div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent21">
            <div className="th-marksheet-wrapper">
              <div className="post-graduation-marksheet">
                7. Bank Statement*
              </div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent22">
            <div className="th-marksheet-wrapper">
              <div className="post-graduation-marksheet">
                8. Increment Letter (if any)
              </div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
          <div className="frame-parent23">
            <div className="th-marksheet-wrapper">
              <div className="post-graduation-marksheet">
                9. Others (if any)
              </div>
            </div>
            <div className="frame-child51" />
            <div className="attach-file-upto">Attach file upto 5kb</div>
            <img
              className="calendar-today-24px-1-icon4"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="attachment-24px-2-icon"
              alt=""
              src="/attachment24px-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCllection;
