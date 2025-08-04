'use client';
import { useEffect } from 'react';

// import fluidCursor from '@/hooks/use-FluidCursor';
import useFluidCursor from '../../hooks/use-FluidCursor';
// import fluidCursor from '../../hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div style={{position:"fixed",top:"0",left:"0",zIndex:"2"}}>
      <canvas id='fluid' style={{width:"100vw",height:"100vh"}}/>
    </div>
  );
};
export default FluidCursor;
