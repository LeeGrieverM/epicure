import "./ButtonsList.scss";

interface ButtonData {
  title: string;
  alt: string;
}

const ButtonsList = ({ buttonsData }: { buttonsData: ButtonData[] }) => {
  return (
    <ul className="footer-buttons-list">
      {buttonsData.map(({ title, alt }) => (
        <li key={alt}>
          <button className={`footer-button`}>{title}</button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonsList;
