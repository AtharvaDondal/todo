import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <div className="">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div> */}

      <div className={styles.container}>
        <Link to={"/todo"} className={"btn btn-warning " + styles.link}>
          To Do App
        </Link>
      </div>
    </>
  );
}

export default Home;
