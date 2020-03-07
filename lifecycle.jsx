import React from 'react';


class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {alert('From App')} , 2000)
  }
  render() {
    return (
        <div></div>
    )
  }
}

export default App;

