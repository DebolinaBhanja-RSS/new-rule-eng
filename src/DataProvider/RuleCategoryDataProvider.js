import { ruleHttpClient } from "./MainDataProvider";
import { stringify } from "query-string";

const category = 'http://localhost:8081/rule-admin/rule-component-category';

export default {
  getList: () => {
    const url = `${category}`;
    return ruleHttpClient(url).then(({ json }) => ({
      data: json,
      total: json.totalElements,
  }));
},

  getMany: (params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${category}?${stringify(query)}`;
    return ruleHttpClient(url).then(({ json }) => {
      return {
        data: json,
      };
    });
  },
};
