import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            logoTitle: 'Fishing',

            inputWeightPlaceholder: 'Weight 0.01 to 100',
            inputPondNamePlaceholder: 'Pond name',
            inputCityNamePlaceholder: 'City name',
            inputRegionNamePlaceholder: 'Region name',
            inputLatitudePlaceholder: 'Latitude',
            inputLongitudePlaceholder: 'Longitude',

            modalAddFishingTitle: 'Add fishing',
            modalAddPondTitle: 'Add new pond',
            modalMapTitle: 'Pond location',
            modalCloseBtn: 'CANCEL',
            btnAddFishing: 'ADD FISHING',

            totalWeightTitle: 'Your total weight',
            totalValue: 'kg',

            navHome: 'Home',
            btnAddNewPond: 'ADD NEW POND',

            postLocation: 'Location',
            postName: 'Name',
            postTotalFishing: 'Total fishing',
            postFishSpecies: 'Fish Species',
            postTotalWeight: 'Total weight',
          },
        },
      },
      uk: {
        translation: {
          description: {
            logoTitle: 'Рибалка',

            inputWeightPlaceholder: 'Вага 0.01 to 100',
            inputPondNamePlaceholder: 'Назва водойми',
            inputCityNamePlaceholder: 'Назва міста',
            inputRegionNamePlaceholder: 'Назва області',
            inputLatitudePlaceholder: 'Широта',
            inputLongitudePlaceholder: 'Довгота',

            modalAddFishingTitle: 'Додати рибалку',
            modalCloseBtn: 'ВИХІД',
            modalAddPondTitle: 'Додати нову водойму',
            modalMapTitle: 'Локація водойми',

            btnAddFishing: 'ДОДАТИ ',
            totalWeightTitle: 'Загальна вага',
            totalValue: 'кг',

            navHome: 'Головна',

            btnAddNewPond: 'НОВА ВОДОЙМА',

            postLocation: 'Локація',
            postName: 'Назва',
            postTotalFishing: 'Кількість рибалок',
            postFishSpecies: 'Види риб',
            postTotalWeight: 'Загальна вага',
          },
        },
      },
    },
  });

export default i18n;
