import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function BoardData() {
  const [boardDatas, setBoardDatas] = useState([]);

  useEffect(() => {
    const Data = localStorage.getItem('boardDatas');
    if (Data) {
      setBoardDatas(JSON.parse(Data));
    }
  }, []);

  const handleViewArticle = (id) => {
    localStorage.setItem("currentArticleId", id);
    Navigate('/article')
  };

  const handleDelete = (id) => {
    const updatedData = boardDatas.filter(item => item.id !== id);
    setBoardDatas(updatedData);
    localStorage.setItem('boardDatas', JSON.stringify(updatedData));
  };

  return (
    <ul className="board-list-container">
      {boardDatas.map(data => (
        <li className="board-box" id={`memo-${data.id}`} key={data.id}>
          <div className="memo-content" onClick={() => handleViewArticle(data.id)}>
            <h1>{data.title}</h1>
            <h3>{data.content}</h3>
            <h4>{data.writer}</h4>
          </div>
          <div className="button-container">
            <button className="delete-btn" onClick={() => handleDelete(data.id)}>삭제</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BoardData;
