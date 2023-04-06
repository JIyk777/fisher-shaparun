import { LangBarBox, LangBtnEn, LangBtnUk } from './LangBar.styled';
import { useTranslation } from 'react-i18next';

const LangBar = () => {
  const { i18n } = useTranslation();
  return (
    <LangBarBox>
      <LangBtnEn
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        colorValue={i18n.resolvedLanguage === 'en' ? true : false}
      >
        EN
      </LangBtnEn>
      <LangBtnUk
        type="button"
        onClick={() => i18n.changeLanguage('uk')}
        colorValue={i18n.resolvedLanguage === 'uk' ? true : false}
      >
        UK
      </LangBtnUk>
    </LangBarBox>
  );
};
export default LangBar;
