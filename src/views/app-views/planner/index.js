import React, { useState, useRef, useEffect } from 'react';
import './index.css';

// Пример данных для объектов
const items = [
  { id: 1, name: 'Стол', image: '/img/draggable/table.png' },
  { id: 2, name: 'Стул', image: '/img/draggable//chair.png' },
  { id: 3, name: 'Перегородка', image: '/img/draggable/wall.png' },
];

function Planner() {
  const [boardItems, setBoardItems] = useState([]);
  
  const addItemToBoard = (item) => {
    setBoardItems([...boardItems, { ...item, x: 0, y: 0 }]);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    console.log(e.target.getBoundingClientRect().left);
    console.log(e.clientX);
    e.dataTransfer.setData('indentX', e.clientX - e.target.getBoundingClientRect().left);
    e.dataTransfer.setData('indentY', e.clientY - e.target.getBoundingClientRect().top);
  };

  const board = useRef(null);

  const handleDrop = (e) => {
    const index = e.dataTransfer.getData('index');
    const indentX = e.dataTransfer.getData('indentX');
    const indentY = e.dataTransfer.getData('indentY');
    console.log(indentX);
    console.log(document.getElementById('board-item-' + index).getBoundingClientRect().width);
    console.log(board.current.getBoundingClientRect().width);
    const newX = e.clientX - board.current.getBoundingClientRect().left - indentX;
    const newY = e.clientY - board.current.getBoundingClientRect().top - indentY;
    console.log(newX);

    if (newX >= 0 && newY + document.getElementById('board-item-' + index).getBoundingClientRect().height <= board.current.getBoundingClientRect().height &&
        newX + document.getElementById('board-item-' + index).getBoundingClientRect().width <= board.current.getBoundingClientRect().width &&
        newY >= 0) 
        setBoardItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index] = {
                ...updatedItems[index],
                x: newX,
                y: newY
            };
            return updatedItems;
        });
  };

  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(content)], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  function init() {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
  }
  
  function handleFileSelect(event) {
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
  }
  
  function handleFileLoad(event) {
    console.log(event);
    setBoardItems(JSON.parse(event.target.result));
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
        <div className="planner">
            <div>
                <h4>Элементы</h4>
                <div className="item-selector">
                    {items.map(item => (
                    <div key={item.id} className="item" onClick={() => addItemToBoard(item)}>
                        <img src={item.image} alt={item.name} />
                        <p className='text-center'>{item.name}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div>
                <h4>Карта заведения</h4>
                <div className="board" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} ref={board}>
                    {boardItems.map((item, index) => (
                    <div
                        key={index}
                        id={'board-item-' + index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        style={{
                        position: 'absolute',
                        left: item.x,
                        top: item.y,
                        cursor: 'move'
                        }}
                    >
                        <img src={item.image} alt={item.name} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='save-load'>
            <button onClick={() => download(boardItems, 'json.txt', 'text/plain')}>Save</button>
            <input id="fileInput" type="file" name="file" />
        </div>
    </div>
  );
}

export default Planner;