import { fetchUtils, combineDataProviders } from 'react-admin';
import RuleNameSpaceDataProvider from './RuleNamespaceDataProvider'
import RuleCategoryDataProvider from './RuleCategoryDataProvider';
import RuleValueDataProvider from './RuleValueDataProvider';
import DataProvider from './DataProvider';

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
            return DataProvider;
        case 'rulename':
            return RuleNameSpaceDataProvider;
        case 'category':
            return RuleCategoryDataProvider;
            case 'value':
                return RuleValueDataProvider;
        default:
            throw new Error(`Unknown resource: ${resource}`);
    }
});
