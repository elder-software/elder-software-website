export interface TechIconProps {
  size?: number;
  fontSize?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isFocused?: boolean;
  showLabel?: boolean;
}

type IconStyles = {
  iconContainerStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
};

export const iconStyles: IconStyles = {
  iconContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: '70%'
  },
  iconStyle: {
    width: 80,
    height: 80,
    padding: 16,
    border: '1px solid #DFDFDF',
    backgroundColor: 'white',
    borderRadius: '15%'
  }
};
