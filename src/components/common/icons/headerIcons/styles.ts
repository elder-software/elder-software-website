export interface HeaderIconProps {
  size?: number;
}

export const headerIconStyles = {
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '15%',
  } as React.CSSProperties,
  iconContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as React.CSSProperties, 
}