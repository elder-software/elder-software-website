export interface AboutIconProps {
  size?: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isFocused: boolean;
}

type AboutIconStyles = {
  iconContainerStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
};

export const iconStyles: AboutIconStyles = {
  iconContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: '70%',
    transition: 'background-color 0.2s ease'
  },
  iconStyle: {
    width: 80,
    height: 80,
    padding: 20,
    border: '3px solid #DFDFDF',
    backgroundColor: 'white',
    borderRadius: 15,
    transition: 'background-color 0.2s ease'
  }
};
