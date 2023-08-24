import { fetchUtils, combineDataProviders } from 'react-admin';
import RuleEngineDataProvider from './RuleEngineDataProvider';

export const ruleHttpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-USER-ID', '1');
    return fetchUtils.fetchJson(url, options);
}

export const mainDataProvider = combineDataProviders((resource) => {
    switch (resource) {
        case 'rule-namespace':
            return RuleEngineDataProvider;
        default:
            throw new Error(`Unknown resource: ${resource}`);
    }
});
