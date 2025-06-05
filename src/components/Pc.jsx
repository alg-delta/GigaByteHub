import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Pc() {
  return (
    <div> <Alert variant="success">
      <Alert.Heading>все на головній сторінці</Alert.Heading>
      <p>
    ми не продажмо частини, тільки збірки
      </p>
      <hr />
      <p className="mb-0">
        але ви можете тут залишитися
      </p>
    </Alert></div>
  )
}
