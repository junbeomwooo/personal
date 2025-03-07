declare module 'react-shuffle-text' {
    interface ShuffleTextProps {
      content: string;
      className?: string;
      charIncInterval?: number;
      charFrames?: number;
      charFrameTime?: number;
      // 필요한 다른 props 정의
    }
  
    const ShuffleText: React.FC<ShuffleTextProps>;
  
    export default ShuffleText;
  }