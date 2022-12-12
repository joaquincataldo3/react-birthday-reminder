import React from 'react';
import './List.css'


const List = (props) => {
  const {peopleBirthdays} = props;

  return (
    <>
      <ul type='none' className='list-container'>
        {
          peopleBirthdays.map(person => {
            return (
              <li className='person-gb-container'>
                <div className='person-img-container'>
                    <img src={person.image} alt="" />
                </div>
                <div className='person-info-container'>
                    <h5 className='person-name'>{person.name}</h5>
                    <p className='person-age'>{person.age} years old</p>
                </div>  
              </li>
            )       
          })
        }
      </ul>
    </>
  );
};

export default List;
