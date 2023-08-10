import React, { useState, useEffect } from 'react';
import { SelectInput, SelectArrayInput, TextInput, CreateBase, Form, SaveButton, Toolbar, required, ReferenceInput } from 'react-admin';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Tabs, Tab, Button } from '@mui/material';
import { Dashboard as DashboardIcon } from '@mui/icons-material';

const RuleCategoryList = [
    { id: '1', value: 'input' },
    { id: '2', value: 'output' },
];

const RuleOperationsList = [
    { id: '1', value: 'operations' }
];


const RuleEngine = () => {
    const [namespaceData, setNamespaceData] = useState([]);
    const [categoryName, setCategoryData] = useState([]);
    const [showSegments, setShowSegments] = useState(false);
    const [showSegments2, setShowSegments2] = useState(false);
    const [showSegments3, setShowSegments3] = useState(false);


    const [selectedCategory, setSelectedCategory] = useState([{ categoryName: '', value: '' }]);
    const handleSelectCategory = (index, fieldName, value) => {
        const updatedSelectedValues = [...selectedCategory];
        updatedSelectedValues[index][fieldName] = value;
        setSelectedCategory(updatedSelectedValues);
    };

    console.log(selectedCategory);

    //Tab
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    useEffect(() => {
        // Retrieve the "namespace_data" from local storage
        const storedNamespaceData = localStorage.getItem('namespace_data');
        const storedCategoryData = localStorage.getItem('category_data');

        // Parse the JSON string to get the array of objects
        if (storedNamespaceData) {
            const parsedNamespaceData = JSON.parse(storedNamespaceData);
            setNamespaceData(parsedNamespaceData);
        }

        if (storedCategoryData) {
            const parsedCategoryData = JSON.parse(storedCategoryData);
            setCategoryData(parsedCategoryData);
        }

    }, []);

    // RuleNamespace Filter
    const uniqueRuleNamespaces = Array.from(new Set(namespaceData.map(item => item.ruleNamespace)));

    // Dropdown filtered "ruleNamespace" values
    const namespaceOptions = uniqueRuleNamespaces.map(namespace => ({
        rulenamespace: namespace
    }));

    //Operation Filter
    const filteredOperationNames = categoryName.filter(category => (
        category.categoryName === 'operations'
    ));

    // Dropdown filtered "operations" values
    const operationsOptions = filteredOperationNames.map(filteredName => ({
        value: filteredName.value
    }));

    //InputType Filter
    const filteredInputType = categoryName.filter(category => (
        category.categoryName === 'input'
    ));

    // Dropdown filtered "inputtype" values
    const inputtypeOptions = filteredInputType.map(filteredName => ({
        value: filteredName.value
    }));

    //Component Filter
    const filteredComponent = categoryName.filter(category => (
        category.categoryName === 'componentType'
    ));

    // Dropdown filtered "component" values
    const componentOptions = filteredComponent.map(filteredName => ({
        value: filteredName.value
    }));

    //statecode Filter
    const filteredStatecode = categoryName.filter(category => (
        category.categoryName === 'stateCode'
    ));

    // Dropdown filtered "statecode" values
    const stateOptions = filteredStatecode.map(filteredName => ({
        value: filteredName.value
    }));

    //messageType Filter
    const filteredMessageType = categoryName.filter(category => (
        category.categoryName === 'messageType'
    ));

    // Dropdown filtered "messageType" values
    const messageOptions = filteredMessageType.map(filteredName => ({
        value: filteredName.value
    }));

    //output Filter
    const filteredOutputType = categoryName.filter(category => (
        category.categoryName === 'output'
    ));

    // Dropdown filtered "output" values
    const outputOptions = filteredOutputType.map(filteredName => ({
        value: filteredName.value
    }));

    //action Filter
    const filteredAction = categoryName.filter(category => (
        category.categoryName === 'setActionAdapter'
    ));

    // Dropdown filtered "action" values
    const actionOptions = filteredAction.map(filteredName => ({
        value: filteredName.value
    }));

    //iso Filter
    const filteredIso = categoryName.filter(category => (
        category.categoryName === 'setIsoTxnStatusCode'
    ));

    // Dropdown filtered "iso" values
    const statusOptions = filteredIso.map(filteredName => ({
        value: filteredName.value
    }));

    //txn Filter
    const filteredTxn = categoryName.filter(category => (
        category.categoryName === 'setTxnType'
    ));

    // Dropdown filtered "txn" values
    const txnOptions = filteredTxn.map(filteredName => ({
        value: filteredName.value
    }));

    //txndirection Filter
    const filteredTxnDirection = categoryName.filter(category => (
        category.categoryName === 'setTxnDirection'
    ));

    // Dropdown filtered "txn" values
    const txnDirectionsOptions = filteredTxnDirection.map(filteredName => ({
        value: filteredName.value
    }));

    //baseURL Filter
    const filteredBaseURL = categoryName.filter(category => (
        category.categoryName === 'setNextCompDispatchBaseURL'
    ));

    // Dropdown filtered "txn" values
    const baseOptions = filteredBaseURL.map(filteredName => ({
        value: filteredName.value
    }));

    //URLSuffix Filter
    const filteredURLSuffix = categoryName.filter(category => (
        category.categoryName === 'setNextCompDispatchURLSuffix'
    ));

    // Dropdown filtered "txn" values
    const suffixOptions = filteredURLSuffix.map(filteredName => ({
        value: filteredName.value
    }));

    //setReasonCode Filter
    const filteredReasonCode = categoryName.filter(category => (
        category.categoryName === 'setReasonCode'
    ));

    // Dropdown filtered "txn" values
    const reasonOptions = filteredReasonCode.map(filteredName => ({
        value: filteredName.value
    }));

    //setNextCompResponseType Filter
    const filteredResponseType = categoryName.filter(category => (
        category.categoryName === 'setNextCompResponseType'
    ));

    // Dropdown filtered "txn" values
    const responseOptions = filteredResponseType.map(filteredName => ({
        value: filteredName.value
    }));

    //setNextCompNewFlowFlag Filter
    const filteredFlowFlag = categoryName.filter(category => (
        category.categoryName === 'setNextCompNewFlowFlag'
    ));

    // Dropdown filtered "txn" values
    const flowFlagOptions = filteredFlowFlag.map(filteredName => ({
        value: filteredName.value
    }));

    const handleButtonClick = () => {
        setShowSegments(true);
    };

    const handleButtonClick2 = () => {
        setShowSegments2(true);

    };

    const handleButtonClick3 = () => {
        setShowSegments3(true);

    };

    const handleUpdateAtIndex = (index, updatedData) => {
        setSelectedCategory(prevState => {
            const updatedCategory = [...prevState];
            updatedCategory[index] = { ...updatedCategory[index], ...updatedData };
            return updatedCategory;
        });
    };

    return (
        <CreateBase>
            <Form>
                <Box>
                    <h4 className="main_divider">Routing Segment</h4>
                    <fieldset className='Routing'>
                        <legend>Routing Selection</legend>
                        <Grid item lg={12}>
                            <SelectInput
                                fullWidth
                                label="Namespace"
                                source="ruleNamespace"
                                choices={namespaceOptions}
                                optionText="rulenamespace"
                                optionValue="rulenamespace"
                                variant="outlined"
                                style={{ width: '90%', margin: '3%' }}
                                validate={required()}
                            />
                        </Grid>
                    </fieldset>
                </Box>


                <Box>
                    <Tabs value={activeTab} onChange={handleTabChange}>
                        <Tab icon={<DashboardIcon />}
                            label="Input Segment" />
                        <Tab icon={<DashboardIcon />}
                            label="Output Segment" />
                    </Tabs>

                    {activeTab === 0 && (
                        <div>
                            <Button onClick={handleButtonClick} style={{ backgroundColor: '#1dabef', color: 'white', borderRadius: '3px', padding: '5px', marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>Category Set
                            </Button>
                            {showSegments && (
                                <div>
                                    {selectedCategory.map((input, index) => (
                                        <div key={index}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <fieldset className='Category'>
                                                    <legend>Category Segment</legend>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label='Category'
                                                                source={`categoryName${index}`}
                                                                choices={RuleCategoryList}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleSelectCategory(index, 'categoryName', e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label='InputType'
                                                                source={`value${index}`}
                                                                choices={inputtypeOptions}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleSelectCategory(index, 'value', e.target.value)}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </fieldset>
                                            </Box>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Button onClick={handleButtonClick2} style={{ backgroundColor: '#1dabef', color: 'white', borderRadius: '3px', padding: '5px', marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>Operation Set
                            </Button>
                            {showSegments2 && (
                                <div>
                                    {selectedCategory.map((input, index) => (
                                        <div key={index}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <fieldset className='Operation'>
                                                    <legend>Operation Segment</legend>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label='Operation'
                                                                source={`categoryName1${index}`}
                                                                choices={RuleOperationsList}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleUpdateAtIndex(1, { categoryName: e.target.value })}
                                                            />
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label="Operation Value"
                                                                source={`value1${index}`}
                                                                choices={operationsOptions}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleUpdateAtIndex(1, { value: e.target.value })}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </fieldset>
                                            </Box>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Button onClick={handleButtonClick3} style={{ backgroundColor: '#1dabef', color: 'white', borderRadius: '3px', padding: '5px', marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>Type Set
                            </Button>
                            {showSegments3 && (
                                <div>
                                    {selectedCategory.map((input, index) => (
                                        <div key={index}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <fieldset className='Category'>
                                                    <legend>Type Segment</legend>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label='Type'
                                                                source={`categoryName3${index}`}
                                                                choices={inputtypeOptions}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleUpdateAtIndex(2, { categoryName: e.target.value })}
                                                            />
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label="Components"
                                                                source={`value3${index}`}
                                                                choices={componentOptions}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleUpdateAtIndex(2, { value: e.target.value })}
                                                            />
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label="StateCode"
                                                                source={`value4${index}`}
                                                                choices={stateOptions}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleUpdateAtIndex(2, { value: e.target.value })}
                                                            />
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <SelectInput
                                                                fullWidth
                                                                label="Message"
                                                                source={`value5${index}`}
                                                                choices={messageOptions}
                                                                optionText="value"
                                                                optionValue="value"
                                                                variant="outlined"
                                                                style={{ width: '90%', margin: '3%' }}
                                                                validate={required()}
                                                                onChange={(e) => handleUpdateAtIndex(2, { value: e.target.value })}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </fieldset>
                                            </Box>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    )}
                </Box>

                {/* 
                    {activeTab === 1 && (
                        <Box>
                            <fieldset className='Output'>
                                <legend>Category Segment</legend>
                                <Grid container spacing={2}>
                                    <Grid item lg={4}>
                                        <SelectInput
                                        
                                            fullWidth
                                            label="Category"
                                            source="category4"
                                            choices={RuleCategoryList}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    </Grid>
                                    </fieldset>

                                    <fieldset className='Output'>
                                <legend>Output Segment</legend>
                                <Grid container spacing={2}>
                                    <Grid item lg={4}>
                                        <SelectInput
                                            fullWidth
                                            label="Output Type"
                                            source="outputtype"
                                            choices={outputOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <SelectInput
                                            fullWidth
                                            label="setActionAdapter"
                                            source="action"
                                            choices={actionOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <SelectInput
                                            fullWidth
                                            label="setInitialState"
                                            source="state"
                                            choices={stateOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <SelectInput
                                            fullWidth
                                            label="setInitialComponent"
                                            source="component"
                                            choices={componentOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                   <Grid item lg={3}>
                                        <SelectInput
                                            fullWidth
                                            label="setIsoTxnStatusCode"
                                            source="action6"
                                            choices={statusOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                   <Grid item lg={3}>
                                        <TextInput
                                            fullWidth
                                            label="setSystemDescription"
                                            source="action8"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <SelectInput
                                            fullWidth
                                            label="setTxnType"
                                            source="action10"
                                            choices={txnOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                   <Grid item lg={3}>
                                        <SelectInput
                                            fullWidth
                                            label="setTxnDirection"
                                            source="action11"
                                            choices={txnDirectionsOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                   <Grid item lg={3}>
                                        <SelectInput
                                            fullWidth
                                            label="setCurrentState"
                                            source="action12"
                                            choices={stateOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                   <Grid item lg={3}>
                                        <SelectInput
                                            fullWidth
                                            label="setNextState"
                                            source="action13"
                                            choices={stateOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <SelectArrayInput
                                            fullWidth
                                            label="setNextComponentType"
                                            source="action14"
                                            choices={stateOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                   <Grid item lg={6}>
                                        <SelectArrayInput
                                            fullWidth
                                            label="setNextCompDispatchBaseURL"
                                            source="action15"
                                            choices={baseOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <SelectArrayInput
                                            fullWidth
                                            label="setNextCompDispatchURLSuffix"
                                            source="action16"
                                            choices={suffixOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <SelectInput
                                            fullWidth
                                            label="setReasonCode"
                                            source="action17"
                                            choices={reasonOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <TextInput
                                            fullWidth
                                            label="setReasonDesc"
                                            source="action18"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                   <Grid item lg={3}>
                                        <SelectArrayInput
                                            fullWidth
                                            label="setNextCompResponseType"
                                            source="action20"
                                            choices={responseOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <SelectArrayInput
                                            fullWidth
                                            label="setNextCompNewFlowFlag"
                                            source="action21"
                                            choices={flowFlagOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                        />
                                    </Grid>
                                </Grid>
                            </fieldset>

                        </Box>
                    )} */}

                <Toolbar>
                    <SaveButton
                        variant="contained"
                    >Submit</SaveButton>
                </Toolbar>
            </Form>
        </CreateBase >
    )
};
export default RuleEngine;