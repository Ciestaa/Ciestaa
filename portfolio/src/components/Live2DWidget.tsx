import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import type { Live2DModel } from 'pixi-live2d-display';

// Expose PIXI to window so pixi-live2d-display can find it
(window as any).PIXI = PIXI;

const Live2DWidget: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const modelRef = useRef<Live2DModel | null>(null);

  useEffect(() => {
    if (!canvasRef.current || appRef.current) return;

    // Polyfill to bypass the infamous PixiJS WebGL context crash
    // Forces gl.getParameter(MAX_FRAGMENT_UNIFORM_VECTORS) to return at least 16
    const patchWebGL = (ContextClass: any) => {
      if (!ContextClass) return;
      const originalGetParameter = ContextClass.prototype.getParameter;
      ContextClass.prototype.getParameter = function(parameter: number) {
        if (parameter === this.MAX_FRAGMENT_UNIFORM_VECTORS) {
          const val = originalGetParameter.call(this, parameter);
          if (!val || val === 0) return 16; 
          return val;
        }
        return originalGetParameter.call(this, parameter);
      };
    };
    
    patchWebGL(window.WebGLRenderingContext);
    patchWebGL(window.WebGL2RenderingContext);

    // Initialize PIXI App with transparent background
    let app: PIXI.Application;
    try {
      app = new PIXI.Application({
        view: canvasRef.current,
        autoStart: true,
        backgroundAlpha: 0,
        width: 400,
        height: 500,
        resolution: window.devicePixelRatio || 1,
      });
    } catch (err) {
      console.error("PIXI WebGL initialization failed (likely due to context exhaustion):", err);
      if (canvasRef.current) {
        canvasRef.current.style.display = 'none'; // Hide the white square
      }
      return;
    }
    
    appRef.current = app;

    // Load the model
    const loadModel = async () => {
      try {
        // Dynamically import the cubism4 bundle to skip the missing Cubism 2 runtime error
        const { Live2DModel } = await import('pixi-live2d-display/cubism4');
        
        // Critical for modular setups: bind Live2D to the PIXI animation loop
        Live2DModel.registerTicker(PIXI.Ticker);
        
        const model = await Live2DModel.from('/Assets/March 7th/march 7th.model3.json');
        
        // Scale and position for a bottom-corner widget
        model.scale.set(0.15); 
        model.x = 200; // Center X
        model.y = 250; // Center Y
        model.anchor.set(0.5, 0.5);

        // React Strict Mode safety check: If the component unmounted while loading, app.stage will be null
        if (!app.stage) {
          model.destroy();
          return;
        }

        app.stage.addChild(model);
        modelRef.current = model;

        // Interaction: Make the model look at the mouse
        const handleMouseMove = (e: MouseEvent) => {
          if (!modelRef.current) return;
          // model.focus(x, y) expects coordinates relative to the model's center usually
          modelRef.current.focus(e.clientX, e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup listener on unmount
        return () => window.removeEventListener('mousemove', handleMouseMove);
      } catch (err) {
        console.error("Failed to load Live2D model:", err);
      }
    };

    const cleanupMouse = loadModel();

    return () => {
      cleanupMouse.then(cleanup => cleanup && cleanup());
      if (appRef.current) {
        appRef.current.destroy(false, { children: true });
        appRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-50 pointer-events-none w-[400px] h-[500px]">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full pointer-events-auto interactable" 
      />
    </div>
  );
};

export default Live2DWidget;
