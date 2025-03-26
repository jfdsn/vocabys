import { init, register } from 'svelte-i18n';

const locales = ['en', 'pt-br', 'fr', 'es', 'ja', 'ko'];

register('en', () => import('./locales/en.json'));
register('pt-br', () => import('./locales/pt-br.json'));
register('fr', () => import('./locales/fr.json'));
register('es', () => import('./locales/es.json'));
register('ja', () => import('./locales/ja.json'));
register('ko', () => import('./locales/ko.json'));

init({
    fallbackLocale: 'en',
    initialLocale: 'en',
    loadingDelay: 200,
    formats: {
        number: {
            scientific: { notation: 'scientific' },
            engineering: { notation: 'engineering' },
            compactLong: { notation: 'compact', compactDisplay: 'long' },
            compactShort: { notation: 'compact', compactDisplay: 'short' }
        },
        date: {
            short: { month: 'numeric', day: 'numeric', year: 'numeric' },
            long: { month: 'long', day: 'numeric', year: 'numeric' }
        },
        time: {
            short: { hour: 'numeric', minute: 'numeric' },
            long: { hour: 'numeric', minute: 'numeric', second: 'numeric' }
        }
    }
}); 