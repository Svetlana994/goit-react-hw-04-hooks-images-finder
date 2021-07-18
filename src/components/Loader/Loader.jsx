import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderWrapper } from "./Loader.styles";

function LoaderComponent() {
  return (
    <LoaderWrapper>
      <Loader type="Oval" color="#00BFFF" height={120} width={120} />
    </LoaderWrapper>
  );
}

export default LoaderComponent;
