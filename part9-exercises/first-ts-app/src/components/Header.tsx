interface HeaderProps {
    name: string
  }

const Header = (props: HeaderProps) => {

    return <h1 style={{color: 'red'}}>{props.name}</h1>;
}

export default Header;