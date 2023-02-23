import useDocument from '~/hooks/redux/document/useDocument';
// import withUnAuthClient from 'middlewares/withUnAuthClient';
import HeaderSub from '~/libraries/layouts/headersub/HeaderSub';
import FooterMain from '~/libraries/layouts/footer/footer';
import { useEffect } from 'react';

function NavigateHeaderLayout({ children, title, btn,nomargin }) {
  const { setTitle } = useDocument();

  useEffect(() => {
    setTitle(title);
  }, [title]);
  console.log(btn);
  return (
    <div>
      <HeaderSub title={title} btn={btn} />
      {children}
      <FooterMain nomargin={nomargin}/>
    </div>
  );
}

export default NavigateHeaderLayout;
