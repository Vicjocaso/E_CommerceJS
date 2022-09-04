import React from "react";

const SecureAccetance = () => {
  return (
    <div>
      <form
        action="https://testsecureacceptance.cybersource.com/silent/pay"
        method="post"
      >
        <input
          type="hidden"
          name="profile_id"
          value="843360E8-90C2-4944-A8C0-62A559C7942E"
        />
        <input
          type="hidden"
          name="secret_key"
          value="8a8082a0479147ff87033dc3bc7b6a38cc185b7d81584e40b014c9310513c58fcee8748418fe470ea7bd8859a76d64ff2cd94c9badf548e4b85666def5ade5c6f97fdc4c82cc4d069ee2be6ebb381d2c072a531c29f64c1e829ee90ffeae0658fd7189498b2a4e0cb589eb7050285dcdd94b7ad831ae495ca8d52924125e432a"
        />
        <input
          type="hidden"
          name="access_key"
          value="48366d61cd4636dcaa15af8e25deb8b4"
        />
        <input type="text" name="" id="" />
        <input type="submit" id="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SecureAccetance;
