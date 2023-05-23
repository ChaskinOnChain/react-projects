import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

const EmployeeInfo = ({ title, dates, duties, company }: Props) => {
  return (
    <div className="w-full h-full py-16 px-24">
      <h1 className="text-4xl mb-3">{title}</h1>
      <div className="bg-slate-300 inline-block px-3 py-1 rounded mb-3">
        {company}
      </div>
      <p className="tracking-wider text-lg text-slate-600 mb-5">{dates}</p>
      <ul>
        {duties.map((duty) => {
          return (
            <li key={duty} className="flex items-center gap-9 mb-4">
              <FontAwesomeIcon
                className="text-emerald-600 font-bold"
                icon={faAngleDoubleRight}
              />
              <p className="text-lg">{duty}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmployeeInfo;
