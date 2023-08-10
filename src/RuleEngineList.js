import React, { useState, useEffect } from 'react';
import { Datagrid, EditButton, List, ListBase, TextField, useRemoveFromStore, TopToolbar, Create, Button, CreateButton } from "react-admin";

const RuleEngineList = (props) => {
  const [apiData, setApiData] = useState({
    apiData1: null,
    apiData2: null,
    apiData3: null,
  });

  // Fetch data from the three APIs when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('http://localhost:8081/rule-admin/rule-namespace');
        const data1 = await response1.json();
        const response2 = await fetch('http://localhost:8081/rule-admin/rule-component-value/rule-category');
        const data2 = await response2.json();

        setApiData({
          apiData1: data1,
          apiData2: data2,
        });
      } catch (error) {
        console.error('Error fetching data from APIs:', error);
      }
    };

    fetchData();
  }, []);

  const handleCreateButtonClick = () => {
    // Store the API data in local storage
    localStorage.clear();
    localStorage.setItem("namespace_data", JSON.stringify(apiData.apiData1));
    localStorage.setItem("category_data", JSON.stringify(apiData.apiData2));

    // Additional actions after storing data (if needed)
    console.log('API data stored in local storage:', apiData.apiData1, apiData.apiData2);
  };

  const ListToolbar = () => (
    <TopToolbar>
      <CreateButton onClick={handleCreateButtonClick} />
    </TopToolbar>
  );

  return (
    <ListBase {...props}>
      <ListToolbar />
      {apiData.apiData1 && (
        <Datagrid>
          {apiData.apiData1.map((item) => (
            <TextField key={item.id} source="id" record={item} />
          ))}
          <TextField source="rulenamespace" />
          <EditButton />
        </Datagrid>
      )}
    </ListBase>
  );
};

export default RuleEngineList;
