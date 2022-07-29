import { Search } from '@components/Search/Search';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';



import './Header.style.scss';

export const Header = () => {
  return (<div className="header">
    <Logo />
    <Search />
  </div>);
};