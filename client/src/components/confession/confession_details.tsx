import FormErrorMessage from "./form_error_message";
interface ConfessionDetailsProps {
  confessionDetails: string;
  onChangeConfessionDetails(value: string): void;
  validate: (validate: string) => Array<string>;
}

const ConfessionDetails: React.FC<ConfessionDetailsProps> = ({
  confessionDetails,
  onChangeConfessionDetails,
  validate,
}) => {
  return (
    <>
      <div className="confessionDetails">
        <label htmlFor="confessionDetails"></label>
        <textarea
          rows={10}
          cols={50}
          id="details"
          name="ConfessionDetails"
          data-testid="confessionDetails"
          placeholder="Enter your confession details here"
          value={confessionDetails}
          onChange={(e) => onChangeConfessionDetails(e.target.value)}
        ></textarea>
      </div>
      <FormErrorMessage errMessage={validate(confessionDetails)} />
    </>
  );
};

export default ConfessionDetails;
