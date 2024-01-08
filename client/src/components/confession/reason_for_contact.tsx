import FormErrorMessage from "./form_error_message";
interface ReasonForContactProps {
  reasonForContact: string;
  onChangeReasonForContact: (value: string) => void;
  validate: (validate: string) => Array<string>;
}

const ReasonForContact: React.FC<ReasonForContactProps> = ({
  reasonForContact,
  onChangeReasonForContact,
  validate,
}) => {
  return (
    <>
      <div className="reasonForContact">
        <label htmlFor="reason-for-contact">Reason for contact:</label>
        <select
          id="reason-for-contact"
          data-testid="reasonForConfession"
          name="reason-for-contact"
          value={reasonForContact}
          onChange={(e) => onChangeReasonForContact(e.target.value)}
        >
          <option value="blank">Select option</option>
          <option value="just-talk">I just want to talk</option>
          <option value="rudeness">Rudeness</option>
          <option value="vegetables">Vegetables</option>
          <option value="lift">Lift</option>
          <option value="united">United</option>
        </select>
      </div>
      <FormErrorMessage errMessage={validate(reasonForContact)} />
    </>
  );
};
export default ReasonForContact;
