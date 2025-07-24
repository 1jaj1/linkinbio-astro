export interface CardBackground {
  type: 'image' | 'color' | 'gradient';
  image?: {
    src: string;
    alt: string;
    overlay?: {
      color: string;
      opacity: number;
    };
  };
  color?: string;
  gradient?: {
    direction: string;
    startColor: string;
    endColor: string;
    middleColor?: string;
  };
  textStyling?: {
    useCustomColors: boolean;
    primaryTextColor?: string;
    secondaryTextColor?: string;
  };
}

export interface CardContent {
  platform: {
    name: string;
    icon: string;
    color: string;
  };
  username: string;
  description: string;
  url: string;
  published: boolean;
  order: number;
}

export interface CardProps {
  content: CardContent;
  background: CardBackground;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}