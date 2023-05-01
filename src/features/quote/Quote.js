import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  callFetchQuote,
  selectQuote,
} from './quoteSlice';
import styles from './Quote.module.css';

export function Quote() {
  const quote = useSelector(selectQuote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callFetchQuote());
  }, [dispatch]);


  return (
    <div id='quote-box' className={styles.card}>
      <div id='text' className={styles.text}>
        {quote.status === 'loading' && 'Loading...'}
        {quote.status === 'idle' && quote.text}
      </div>
      <cite id='author' className={styles.author}>- {quote.status === 'idle' && quote.author}</cite>
      <button id='new-quote' className={styles.button} onClick={() => dispatch(callFetchQuote())}>New Quote</button>
      <a id='tweet-quote' className={styles.tweet} target='_blank' rel='noreferrer' href={'https://twitter.com/intent/tweet?text=' + quote.text + '%0D%0A- ' + quote.author}><i className='fa fa-twitter'></i></a>
    </div>
  );
}
