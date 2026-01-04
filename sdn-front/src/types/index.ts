export type NetworkMode = 'normal' | 'low' | 'game';

export interface Log {
  id: number;
  time: string;
  user: string;
  action: string;
  bandwidth: string;
}

export interface ModeConfig {
  name: string;
  color: string;
  icon: React.ElementType;
  desc: string;
}