import React, { useState, useEffect } from 'react';

export default function Timebar() {
	const [filled, setFilled] = useState(100);
	const [isRunning, setIsRunning] = useState(true);
	useEffect(() => {
		if (filled > 0 && isRunning) {
			setTimeout(() => setFilled(prev => prev -= 2), 90)
		}
	},[filled, isRunning])
  return (
	  <div className="timebar-container">
		  <div className="timebar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="timebarPercent">{ filled }%</span>
		  </div>
		  {/* <button className="btn" onClick={() => {setIsRunning(false)}}>Run</button> */}
	</div>
  )
}