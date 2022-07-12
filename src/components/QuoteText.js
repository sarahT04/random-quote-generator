import React from 'react'

function QuoteText({ quote }) {
  return (
    <div id="quote-text">
      <i className="fa fa-quote-left"></i>
      <span id="text">
        {quote}
      </span>
    </div>
  )
}

export default QuoteText