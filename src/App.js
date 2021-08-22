import React from 'react'

const dateTimeToday = () => {

  let currDate = new Date();
  let nowH = currDate.getHours()
  let nowTime = currDate.toLocaleTimeString();
  return [nowH, nowTime];
}
const App = () => {
  let greet = '';
  let cssStyle = {};
  if (dateTimeToday()[0] < 12 && dateTimeToday()[0] >= 4) {
    greet = 'Good Morning!!';
    cssStyle.color = 'rgb(113, 204, 231)';
  } else if (dateTimeToday()[0] >= 12 && dateTimeToday()[0] < 17) {
    greet = 'Good Afternoon!';
    cssStyle.color = 'rgb(230, 218, 64)';
  } else if (dateTimeToday()[0] >= 17 && dateTimeToday()[0] < 21) {
    greet = 'Good Evening!';
    cssStyle.color = 'rgb(230, 138, 19)';
  } else {
    greet = 'Good Night!';
    cssStyle.color = 'rgb(104, 99, 93)'
  }

  return (
    <> <div className="time"><h4>{dateTimeToday()[1]}</h4></div>
      <div className="greeting">

        <h1>Hello Sajjad, <span style={cssStyle}>{greet}</span></h1>
      </div>
    </>
  )

}
export default App;