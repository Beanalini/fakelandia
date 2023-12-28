import FormErrorMessage from "./form_error_message";
interface ConfessionSubjectProps {
  confessionSubject: string;
  onChangeConfessionSubject: (value: string) => void;
  validate: (validate: string) => Array<string>;
}

const ConfessionSubject: React.FC<ConfessionSubjectProps> = ({
  confessionSubject,
  onChangeConfessionSubject,
  validate,
}) => {
  return (
    <>
      <div>
        <label htmlFor="confessionSubject">Subject: </label>
        <input
          id="confessionSubject"
          type="text"
          value={confessionSubject}
          onChange={(e) => onChangeConfessionSubject(e.target.value)}
        />
      </div>
      <FormErrorMessage errMessage={validate(confessionSubject)} />
    </>
  );
};

export default ConfessionSubject;
