import { ruleHttpClient } from "./MainDataProvider";
import { stringify } from "query-string";

const namespace = 'http://localhost:8081/rule-admin/rule-namespace';

export default {
    getList: () => {
      const url = `${namespace}`;
      return ruleHttpClient(url).then(({ json }) => ({
          data: json,
          total: json.totalElements,
      }));
  },

  getMany: (params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${namespace}?${stringify(query)}`;
    return ruleHttpClient(url).then(({ json }) => {
      return {
        data: json,
      };
    });
  },
};
