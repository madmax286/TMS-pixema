import { ReactNode, FC } from 'react'
import { useSelector } from 'react-redux';
import { Header, Loader, Menu } from "../../components";
import { theme } from '../../utils/helpers';
import './pageTemplate.css'

interface IPageTemplate {
    children?: ReactNode
}

const PageTemplate: FC<IPageTemplate> = ({ children }) => {
  const isLoading = useSelector(({isLoading}) => isLoading)
  
  return (
    <div className={`wrapper-container ${theme ? '' : 'light-theme'}`}>
      <Menu />
      <Header />
      {isLoading ? <Loader/> : children}
    </div>
  );
};

export default PageTemplate
