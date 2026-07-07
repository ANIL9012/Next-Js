'use client';

import { useState, useEffect } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // ----- Input Functions -----
  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // ----- Clear Functions -----
  const clearAll = () => {
    setDisplay('0');
    setPreviousValue('');
    setOperator(null);
    setWaitingForOperand(false);
  };

  // ⭐ BACKSPACE FUNCTION - NAYA ADD KIYA!
  const handleBackspace = () => {
    if (display.length > 1) {
      // Agar display mein multiple digits hain toh last character hatao
      setDisplay(display.slice(0, -1));
    } else {
      // Agar sirf 1 digit hai toh 0 set karo
      setDisplay('0');
    }
  };

  // ----- Math Functions -----
  const toggleSign = () => {
    if (display !== '0') {
      setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
    }
  };

  const percentage = () => {
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setDisplay(String(value / 100));
    }
  };

  const calculate = (a, b, op) => {
    let result;
    switch (op) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '×': result = a * b; break;
      case '÷': result = b !== 0 ? a / b : 'Error'; break;
      default: return b;
    }
    return typeof result === 'number' ? parseFloat(result.toPrecision(12)) : result;
  };

  const handleOperator = (op) => {
    const currentValue = parseFloat(display);
    if (operator && !waitingForOperand) {
      const result = calculate(parseFloat(previousValue), currentValue, operator);
      setDisplay(String(result));
      setPreviousValue(String(result));
    } else {
      setPreviousValue(display);
    }
    setOperator(op);
    setWaitingForOperand(true);
  };

  const handleEqual = () => {
    if (operator) {
      const currentValue = parseFloat(display);
      const result = calculate(parseFloat(previousValue), currentValue, operator);
      setDisplay(String(result));
      setOperator(null);
      setPreviousValue('');
      setWaitingForOperand(true);
    }
  };

  // ----- Keyboard Support (with Backspace) -----
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      
      if (key >= '0' && key <= '9') {
        e.preventDefault();
        inputDigit(key);
      } else if (key === '.') {
        e.preventDefault();
        inputDecimal();
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        handleEqual();
      } else if (key === 'Backspace') {
        e.preventDefault();
        handleBackspace();  // ⭐ Keyboard Backspace support
      } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearAll();
      } else if (key === '+') {
        e.preventDefault();
        handleOperator('+');
      } else if (key === '-') {
        e.preventDefault();
        handleOperator('-');
      } else if (key === '*') {
        e.preventDefault();
        handleOperator('×');
      } else if (key === '/') {
        e.preventDefault();
        handleOperator('÷');
      } else if (key === '%') {
        e.preventDefault();
        percentage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [display, previousValue, operator, waitingForOperand]);

  // ----- Buttons Array (Backspace added) -----
  const buttons = [
    // Row 1: AC, ⌫ (Backspace), %, ÷
    { label: 'AC', action: clearAll, className: 'bg-red-500/80 hover:bg-red-600/90 text-white', span: 1 },
    { label: '⌫', action: handleBackspace, className: 'bg-amber-500/80 hover:bg-amber-600/90 text-white', span: 1 },  // ⭐ NAYA BACKSPACE BUTTON
    { label: '%', action: percentage, className: 'bg-slate-200/80 hover:bg-slate-300/90 text-slate-800', span: 1 },
    { label: '÷', action: () => handleOperator('÷'), className: 'bg-indigo-500/80 hover:bg-indigo-600/90 text-white', span: 1 },
    
    // Row 2: 7, 8, 9, ×
    { label: '7', action: () => inputDigit(7), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '8', action: () => inputDigit(8), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '9', action: () => inputDigit(9), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '×', action: () => handleOperator('×'), className: 'bg-indigo-500/80 hover:bg-indigo-600/90 text-white', span: 1 },
    
    // Row 3: 4, 5, 6, –
    { label: '4', action: () => inputDigit(4), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '5', action: () => inputDigit(5), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '6', action: () => inputDigit(6), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '–', action: () => handleOperator('-'), className: 'bg-indigo-500/80 hover:bg-indigo-600/90 text-white', span: 1 },
    
    // Row 4: 1, 2, 3, +
    { label: '1', action: () => inputDigit(1), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '2', action: () => inputDigit(2), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '3', action: () => inputDigit(3), className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '+', action: () => handleOperator('+'), className: 'bg-indigo-500/80 hover:bg-indigo-600/90 text-white', span: 1 },
    
    // Row 5: 0 (span 2), ., =
    { label: '0', action: () => inputDigit(0), className: 'bg-white/10 hover:bg-white/20 text-white', span: 2 },
    { label: '.', action: inputDecimal, className: 'bg-white/10 hover:bg-white/20 text-white', span: 1 },
    { label: '=', action: handleEqual, className: 'bg-indigo-600/90 hover:bg-indigo-700 text-white', span: 1 },
  ];

  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 ring-1 ring-indigo-500/30">
      {/* Display */}
      <div className="bg-slate-900/80 rounded-2xl p-4 mb-5 border border-slate-700/50 shadow-inner">
        <div className="text-right">
          <div className="text-slate-400 text-sm font-mono h-6 truncate">
            {operator && previousValue ? `${previousValue} ${operator}` : ''}
          </div>
          <div className="text-white text-4xl font-light tracking-wider h-14 flex items-center justify-end overflow-x-auto">
            {display}
          </div>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={btn.action}
            className={`${btn.className} font-semibold text-xl rounded-xl py-4 shadow-md transition-all duration-100 active:scale-95 active:brightness-90 ${
              btn.span === 2 ? 'col-span-2' : 'col-span-1'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 text-center text-slate-400/70 text-xs flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-400/60"></span>
        <span>Next.js · Tailwind CSS</span>
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-400/60"></span>
      </div>
    </div>
  );
}