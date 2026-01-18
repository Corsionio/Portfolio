import { Link } from 'react-router-dom';

export default function ScrollingHeader() {
  const text = "Corso Montuori's Portfolio";
  const repeatedText = `${text} • `.repeat(20);
  
  return (
    <div className="header">
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          {repeatedText}
        </div>
        <div className="scrolling-text" aria-hidden="true">
          {repeatedText}
        </div>
      </div>
    </div>
  );
}