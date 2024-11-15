function Header(props) {
  return (
    <div>
      <ul>
        <li>
          Home
        </li>
        <li>
          about
        </li>
        <li>
          contact
        </li>
        <li>
          {props.test}
        </li>
      </ul>
    </div>
  );
}

export default Header;
