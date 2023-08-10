import { ruleHttpClient } from "./MainDataProvider";
import { stringify } from "query-string";

const value = 'http://localhost:8081/rule-admin/rule-component-value';

const valueLocalStorageKey = "value_data";

export default {
  getList: () => {
    const url = `${value}`;
    return ruleHttpClient(url).then(({ json }) => ({
      data: json,
      total: json.totalElements,
  }));
},

  getMany: (params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${value}?${stringify(query)}`;
    return ruleHttpClient(url).then(({ json }) => {
      return {
        data: json,
      };
    });
  },
};
