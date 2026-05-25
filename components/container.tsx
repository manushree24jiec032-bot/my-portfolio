import React from 'react';


interface ContainerProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export default function Container({ id, title, children }: ContainerProps) {
  return (
    <section id={id} className="sectionContainer">
      <h2 className="sectionTitle">{title}</h2>
      <div>{children}</div>
    </section>
  );
}