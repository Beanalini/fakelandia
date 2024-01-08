import { useMisdemeanours } from "../hooks/useMisdemeanoursContext";

const Home: React.FC = () => {
  const { misdemeanours } = useMisdemeanours();

  const totalMisdemeanours = misdemeanours.length;

  const confessionsToday = misdemeanours.filter(
    (misdemeanour) => misdemeanour.details !== undefined
  ).length;

  return (
    <>
      <section className="home">
        <div className="home__text">
          <p> Welcome to the home of the Justice Department of Fakelandia</p>

          <p>
            {" "}
            Here you can browse a list of recent misdemeanours committed by our
            citizens, or you can confess to your own misdemeanour.
          </p>
        </div>

        <div className="confession-stats">
          <p>Total number of Misdeameanours: {totalMisdemeanours} </p>

          <p> Number of confessions today: {confessionsToday}</p>
        </div>
      </section>
    </>
  );
};
export default Home;
