import React from "react";
import { formatDistanceToNow, parseISO,differenceInHours } from 'date-fns';
import { tr } from "date-fns/locale";
import './app.css'

const Task = ({ taskObj, onComplete }) => {
  
  const d = new Date();
  const deadlineDate = typeof taskObj.deadline === 'string'
  ? parseISO(taskObj.deadline)
  : taskObj.deadline;
  const distanceToNow = formatDistanceToNow(deadlineDate, { 
    addSuffix: true,
    locale:tr, 
  });

  const difference = differenceInHours(deadlineDate, d);

  //const className=difference > (3*24) ? "normal" : "urgent";

  console.log(" difference > ", difference);

 




console.log(distanceToNow)  

  /*

  const distance = formatDistanceToNow(deadline, {
    locale: tr,
    addSuffix: true,
  });

  const today = new Date();

  function getClassName(date) {
    const difference = differenceInDays(date, today);

    return difference > 3 ? "normal" : "urgent";
  }
  const newcl= getClassName(deadline);
  */


  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={difference > 3 * 24 ? 'normal' : 'urgent'}  >{distanceToNow}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
