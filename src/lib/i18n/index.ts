import { init, register } from 'svelte-i18n';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import ptBr from './locales/pt-br.json';

export async function initI18n() {
    register('en', () => Promise.resolve(en));
    register('es', () => Promise.resolve(es));
    register('fr', () => Promise.resolve(fr));
    register('ja', () => Promise.resolve(ja));
    register('ko', () => Promise.resolve(ko));
    register('pt-br', () => Promise.resolve(ptBr));

    await init({
        fallbackLocale: 'en',
        initialLocale: 'en'
    });
} 