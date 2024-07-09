import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div>
      <ul>
        <li>
          <RiContactsFill />
          {name}
        </li>
        <li>
          <FaPhone />
          {number}
        </li>
      </ul>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
export default Contact;
