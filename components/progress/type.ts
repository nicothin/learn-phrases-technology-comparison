export interface ProgressProps {
  percentage: number; // Math.min(Math.max(percentage, 0), 100)
  className?: string;
  children?: string | Node;
}
