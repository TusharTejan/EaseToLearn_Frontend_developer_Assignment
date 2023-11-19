import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DetailsCollection.css";

const DetailsCollection = () => {
  const navigate = useNavigate();

  const onDetailsCollectionContainerClick = useCallback(() => {
    navigate("/document-cllection");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick2 = useCallback(() => {
    navigate("/statement-of-purpose");
   
    
  }, [navigate]);
  const onDetailsCollectionContainerClick3 = useCallback(() => {
    navigate("/interview-availability");
   
    
  }, [navigate]);
 
  


  return (
    <div
      className="details-collection3"
      
    >
  
      <div className="details-collection-child" />
      <div className="details-collection-item" />
      <div className="details-collection-inner" />
      <div className="details-collection-child1" />
      <div className="details-collection-child2" />
      <div className="rectangle-parent13">
        <div className="frame-child35" />
        <div className="details-collection2">New Form</div>
        <div className="start-creating-a6">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child36" />
      </div>
      
      <div className="rectangle-parent19">
        <div className="frame-child60" />
        <div className="details-collection4">Details Collection</div>
        <div className="collect-information-from-container3">
          <p className="collect-information-from3">{`Collect information from Candidates on their education, work experience, `}</p>
          <p className="collect-information-from3">contact no,etc</p>
        </div>
        <div className="frame-child61" />
      </div>
      <div className="rectangle-parent20"  onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child62" />
        <div className="details-collection4">New Form</div>
        <div className="start-creating-a9">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child63" />
      </div>
      <div className="rectangle-parent21"  onClick={onDetailsCollectionContainerClick}>
        <div className="frame-child62" />
        <div className="details-collection4">Document Collection</div>
        <div className="save-time-and3">{`Save time and efforts: Explore this template to find a set of questions required for document collection `}</div>
        <div className="frame-child63" />
      </div>
      <div className="rectangle-parent22" onClick={onDetailsCollectionContainerClick2}>
        <div className="frame-child62" />
        <div className="statement-of-purpose4">Statement of Purpose</div>
        <div className="start-creating-a10">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child67" />
      </div>
      <div className="header3">
        <div className="header-child1" />
        <img className="clear-24px-icon3" alt="" src="/clear24px.svg" />
        <div className="select-a-template-parent1">
          <div className="select-a-template3">Select a Template</div>
          <div className="create-a-new3">
            Create a new from or choose from the existing templates
          </div>
        </div>
        <div className="vector-parent1">
          <img className="frame-child68" alt="" src="/vector-131.svg" />
          <div className="ellipse-parent4">
            <div className="group-child9" />
            <img className="done-24px-2-icon9" alt="" src="/done24px-2.svg" />
            <div className="form-creation3">Form Creation</div>
          </div>
          <img className="frame-child69" alt="" src="/vector-131.svg" />
          <div className="ellipse-parent5">
            <div className="group-child9" />
            <div className="review3">Review</div>
          </div>
          <div className="set-up-parent1">
            <div className="set-up3">Set up</div>
            <div className="group-child9" />
            <img className="done-24px-2-icon10" alt="" src="/done24px-2.svg" />
          </div>
          <img className="frame-child70" alt="" src="/vector-131.svg" />
          <div className="form-selection-parent1">
            <div className="form-selection3">Form Selection</div>
            <div className="group-child12" />
            <img className="done-24px-2-icon11" alt="" src="/done24px-2.svg" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent23" onClick={onDetailsCollectionContainerClick3}>
        <div className="frame-child62" />
        <div className="statement-of-purpose4">{`Interview Availability `}</div>
        <div className="collect-information-from-container3">
          Start creating a new form with the wide options of fields available
        </div>
        <div className="frame-child67" />
      </div>
      <div className="explore-the-following3">
        Explore the following Templates:
      </div>
      <div className="preview-parent1">
        <div className="preview3">Preview</div>
        <div className="you-will-be3">
          You will be able to customize the fields in the later stage
        </div>
      </div>
      <footer className="footer3">
        <div className="footer-child3" />
        <img className="navigate-icon3" alt="" src="/navigate.svg" />
        <img className="options-icon3" alt="" src="/options.svg" />
        <div className="footer-child4" />
        <div className="button-primary9">
          <div className="button-primary-child7" />
          <img className="settings-icon9" alt="" src="/settings.svg" />
          <div className="next3" onClick={onDetailsCollectionContainerClick}>next</div>
        </div>
        <div className="button-secondary12">
          <div className="button-secondary13">
            <div className="button-secondary13">
              <div className="button-primary-child8" />
              <img className="settings-icon9" alt="" src="/settings1.svg" />
              <div className="next3">Select more Candidates</div>
            </div>
          </div>
        </div>
        <img
          className="attach-file-24px-icon3"
          alt=""
          src="/attach-file-24px.svg"
        />
        <div className="button-secondary14">
          <div className="button-secondary13">
            <div className="button-secondary13">
              <div className="button-primary-child8" />
              <img className="settings-icon9" alt="" src="/settings1.svg" />
              <div className="next3">Previous</div>
            </div>
          </div>
        </div>
      </footer>
      <div className="details-collection-child3" />
      <div className="rectangle-parent24">
        <div className="frame-child73" />
        <div className="rectangle-parent25">
          <div className="frame-child74" />
          <div className="frame-parent24">
            <div className="provide-the-following-informat-wrapper1">
              <div className="provide-the-following3">
                Provide the following information to process your application
              </div>
            </div>
            <div className="name-of-the-enquiry-form-parent1">
              <div className="preview3">Name of the Enquiry Form</div>
              <div className="one-line-description3">
                One line description of the form
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child75" alt="" src="/vector-179.svg" />
        <div className="name-group">
          <div className="name1">
            <div className="name-item" />
            <div className="name-container">
              <div className="name2">1. Name*</div>
              <div className="enter-a-valid">
                Enter a Valid Salary in numbers e.g 50,000/-
              </div>
            </div>
          </div>
          <div className="email6">
            <div className="name-item" />
            <div className="name-container">
              <div className="name2">2. Email*</div>
            </div>
            <div className="example-useridgmailcom1">
              Example - userid@gmail.com
            </div>
          </div>
          <div className="frame-parent25">
            <div className="date-of-birth-wrapper">
              <div className="date-of-birth">3. Date of Birth</div>
            </div>
            <div className="frame-child76" />
            <div className="ddmmyyy1">DD/MM/YYY</div>
            <img
              className="calendar-today-24px-1-icon13"
              alt=""
              src="/calendar-today24px-1.svg"
            />
          </div>
          <div className="frame-parent26">
            <div className="date-of-birth-wrapper">
              <div className="date-of-birth">4. Contact no</div>
            </div>
            <div className="rectangle-parent26">
              <div className="frame-child77" />
              <div className="enter-your-101">
                Enter your 10 digit contact no
              </div>
              <img className="frame-child78" alt="" src="/vector-178.svg" />
            </div>
          </div>
          <div className="frame-parent27">
            <div className="frame-parent28">
              <div className="name-container">
                <div className="name2">6. How did you hear about us?</div>
              </div>
              <div className="note-one-line3">{`*Note: One line hint for the answer `}</div>
            </div>
            <div className="frame-parent29">
              <div className="check-box-outline-blank-24px-4-parent7">
                <img
                  className="check-box-outline-blank-24px-4-icon9"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication3">
                  Professional Publication
                </div>
              </div>
              <div className="check-box-outline-blank-24px-4-parent8">
                <img
                  className="check-box-outline-blank-24px-4-icon9"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication3">
                  Company Employee
                </div>
              </div>
              <div className="check-box-outline-blank-24px-4-parent9">
                <img
                  className="check-box-outline-blank-24px-4-icon9"
                  alt=""
                  src="/check-box-outline-blank24px-4.svg"
                />
                <div className="professional-publication3">Newspaper</div>
              </div>
            </div>
          </div>
          <div className="email8">
            <div className="name-item" />
            <div className="name-container">
              <div className="name2">7. About your last project</div>
            </div>
            <div className="example-useridgmailcom1">{`Describe your role in the project `}</div>
          </div>
          <div className="max-500-words2">max 500 words</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCollection;
