import React from "react";

const contents = [
  {
    content: 'High Order Functions',
    block: 8,
    status: 'Learned'
  },
  {
    content: 'Composicao de Componentes',
    block: 11,
    status: 'Learning',
  },
  {
    content: 'Composicao de Estados',
    block: 12,
    status: 'I will learn'
  },
  {
    content: 'Redux',
    block: 16,
    status: 'I will learn'
  },
]

export default class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        {contents.map((item) => {
          return (
            <div key={item.content} className="Card">
              <h3>The content is: {item.content}</h3>
              <p>Status: {item.status}</p>
              <span>Block: {item.block}</span>
            </div>
          )
        })}
      </div>
    );
  }
}