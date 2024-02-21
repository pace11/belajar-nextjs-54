import { withAuth } from "../with-hoc";
import VersiA from "./versi-a";
import VersiB from "./versi-b";

/**
 *
 * @param {String} param.type
 * @returns
 */
function Header({ type }) {
  if (type === "a") return <VersiA />;
  return <VersiB />;
}

export default withAuth(Header);

<Header />;
