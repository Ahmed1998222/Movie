import ReactNative from 'react-native';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage'

// Import all locales
const en = require('./en.json');
const ar = require('./ar.json');

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(false);

//To change language to english:false ----- arabic:true
//ReactNative.I18nManager.forceRTL(true);

let AppLanguage = '';





const getLang = async () => {
  let Lang = '';



  try {
    Lang = await AsyncStorage.getItem('lang') || 'none';
    AppLanguage = await AsyncStorage.getItem('lang') || 'none';


    console.log('from lang control --- >  ', Lang)

  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }


  // return result;
}

getLang()


if (AppLanguage == 'ar') {
  console.log('in ar ---- > ', AppLanguage)
  // console.log('in AAAAAAR')
  // console.log('allow Rtl --- > ', ReactNative.I18nManager.allowRTL)
  // console.log('forceRTL Rtl --- > ', ReactNative.I18nManager.forceRTL)
  AppLanguage = 'ar';
} else {
  console.log('in ar ---- > ', AppLanguage)

  AppLanguage = 'en';
  // console.log('in Ennnnnnn')
  // console.log('allow Rtl --- > ', ReactNative.I18nManager.allowRTL)
  // console.log('forceRTL Rtl --- > ', ReactNative.I18nManager.forceRTL)
}

export function getAppLanguage() {
  return AppLanguage;
}
export function isAr() {
  if (AppLanguage == 'ar') return true;
  else false;
}
export const setAppLanguage = (lang, restart = false) => {
  AppLanguage = lang;

  if (lang == 'ar') {

    // console.log('in ar --- >  ' , AppLanguage)
    ReactNative.I18nManager.forceRTL(false);
  } else {
    // console.log('in en ---- >  ' , AppLanguage)

    ReactNative.I18nManager.forceRTL(false);
  }

  RNRestart.Restart();


  // if (lang == 'ar') {
  //   // console.log('in ar --- >  ' , AppLanguage)
  //   ReactNative.I18nManager.allowRTL(true);
  // } else {
  //   // console.log('in en ---- >  ' , AppLanguage)

  //   ReactNative.I18nManager.allowRTL(false);
  // }


  // RNRestart.Restart();

};

// The method we'll use instead of a regular string
export const strings = (key) => {
  if (AppLanguage == undefined || AppLanguage == 'undefined' || AppLanguage == '' || AppLanguage == 'none' || AppLanguage == null) {
    AppLanguage = 'en'
  }
  const _lang = Object.assign({}, { en: en, ar: ar });
  let st = key.split('.');
  //console.log(st)
  if (st.length == 1) return _lang[AppLanguage][st[0]];
  else if (st.length == 2) return _lang[AppLanguage][st[0]][st[1]];
  else if (st.length == 3) return _lang[AppLanguage][st[0]][st[1]][st[2]];
};
