import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="ms-5 me-5 mt-1">
        <div className="accordion-wrapper p-2 m-2">
          {isVisible ? (
            <button
              type="button"
              className="btn btn-default btn-xs pt-0"
              style={{ width: "100%", borderStyle: "none" }}
              onClick={() => setIsVisible()}
            >
              <div className="accordion-title-wrapper">
                <h6 className="m-2">{title}</h6>
                <img
                  src={require("../../public/arrow-up.png")}
                  alt="accordion-arrow"
                  className="img-accordion-arrow"
                />
              </div>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-default btn-xs pt-0"
              style={{ width: "100%", borderStyle: "none" }}
              onClick={() => setIsVisible()}
            >
              <div className="accordion-title-wrapper">
                <h6 className="m-2">{title}</h6>
                <img
                  src={require("../../public/down-arrow.png")}
                  alt="accordion-arrow"
                  className="img-accordion-arrow"
                />
              </div>
            </button>
          )}
          {isVisible && (
            <div>
              <p className="m-2 my-4" style={{ fontSize: "15px" }}>
                &nbsp;&nbsp;&nbsp;{description}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <div className="help-wrapper mt-4">
        <div className="mt-3 ms-4">
          <h2 className="p-4 px-5 mx-5 mt-3 mb-1">Help & Support</h2>
          <h4 className="px-5 mx-5 mt-1 mb-3">
            Let's take a step ahead and help you better.
          </h4>
        </div>
        <div className="m-5">
          <img
            src={require("../../public/teambond.png")}
            style={{ marginRight: "8rem" }}
            height={125}
            width={130}
          />
        </div>
      </div>
      <div>
        <div className="help-container">
          <Section
            title={"I want to partner my restaurant with EatOut"}
            description={
              "Send us an email (partnersupoort@eatout.in) and We will revert within 24-48 hrs."
            }
            isVisible={visibleSection == "partnership"}
            setIsVisible={() =>
              setVisibleSection(
                visibleSection === "partnership" ? "" : "partnership"
              )
            }
          />
          <Section
            title={
              "What are the mandatory documents needed to list my restaurant on EatOut?"
            }
            description={
              "Copies of FSSAI Licence OR FSSAI Acknowledgement, Pan Card, GSTIN Certificate, Cancelled Cheque OR bank Passbook are mandatory"
            }
            isVisible={visibleSection == "docs"}
            setIsVisible={() =>
              setVisibleSection(visibleSection === "docs" ? "" : "docs")
            }
          />
          <Section
            title={
              "What is this one time Onboarding fees? Do I have to pay for it while registering?"
            }
            description={
              "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from EatOut."
            }
            isVisible={visibleSection == "fees"}
            setIsVisible={() =>
              setVisibleSection(visibleSection === "fees" ? "" : "fees")
            }
          />
          <Section
            title={
              "Who should I contact if I need help & support in getting onboarded?"
            }
            description={
              "You can connect with Partner Support on +91-1234567890 or write to partnersuport@eatout.in"
            }
            isVisible={visibleSection == "contact"}
            setIsVisible={() =>
              setVisibleSection(visibleSection === "contact" ? "" : "contact")
            }
          />
          <Section
            title={"How much commission will I be charged by EatOut?"}
            description={
              "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled."
            }
            isVisible={visibleSection == "commission"}
            setIsVisible={() =>
              setVisibleSection(
                visibleSection === "commission" ? "" : "commission"
              )
            }
          />
          <Section
            title={
              "I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?"
            }
            description={
              "FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration."
            }
            isVisible={visibleSection == "query"}
            setIsVisible={() =>
              setVisibleSection(visibleSection === "query" ? "" : "query")
            }
          />
        </div>
      </div>
    </>
  );
};
export default Help;
