declare module "dat.gui" {
    export class GUI {
      constructor();
      add(target: object, propName: string, min?: number, max?: number, step?: number): GUIController;
      addColor(target: object, propName: string): GUIController;
      remove(controller: GUIController): void;
      destroy(): void;
    }
  
    export interface GUIController {
      onChange(callback: (value: any) => void): GUIController;
      onFinishChange(callback: (value: any) => void): GUIController;
      min(min: number): GUIController;
      max(max: number): GUIController;
      step(step: number): GUIController;
      setValue(value: any): GUIController;
    }
  }