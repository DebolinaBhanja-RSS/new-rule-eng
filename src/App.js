import React from "react";
import { Admin, Resource } from "react-admin";
import RuleEngine from "./RuleEngine";
import RuleEngineList from "./RuleEngineList";
import { mainDataProvider } from './DataProvider/MainDataProvider';

const App = () => (
    <Admin dataProvider={mainDataProvider}>
      <Resource
        name="rule-namespace"
        create={RuleEngine} list={RuleEngineList} 
      />
    </Admin>
);

export default App;
