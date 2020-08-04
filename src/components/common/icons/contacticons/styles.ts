export interface ContactIconProps {
  size?: number;
  colour? : string;
}

type ContactIconStyles = {
  iconContainerStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
}

export const iconStyles: ContactIconStyles = {
  iconContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: '70%'
  },
  iconStyle: {
    width: 80,
    height: 80,
    padding: 25,
    border: '1px solid #DFDFDF',
    backgroundColor: 'white',
    borderRadius: 15,
  }
}
