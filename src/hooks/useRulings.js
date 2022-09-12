import { useContext } from "react";
import { RulingsContext } from "../contexts/RulingsContext";

const useRulings = () => useContext(RulingsContext);

export default useRulings;
