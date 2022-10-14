import {useState, useMemo, useEffect} from "react";

const useElementOnScreen = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false) ;

  const callbackFunction = entries => {
     const [entry] = entries; //const entry = entries [o];
     setIsVisible (entry.isIntersecting) ;
  }

const optionsMemo = useMemo(() => {
  return options
}, [options]);

useEffect(() => {
  const observer = new IntersectionObserver(callbackFunction, optionsMemo) ;

  const currentTarget = targetRef.current;
  if(currentTarget) observer.observe (currentTarget) ;

  return () => {
     if(currentTarget)observer.unobserve(currentTarget);
  }
},   [targetRef, optionsMemo]);

  return isVisible;
}

export default useElementOnScreen;
