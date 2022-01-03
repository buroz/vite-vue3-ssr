import { App } from 'vue';
import { createI18n } from 'vue-i18n';

export const SUPPORTED_LANGUAGES = [
  {
    locale: 'en-US',
    name: 'English',
    cssClass: 'us',
  },
  {
    locale: 'tr-TR',
    name: 'Türkçe',
    cssClass: 'tr',
    default: true,
  },
];

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale);

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.find((l) => l.default);

export const DEFAULT_LOCALE = DEFAULT_LANGUAGE?.locale as string;

const messageImports = import.meta.glob('./locales/*.json');

export function extractLocaleFromPath(path = '') {
  const [_, maybeLocale] = path.split('/');
  return SUPPORTED_LOCALES.includes(maybeLocale) ? maybeLocale : DEFAULT_LOCALE;
}

export function importLocale(locale: string) {
  const [, importLocale] =
    Object.entries(messageImports).find(([key]) => key.includes(`/${locale}.`)) || [];

  return importLocale && importLocale();
}

export async function installI18n(app: App, locale = 'tr-TR') {
  locale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const messages = await importLocale(locale);

  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      [locale]: messages?.default || messages,
    },
    // datetimeFormats: DATE_FORMATS,
    // numberFormats: NUMBER_FORMATS,
  });

  app.use(i18n);
}
