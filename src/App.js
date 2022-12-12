
import List from './Comps/List';
import data from './Data/data';
import './App.css'
import React, { useState } from 'react';

function App() {

  const [peopleBirthdays, setPeopleBirthdays] = useState(data);
  const [btnContent, setBtnContent] = useState('Clear all');
  
  const handleBirthdayBtnClick = () => {
    if(peopleBirthdays.length > 0) {
      setPeopleBirthdays([])
      setBtnContent('Get todays birthdays !')
    } else {
      setPeopleBirthdays(data)
      setBtnContent('Clear all')
    }
  }

  return (
    <main>
      <section className='birthdays-section'>
        <h3 className='birthday-numbers'>{peopleBirthdays.length} birthdays today</h3>
        <List peopleBirthdays={peopleBirthdays} />
        <button className='birthday-btn' onClick={handleBirthdayBtnClick}>{btnContent}</button>
      </section>
    </main>
  );
}

export default App;
