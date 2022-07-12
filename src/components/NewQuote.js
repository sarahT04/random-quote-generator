import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

function NewQuote({ onNewQuoteClick, color, onColorChange, infinity, onInfinityClick }) {
  return (
    <div id="new-quote">
      <FontAwesomeIcon icon={infinity ? faInfinity : faPauseCircle} style={{ color: color }} onClick={onInfinityClick} />
      <input type="color" style={{ background: color, color: color }} value={color} onChange={onColorChange} />
      <button onClick={onNewQuoteClick} title="New Quote!"><i className="fa fa-refresh" aria-hidden="true"></i></button>
    </div>
  )
}

export default NewQuote