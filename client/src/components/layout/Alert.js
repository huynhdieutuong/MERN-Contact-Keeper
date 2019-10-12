import React, { Fragment, useContext } from "react";

import AlertContext from "../../contexts/alert/alertContext";

const Alert = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <Fragment>
      {alerts.length > 0 &&
        alerts.map(alert => (
          <div className={`alert alert-${alert.type}`} key={alert.id}>
            <i className='fas fa-info-circle' /> {alert.msg}
          </div>
        ))}
    </Fragment>
  );
};

export default Alert;
