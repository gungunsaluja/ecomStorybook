export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    height? : string;
    width? : string;
    onClick? : () => void;
    text?: string;
    /** Background color (e.g., '#2563eb' or 'tomato'). Overrides variant color */
    color?: string;
    /** Text color (e.g., '#fff'). Optional when using custom background color */
    textColor?: string;
  }
  