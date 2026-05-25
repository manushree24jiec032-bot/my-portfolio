import styles from './globals.css';

export default function Hobies() {
  const creativeHobbies = [
    {
  title: 'Embedded Systems',
  description: 'Exploring microcontrollers, sensors, and real-time systems to create efficient and intelligent electronic solutions.'
},
{
  title: 'Circuit Design',
  description: 'Designing and analyzing analog and digital circuits with a focus on performance, reliability, and innovation.'
},
{
  title: 'IoT & Automation',
  description: 'Building smart automation projects by integrating electronics, communication modules, and embedded programming.'
}
  ];

  return (
    <div className="hobbiesGrid">
      {creativeHobbies.map((hobby, index) => (
        <div key={index} className="hobbyCard">
          <h3>{hobby.title}</h3>
          <p>{hobby.description}</p>
        </div>
      ))}
    </div>
  );
}