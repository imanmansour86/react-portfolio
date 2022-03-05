import React from "react";
const styles = {
  red: { color: "red" },
};

const Error = (props) => <div style={styles.red}>{props.error}</div>;

export default Error;
