import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  callFetchQuote,
  selectQuote,
} from './quoteSlice';
import styles from './Quote.module.css';

export function Quote() {
  const quote = useSelector(selectQuote);
  const dispatch = useDispatch();
  // console.log(quote);
  return (
    <div id="quote-box">
      <blockquote id="text">
        {quote.text}<br></br>
        <cite>- {quote.author}</cite>
      </blockquote>
      <button id="new-quote" onClick={() => dispatch(callFetchQuote())}>New Quote</button>
    </div>
  );
}
