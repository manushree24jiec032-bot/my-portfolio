import styles from './globals.css';

export default function Interest() {
  const technicalInterests = [
    'Artificial Intelligence',
    'Machine Learning',
    'Backend Architecture',
    'Algorithm Optimization',
    'Database Systems',
    'Data Structures',
    'Predictive Modeling',
    'Neural Networks'
  ];

  return (
    <div className="interestsContent">
      <div className="profileText">
        <p>
          My engineering journey focuses on designing innovative electronic systems, exploring embedded technologies, and developing efficient hardware-software solutions. I am passionate about creating smart, reliable, and practical systems that bridge modern electronics with real-world applications.
        </p>
        <p>
          I am passionate about exploring modern electronics, embedded systems, and automation technologies while building solutions that are efficient, reliable, and adaptable to real-world challenges.
        </p>
      </div>
      <div>
        <div className="grid">
          {technicalInterests.map((interest, index) => (
            <div key={index} className="tagCard">
              {interest}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}