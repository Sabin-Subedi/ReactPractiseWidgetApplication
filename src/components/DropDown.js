import React, { useEffect, useRef, useState } from "react";

function DropDown({ options, selector, selected, label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //   console.log(ref);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div className="item" key={option.value} onClick={() => selector(option)}>
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form container">
      <div className="field">
        <label htmlFor="color" className="label">
          {label}
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
