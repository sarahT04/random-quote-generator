import React from 'react'

function QuoteAuthor({ author }) {
  return (
    <div id="quote-author">
      <p>- <span id='author'>{author}</span></p>
    </div>
  )
}

export default QuoteAuthor