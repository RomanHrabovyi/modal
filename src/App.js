import React, {useState} from 'react';
import Modal from './modal';
import './App.scss';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>Open modal</button>
        <Modal open={open} setOpen={setOpen}>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="" />
          <h3>Modal</h3>
        </Modal>
    </div>
  )
}

export default App;
