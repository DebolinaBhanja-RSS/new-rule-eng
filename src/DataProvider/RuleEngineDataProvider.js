// in src/dataProvider.ts
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import { ruleHttpClient } from "./MainDataProvider";

const apiUrl = '/rule-admin/rules/custom';
const save = '/rule-admin/rules/custom/save';
const httpClient = fetchUtils.fetchJson;

// TypeScript users must reference the type `DataProvider`
export default {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json.map(res => ({
                ...res,
                id: res.ruleId,
                tenant: res.tenant,
                rulenamespace: res.ruleNamespace,
            })),
            total: 10,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt((headers.get('content-range') || "0").split('/').pop() || 0, 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) => {
        console.log(params);
        return ruleHttpClient(`${save}`, {
            method: 'POST',
            body: JSON.stringify({
                "tenant": "IC",

                "ruleNamespace": params.data.ruleNamespace,

                "conditions": JSON.parse(localStorage.conditions),

                "actions": JSON.parse(localStorage.actions),

                "priority": 1,

                "description": "Describe the action"

            }),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.ruleId },

        }));
    },

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    }
};