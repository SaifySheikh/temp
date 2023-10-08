import React from 'react'
import './contest.css'
import img1 from './image/img1.png';
import img2 from './image/img2.jpeg';
import img3 from './image/img3.jpeg';
import img4 from './image/img4.jpeg';
import img5 from './image/img5.jpeg';
import img6 from './image/img6.gif';



export default function contest() {
  return (
    <div className="contest-page">
      <div className="first">
        <div><h1 >Contests in Nagpur: Stay Updated on Exciting Local Competitions!</h1>
        <p>Welcome to the contest page of Nagpur! Here, you'll find all the latest information about exciting contests and competitions happening in our vibrant city</p>
        </div>
        <img src={img1} alt="image" />
      </div>
      <br />
      <br />
      <br />

      <div className='upcoming'>
        <h1>Upcoming Contests:</h1>
        <br />
        <br />
        <div className='contest-animation'>
        <div className='contest4'>
        <div className='contest1'>
          <h2>Sidewalk Chalk Art Showdown</h2>
          <div className='inside-contest'>
           <div className='date'>
            <h3>Date:29-sep-23</h3>
            <h3>Location:Sitabuldi</h3>
            <h3>Points:40</h3>
           </div>
           <img src={img4} alt="img1" />
           <img src={img5} alt="img2" />
          </div>
        </div>
        <br /><br />
        <div className='contest1'>
          <h2>Bubble Blowing Bonanza</h2>
          <div className='inside-contest'>
           <div>
            <h3>Date:29-sep-23</h3>
            <h3>Location:Sitabuldi</h3>
            <h3>Points:40</h3>
           </div>
           <img src={img2} alt="img1" />
           <img src={img3} alt="img2" />
          </div>
        </div>
        </div>
        <img src={img6} alt="no" />
        </div>
      </div>
<br /><br /><br /><br />
      <div className='past-contest'>
        <h1>Past Contests:</h1>
        <p>Check out some of the exciting contests that have taken place in our city recently:</p>
        <table className='pastinfo' width="100%">
			<thead>
				<tr>
					<th>Contest name</th>
					<th>Date</th>
					<th>Location</th>
					<th>Winner team</th>
				</tr>
			</thead>
			<tbody>
        <tr>
          <td>Street Yoga Festival</td>
          <td>14-aug-23</td>
          <td>Dharampeth</td>
          <td>Team Alpha</td>
        </tr>
        <tr>
          <td>City Parkour Challenge</td>
          <td>23-jul-23</td>
          <td>RBI square</td>
          <td>Team Hola</td>
        </tr>
			</tbody>
		</table>
      </div>
          
    </div>
  )
}
