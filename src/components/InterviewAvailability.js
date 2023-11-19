import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InterviewAvailability.css";

const InterviewAvailability = () => {
  
  
  const navigate = useNavigate();

  const onDetailsCollectionContainerClick = useCallback(() => {
    navigate("/");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick2 = useCallback(() => {
    navigate("/document-cllection");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick3 = useCallback(() => {
    navigate("/statement-of-purpose");
   
    
  }, [navigate]);

  return (
    <div className="interview-availability">
      <div className="global-nav">
        <img className="base-icon" alt="" src="/base.svg" />
        <div className="menuglobal-nav-item">
          <div className="menuglobal-nav-item-child" />
          <div className="jobs">Jobs</div>
        </div>
        <div className="menuglobal-nav-item1">
          <div className="menuglobal-nav-item-child" />
          <div className="jobs">Calendar</div>
        </div>
        <div className="menuglobal-nav-item2">
          <div className="menuglobal-nav-item-child" />
          <div className="jobs">Candidates</div>
        </div>
        <div className="menuglobal-nav-item3">
          <div className="menuglobal-nav-item-child" />
          <div className="jobs">Reports</div>
        </div>
        <img className="lgsettings-icon" alt="" src="/lgsettings.svg" />
        <div className="profile">
          <div className="profile-child" />
          <div className="profile-item" />
          <div className="raju-rastogi">Raju Rastogi</div>
          <img className="xsarrow-down-icon" alt="" src="/xsarrow-down.svg" />
        </div>
        <img className="lgsettings-icon1" alt="" src="/lgsettings.svg" />
        <img className="lgsettings-icon2" alt="" src="/lgsettings.svg" />
      </div>
      <div className="logo">
        <img
          className="turbohirelonglogo-1-icon"
          alt=""
          src="/turbohirelonglogo-1@2x.png"
        />
      </div>
      <div className="interview-availability-child" />
      <div className="interview-availability-item" />
      <div className="interview-availability-inner" />
      <div className="interview-availability-child1" />
      <div className="interview-availability-child2" />
      <div className="rectangle-parent"  onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child" />
        <div className="details-collection">Details Collection</div>
        <div className="collect-information-from-container">
          <p className="collect-information-from">{`Collect information from Candidates on their education, work experience, `}</p>
          <p className="collect-information-from">contact no,etc</p>
        </div>
        <div className="frame-item" />
      </div>
      <div className="rectangle-group" onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child" />
        <div className="details-collection">New Form</div>
        <div className="start-creating-a">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-item" />
      </div>
      <div className="rectangle-container"  onClick={onDetailsCollectionContainerClick2}>
        <div className="frame-child" />
        <div className="details-collection">Document Collection</div>
        <div className="save-time-and">{`Save time and efforts: Explore this template to find a set of questions required for document collection `}</div>
        <div className="frame-item" />
      </div>
      <div className="frame-div"  onClick={onDetailsCollectionContainerClick3}>
        <div className="frame-child" />
        <div className="statement-of-purpose">Statement of Purpose</div>
        <div className="start-creating-a1">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child5" />
      </div>
      <div className="header">
        <div className="header-child" />
        <img className="clear-24px-icon" alt="" src="/clear24px.svg" />
        <div className="select-a-template-parent">
          <div className="select-a-template">Select a Template</div>
          <div className="create-a-new">
            Create a new from or choose from the existing templates
          </div>
        </div>
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector-131.svg" />
          <div className="ellipse-parent">
            <div className="group-child" />
            <img className="done-24px-2-icon" alt="" src="/done24px-2.svg" />
            <div className="form-creation">Form Creation</div>
          </div>
          <img className="frame-child6" alt="" src="/vector-131.svg" />
          <div className="ellipse-group">
            <div className="group-child" />
            <div className="review">Review</div>
          </div>
          <div className="set-up-parent">
            <div className="set-up">Set up</div>
            <div className="group-child" />
            <img className="done-24px-2-icon1" alt="" src="/done24px-2.svg" />
          </div>
          <img className="frame-child7" alt="" src="/vector-131.svg" />
          <div className="form-selection-parent">
            <div className="form-selection">Form Selection</div>
            <div className="ellipse-div" />
            <img className="done-24px-2-icon2" alt="" src="/done24px-2.svg" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent1">
        <div className="frame-child8" />
        <div className="statement-of-purpose">{`Interview Availability `}</div>
        <div className="collect-information-from-container">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child9" />
      </div>
      <div className="explore-the-following">
        Explore the following Templates:
      </div>
      <div className="preview-parent">
        <div className="preview">Preview</div>
        <div className="you-will-be">
          You will be able to customize the fields in the later stage
        </div>
      </div>
      <div className="footer">
        <div className="footer-child" />
        <img className="navigate-icon" alt="" src="/navigate.svg" />
        <img className="options-icon" alt="" src="/options.svg" />
        <div className="footer-item" />
        <div className="button-primary">
          <div className="button-primary-child" />
          <img className="settings-icon" alt="" src="/settings.svg" />
          <div className="next">Finish</div>
        </div>
        <div className="button-secondary">
          <div className="button-secondary1">
            <div className="button-secondary1">
              <div className="button-primary-item" />
              <img className="settings-icon" alt="" src="/settings1.svg" />
              <div className="next">Select more Candidates</div>
            </div>
          </div>
        </div>
        <img
          className="attach-file-24px-icon"
          alt=""
          src="/attach-file-24px.svg"
        />
        <div className="button-secondary2">
          <div className="button-secondary1">
            <div className="button-secondary1">
              <div className="button-primary-item" />
              <img className="settings-icon" alt="" src="/settings1.svg" />
              <div className="next">Previous</div>
            </div>
          </div>
        </div>
      </div>
      <div className="interview-availability-child3" />
      <div className="rectangle-parent2">
        <div className="frame-child10" />
        <div className="rectangle-parent3">
          <div className="frame-child11" />
          <div className="frame-parent">
            <div className="provide-the-following-informat-wrapper">
              <div className="provide-the-following">
                Provide the following information to process your application
              </div>
            </div>
            <div className="name-of-the-enquiry-form-parent">
              <div className="preview">Name of the Enquiry Form</div>
              <div className="one-line-description">
                One line description of the form
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child12" alt="" src="/vector-179.svg" />
        <div className="name-parent">
          <div className="name">
            <div className="name-child" />
            <div className="email-parent">
              <div className="email">1. Email*</div>
              <div className="example-useridgmailcom">
                Example - userid@gmail.com
              </div>
            </div>
          </div>
          <div className="email1">
            <div className="name-child" />
            <div className="search-or-enter">{`Search or enter your location `}</div>
            <img className="search-24px-icon" alt="" src="/search-24px.svg" />
            <div className="location-wrapper">
              <div className="email">2. Location</div>
            </div>
          </div>
          <div className="frame-group">
            <div className="interview-date-wrapper">
              <div className="interview-date">3. Interview Date</div>
            </div>
            <div className="frame-child13" />
            <div className="ddmmyyy">DD/MM/YYY</div>
            <img
              className="calendar-today-24px-1-icon"
              alt=""
              src="/calendar-today24px-1.svg"
            />
          </div>
          <div className="frame-container">
            <div className="interview-date-wrapper">
              <div className="interview-date">4. Interview Time</div>
            </div>
            <div className="frame-child13" />
            <div className="ddmmyyy">12:00</div>
            <img
              className="calendar-today-24px-1-icon1"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="watch-later-24px-1-icon"
              alt=""
              src="/watch-later24px-1.svg"
            />
          </div>
          <div className="frame-parent1">
            <div className="interview-date-wrapper">
              <div className="interview-date">5. Time Zone</div>
            </div>
            <div className="frame-child15" />
            <img
              className="arrow-drop-down-24px-icon"
              alt=""
              src="/arrow-drop-down-24px.svg"
            />
            <div className="search-or-select">{`Search or Select a time zone from below `}</div>
            <img
              className="calendar-today-24px-1-icon1"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="watch-later-24px-1-icon1"
              alt=""
              src="/watch-later24px-11.svg"
            />
          </div>
          <div className="frame-parent2">
            <div className="interview-date-wrapper">
              <div className="interview-date">6. Interview Medium</div>
            </div>
            <div className="frame-child15" />
            <img
              className="arrow-drop-down-24px-icon"
              alt=""
              src="/arrow-drop-down-24px.svg"
            />
            <div className="search-or-select1">
              Search or Select medium of Interview from below
            </div>
            <img
              className="calendar-today-24px-1-icon1"
              alt=""
              src="/calendar-today24px-1.svg"
            />
            <img
              className="watch-later-24px-1-icon1"
              alt=""
              src="/watch-later24px-11.svg"
            />
          </div>
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="email-parent">
                <div className="email">6. How did you hear about us?</div>
              </div>
              <div className="note-one-line">{`*Note: One line hint for the answer `}</div>
            </div>
            <div className="group-div">
              <div className="check-box-outline-blank-24px-4-parent">
                <img
                  className="check-box-outline-blank-24px-4-icon"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication">
                  Professional Publication
                </div>
              </div>
              <div className="check-box-outline-blank-24px-4-group">
                <img
                  className="check-box-outline-blank-24px-4-icon"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication">Company Employee</div>
              </div>
              <div className="check-box-outline-blank-24px-4-container">
                <img
                  className="check-box-outline-blank-24px-4-icon"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication">Newspaper</div>
              </div>
            </div>
          </div>
          <div className="max-500-words">max 500 words</div>
        </div>
      </div>
    </div>
  );
};

export default InterviewAvailability;
