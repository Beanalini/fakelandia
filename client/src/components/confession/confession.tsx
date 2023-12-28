import { useState } from "react";
import ConfessionSubject from "./confession_subject";
import { validateConfessionSubject } from "../validate/validateConfessionSubject";

const Confession: React.FC = () => {
  const [confessionSubject, setConfessionSubject] = useState<string>("");
  console.log(confessionSubject);
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
      </form>
    </section>
  );
};

export default Confession;
