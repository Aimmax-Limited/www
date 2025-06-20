import React, {useEffect, useState} from "react";
import { useSpring, animated } from "react-spring";

export default function AnimatedForm() {

    const [fieldsVisible, setFieldVisible] = useState([false, false, false, false, false])

    const fields = [
          { placeholder: "Name", type: "text", options:[] },
          { placeholder: "Phone", type: "text", options:[]},
          { placeholder: "Email", type: "email", options:[] },
          { placeholder: "Support", type: "select", options: ["Support", "Technical", "Sales"] },
          { placeholder: "Message", type: "textarea", options:[] },
        ]
    
    const glowingEffect = {
    boxShadow: "0 0 10px 2px #007bff",
    transition: "box-shadow 0.5s ease",
    };

    //resets the animation every 9 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setFieldVisible([false, false, false, false, false]);
            fieldsVisible.forEach((_, index) => {
                setTimeout(() => {
                    setFieldVisible((prev) => {
                        const updated = [...prev]
                        updated[index] = true;
                        return updated;
                    });
                }, index * 500)
            });
        }, 9500)
        return () => clearInterval(interval);
    }, []);


    return (
      <div className='w-full flex justify-center'>
        <form action=""  className="p-10 bg-transparent w-full">
            
            {fields.map((_field, index) => {
                const style = useSpring({
                    opacity: fieldsVisible[index] ? 1 : 0,
                    transform: fieldsVisible[index] ? "translateX(0px)" : "translateX(-50px)",
                    config: { duration: 600 },
                });

                return (<animated.div style={style} key={index} className=''>
                    {_field.type === "select" ? (
                <select
                  className="w-full px-3 py-2 border rounded-lg form-group"
                  style={fieldsVisible[index] ? glowingEffect : {}}
                  disabled
                  required
                >
                  {_field.options.map((option, i) => (
                    <option key={i} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : _field.type === "textarea" ? (
                <textarea
                  placeholder={_field.placeholder}
                  className="w-full px-3 py-2 border rounded-lg resize-none"
                  rows={4}
                  style={fieldsVisible[index] ? glowingEffect : {}}
                  disabled
                  required
                />
              ) : (
                <input
                  type={_field.type}
                  placeholder={_field.placeholder}
                  className="w-full px-3 py-2 border rounded-lg form-group"
                  style={fieldsVisible[index] ? glowingEffect : {}}
                  disabled
                  required
                />
              )}
                </animated.div>)
            })}
            <button
          type="submit"
          className="w-full  text-white mt-4 hover:bg-blue-700 submit-btn animate-pulse hover:animate-none bg-blue-500 px-4 py-2 rounded"
          disabled
        >
          Send
        </button>
            
        </form></div>
        
        
    );
}