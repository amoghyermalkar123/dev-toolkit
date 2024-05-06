import { useState } from 'react'

const JsonFmt = () => {
  const [text, setText] = useState('')
  const [fmtData, setFmtData] = useState('')
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    try {
      const parsedJson = JSON.parse(text);
      const formatted = JSON.stringify(parsedJson, null, 2);
      setFmtData(formatted);
      setError(null);
    } catch (error) {
      if (error instanceof SyntaxError) {
        setFmtData('')
        const errorMessage = `Invalid JSON format at position ${error.message}`;
        setError(errorMessage);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const renderLineNumber = () => {
    const lines = text.split('\n');
    return lines.map((_, index) => (
      <div key={index} style={{ marginRight: '0.5rem', paddingRight: '0.5rem', }}>
        {index + 1}
      </div>
    ));
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(fmtData)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-row h-full w-1/2 p-1">
        <div className='w-1'>
          {renderLineNumber()}
        </div>
        <textarea className="mx-4 h-full w-full border rounded bg-inherit" onChange={handleChange} placeholder="Paste Json here ...">
        </textarea>
      </div>
      <button className='btn btn-accent h-10 my-auto' onClick={handleClick}>Convert</button>
      <div className='h-full w-1/2 p-2'>
        <button onClick={handleCopy}>Copy to Clipboard</button>
        {copied && <span style={{ marginLeft: '1rem', color: 'green' }}>Copied!</span>}
        <div className="border rounded">
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <pre>{fmtData}</pre>
        </div>
      </div >
    </div>
  )
}

export default JsonFmt
