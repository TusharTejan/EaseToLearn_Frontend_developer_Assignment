import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StatementOfPurpose.css";


const StatementOfPurpose = () => {
  
  const navigate = useNavigate();

  const onDetailsCollectionContainerClick = useCallback(() => {
    navigate("/");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick2 = useCallback(() => {
    navigate("/document-cllection");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick3 = useCallback(() => {
    navigate("/interview-availability");
   
    
  }, [navigate]);

  return (
    <div className="statement-of-purpose1">
      <div className="global-nav1">
        <img className="base-icon1" alt="" src="/base.svg" />
        <div className="menuglobal-nav-item4">
          <div className="menuglobal-nav-item-child1" />
          <div className="jobs4">Jobs</div>
        </div>
        <div className="menuglobal-nav-item5">
          <div className="menuglobal-nav-item-child1" />
          <div className="jobs4">Calendar</div>
        </div>
        <div className="menuglobal-nav-item6">
          <div className="menuglobal-nav-item-child1" />
          <div className="jobs4">Candidates</div>
        </div>
        <div className="menuglobal-nav-item7">
          <div className="menuglobal-nav-item-child1" />
          <div className="jobs4">Reports</div>
        </div>
        <img className="lgsettings-icon3" alt="" src="/lgsettings.svg" />
        <div className="profile1">
          <div className="profile-inner" />
          <div className="profile-child1" />
          <div className="raju-rastogi1">Raju Rastogi</div>
          <img className="xsarrow-down-icon1" alt="" src="/xsarrow-down.svg" />
        </div>
        <img className="lgsettings-icon4" alt="" src="/lgsettings.svg" />
        <img className="lgsettings-icon5" alt="" src="/lgsettings.svg" />
      </div>
      <div className="logo1">
        <img
          className="turbohirelonglogo-1-icon1"
          alt=""
          src="/turbohirelonglogo-1@2x.png"
        />
      </div>
      <div className="statement-of-purpose-child" />
      <div className="statement-of-purpose-item" />
      <div className="statement-of-purpose-inner" />
      <div className="statement-of-purpose-child1" />
      <div className="statement-of-purpose-child2" />
      <div className="rectangle-parent4" onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child17" />
        <div className="details-collection1">Details Collection</div>
        <div className="collect-information-from-container1">
          <p className="collect-information-from1">{`Collect information from Candidates on their education, work experience, `}</p>
          <p className="collect-information-from1">contact no,etc</p>
        </div>
        <div className="frame-child18" />
      </div>
      <div className="rectangle-parent5" onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child17" />
        <div className="details-collection1">New Form</div>
        <div className="start-creating-a3">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child18" />
      </div>
      <div className="rectangle-parent6"onClick={onDetailsCollectionContainerClick2}>
        <div className="frame-child17" />
        <div className="details-collection1">Document Collection</div>
        <div className="save-time-and1">{`Save time and efforts: Explore this template to find a set of questions required for document collection `}</div>
        <div className="frame-child18" />
      </div>
      <div className="rectangle-parent7">
        <div className="frame-child23" />
        <div className="statement-of-purpose2">Statement of Purpose</div>
        <div className="start-creating-a4">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child24" />
      </div>
      <div className="header1">
        <div className="header-item" />
        <img className="clear-24px-icon1" alt="" src="/clear24px.svg" />
        <div className="select-a-template-group">
          <div className="select-a-template1">Select a Template</div>
          <div className="create-a-new1">
            Create a new from or choose from the existing templates
          </div>
        </div>
        <div className="vector-group">
          <img className="frame-child25" alt="" src="/vector-131.svg" />
          <div className="ellipse-container">
            <div className="group-child1" />
            <img className="done-24px-2-icon3" alt="" src="/done24px-2.svg" />
            <div className="form-creation1">Form Creation</div>
          </div>
          <img className="frame-child26" alt="" src="/vector-131.svg" />
          <div className="ellipse-parent1">
            <div className="group-child1" />
            <div className="review1">Review</div>
          </div>
          <div className="set-up-group">
            <div className="set-up1">Set up</div>
            <div className="group-child1" />
            <img className="done-24px-2-icon4" alt="" src="/done24px-2.svg" />
          </div>
          <img className="frame-child27" alt="" src="/vector-131.svg" />
          <div className="form-selection-group">
            <div className="form-selection1">Form Selection</div>
            <div className="group-child4" />
            <img className="done-24px-2-icon5" alt="" src="/done24px-2.svg" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent8" onClick={onDetailsCollectionContainerClick3}>
        <div className="frame-child17" />
        <div className="statement-of-purpose2">{`Interview Availability `}</div>
        <div className="collect-information-from-container1">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child29" />
      </div>
      <div className="explore-the-following1">
        Explore the following Templates:
      </div>
      <div className="preview-group">
        <div className="preview1">Preview</div>
        <div className="you-will-be1">
          You will be able to customize the fields in the later stage
        </div>
      </div>
      <div className="footer1">
        <div className="footer-inner" />
        <img className="navigate-icon1" alt="" src="/navigate.svg" />
        <img className="options-icon1" alt="" src="/options.svg" />
        <div className="line-div" />
        <div className="button-primary3">
          <div className="button-primary-child1" />
          <img className="settings-icon3" alt="" src="/settings.svg" />
          <div className="next1" onClick={onDetailsCollectionContainerClick3}>next</div>
        </div>
        <div className="button-secondary4">
          <div className="button-secondary5">
            <div className="button-secondary5">
              <div className="button-primary-child2" />
              <img className="settings-icon3" alt="" src="/settings1.svg" />
              <div className="next1">Select more Candidates</div>
            </div>
          </div>
        </div>
        <img
          className="attach-file-24px-icon1"
          alt=""
          src="/attach-file-24px.svg"
        />
        <div className="button-secondary6">
          <div className="button-secondary5">
            <div className="button-secondary5">
              <div className="button-primary-child2" />
              <img className="settings-icon3" alt="" src="/settings1.svg" />
              <div className="next1">Previous</div>
            </div>
          </div>
        </div>
      </div>
      <div className="statement-of-purpose-child3" />
      <div className="rectangle-parent9">
        <div className="frame-child30" />
        <div className="rectangle-parent10">
          <div className="frame-child31" />
          <div className="frame-parent5">
            <div className="provide-the-following-informat-container">
              <div className="provide-the-following1">
                Provide the following information to process your application
              </div>
            </div>
            <div className="name-of-the-enquiry-form-group">
              <div className="preview1">Name of the Enquiry Form</div>
              <div className="one-line-description1">
                One line description of the form
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child32" alt="" src="/vector-179.svg" />
        <div className="email-group">
          <div className="email2">
            <div className="email-item" />
            <div className="word-limit">300 word limit</div>
            <div className="tell-me-about-a-time-you-were-wrapper">
              <div className="tell-me-about">
                1. Tell me about a time you were asked to do something you had
                never done before. How did you react? What did you learn?
              </div>
            </div>
            <div className="enter-a-description">
              Enter a description for the long answer
            </div>
          </div>
          <div className="email3">
            <div className="email-item" />
            <div className="word-limit">300 word limit</div>
            <div className="tell-me-about-a-time-you-were-wrapper">
              <div className="tell-me-about">
                2. Tell me about the last time something significant didn’t go
                according to plan at work. What was your role? What was the
                outcome?
              </div>
            </div>
            <div className="enter-a-description">
              Enter a description for the long answer
            </div>
          </div>
          <div className="email4">
            <div className="email-child1" />
            <div className="word-limit2">300 word limit</div>
            <div className="what-are-the-three-things-that-wrapper">
              <div className="what-are-the">
                2. What are the three things that are most important to you in a
                job?
              </div>
            </div>
            <div className="enter-a-description2">
              Enter a description for the long answer
            </div>
          </div>
          <div className="frame-parent6">
            <div className="contact-no-wrapper">
              <div className="contact-no">4. Contact no</div>
            </div>
            <div className="rectangle-parent11">
              <div className="frame-child33" />
              <div className="enter-your-10">
                Enter your 10 digit contact no
              </div>
              <img className="frame-child34" alt="" src="/vector-178.svg" />
            </div>
          </div>
          <div className="frame-parent7">
            <div className="frame-parent8">
              <div className="how-did-you-hear-about-us-container">
                <div className="about-your-last">
                  6. How did you hear about us?
                </div>
              </div>
              <div className="note-one-line1">{`*Note: One line hint for the answer `}</div>
            </div>
            <div className="frame-parent9">
              <div className="check-box-outline-blank-24px-4-parent1">
                <img
                  className="check-box-outline-blank-24px-4-icon3"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication1">
                  Professional Publication
                </div>
              </div>
              <div className="check-box-outline-blank-24px-4-parent2">
                <img
                  className="check-box-outline-blank-24px-4-icon3"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication1">
                  Company Employee
                </div>
              </div>
              <div className="check-box-outline-blank-24px-4-parent3">
                <img
                  className="check-box-outline-blank-24px-4-icon3"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication1">Newspaper</div>
              </div>
            </div>
          </div>
          <div className="email5">
            <div className="email-child2" />
            <div className="how-did-you-hear-about-us-container">
              <div className="about-your-last">7. About your last project</div>
            </div>
            <div className="describe-your-role">{`Describe your role in the project `}</div>
          </div>
          <div className="max-500-words1">max 500 words</div>
        </div>
      </div>
    </div>
  );
};

export default StatementOfPurpose;
