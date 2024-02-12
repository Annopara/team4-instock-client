import "./Error404Page.scss";
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";

export const Error404Page = () => {
  return (
    <section className="warehouses">
      <SearchHeader
        title="404 Error"
        btnText="Send me back!"
        navToTitle="/warehouses"
      />
    </section>
  );
};
