import { useState, useEffect } from "react";
import ConfessionSubject from "./confession_subject";
import { validateConfessionSubject } from "../validate/validateConfessionSubject";
import ReasonForContact from "./reason_for_contact";
import { validateReasonForContact } from "../validate/validateReasonForConfession";
import ConfessionDetails from "./confession_details";
import { validateConfessionDetails } from "../validate/validateConfessionDetails";

const Confession: React.FC = () => {
  const [confessionSubject, setConfessionSubject] = useState<string>("");
  console.log(confessionSubject);
  const [reasonForContact, setReasonForContact] = useState<string>("");
  console.log(reasonForContact);
  const [confessionDetails, setConfessionDetails] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  console.log(isValid);

  const validateFormData = (
    confessionSubject: string,
    reasonForContact: string,
    confessionDetails: string
  ): boolean => {
    console.log("inside form validation");
    return confessionSubject.length &&
      reasonForContact.length &&
      confessionDetails.length > 20
      ? true
      : false;
  };

  useEffect(() => {
    const isValid = validateFormData(
      confessionSubject,
      reasonForContact,
      confessionDetails
    );
    setIsValid(isValid);
  }, [confessionSubject, reasonForContact, confessionDetails]);

  return (
    <section className="confession-wrapper">
      <div className="text">
        <p className="confession-text">
          It&#8217;s very difficult to catch people committing misdemeanours so
          we appreciate it when citizens confess to us directly.
        </p>
        <p className="confession-text">
          However, if you&#8217;re just having a hard day and need to vent then
          you&#8217;re welcome to contact us here too. Up to you!
        </p>
      </div>

      <form className="confession-form">
        <ConfessionSubject
          confessionSubject={confessionSubject}
          onChangeConfessionSubject={(value) => setConfessionSubject(value)}
          validate={validateConfessionSubject}
        />
        <ReasonForContact
          reasonForContact={reasonForContact}
          onChangeReasonForContact={(value) => setReasonForContact(value)}
          validate={validateReasonForContact}
        />
        <ConfessionDetails
          confessionDetails={confessionDetails}
          onChangeConfessionDetails={(value) => setConfessionDetails(value)}
          validate={validateConfessionDetails}
        />

        <button type="button" disabled={!isValid}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Confession;
