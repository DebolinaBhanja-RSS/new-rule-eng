import React, { useState, useEffect } from 'react';
import { SelectInput, SelectArrayInput, TextInput, CreateBase, Form, SaveButton, Toolbar, required, ReferenceInput } from 'react-admin';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Tabs, Tab, Button } from '@mui/material';
import { Dashboard as DashboardIcon } from '@mui/icons-material';

const RuleEngine = () => {
    const [namespaceData, setNamespaceData] = useState([]);
    const [categoryName, setCategoryData] = useState([]);
    const [isEnabled1, setIsEnabled1] = React.useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [operation, setOperation] = useState('');
    const [inputType, setInputType] = useState('');
    const [componentValue, setComponentValue] = useState('');
    const [stateCode, setStateCode] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [outputType, setOutputType] = useState('');
    const [actionAdapter, setActionAdapter] = useState('');
    const [initialState, setInitialState] = useState('');
    const [initialComponent, setInitialComponent] = useState('');
    const [isoTxnStatusCode, setIsoTxnStatusCode] = useState('');
    const [systemDescription, setSystemDescription] = useState('');
    const [txnType, setTxnType] = useState('');
    const [txnDirection, setTxnDirection] = useState('');
    const [currentState, setCurrentState] = useState('');
    const [nextState, setNextState] = useState('');
    const [nextComponentType, setNextComponentType] = useState('');
    const [nextCompDispatchBaseURL, setNextCompDispatchBaseURL] = useState('');
    const [nextCompDispatchURLSuffix, setNextCompDispatchURLSuffix] = useState('');
    const [reasonCode, setReasonCode] = useState('');
    const [reasonDesc, setReasonDesc] = useState('');
    const [nextCompResponseType, setNextCompResponseType] = useState('');
    const [nextCompNewFlowFlag, setNextCompNewFlowFlag] = useState('');
    const [addedValues, setAddedValues] = useState([]);
    const [addedValues2, setAddedValues2] = useState([]);


    const handleInputChange = (event, setState) => {
        setState(event.target.value);
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
        const storedConditionsData = JSON.parse(localStorage.getItem('conditions'));
        const storedActionsData = JSON.parse(localStorage.getItem('actions'));

        if (storedConditionsData) {
            setAddedValues(storedConditionsData);
        }

        if (storedActionsData) {
            setAddedValues2(storedActionsData);
        }
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

    useEffect(() => {
        localStorage.setItem('conditions', JSON.stringify(addedValues));
    }, [addedValues]);

    useEffect(() => {
        localStorage.setItem('actions', JSON.stringify(addedValues2));
    }, [addedValues2]);

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


    function handleDelete(index) {
        const newValues = addedValues2.filter((_, i) => i !== index);
        setAddedValues2(newValues); // Assuming you're using state to manage addedValues2
    }

    function handleDelete2(index) {
        const newValues = addedValues.filter((_, i) => i !== index);
        setAddedValues(newValues); // Assuming you're using state to manage addedValues2
    }


    const handleAddValue = () => {

        const calculatedValue = calculateValue(inputType);
        const concatenatedValue = `input.${inputType}.${operation}("${calculatedValue}")`;
        setAddedValues([...addedValues, concatenatedValue]);

    };

    const calculateValue = (selectedInputType) => {
        // Implement your logic to determine the componentValue based on the selectedInputType
        // For example, use a switch statement or if-else conditions
        switch (selectedInputType) {
            case 'componentType':
                return componentValue;
            case 'stateCode':
                return stateCode;
            case 'messageType':
                return messageValue;
        }
    };

    const handleAddValue2 = () => {

        const calculatedValue2 = calculateValue2(outputType);
        const concatenatedValue2 = `output.${outputType}("${calculatedValue2}")`;
        setAddedValues2([...addedValues2, concatenatedValue2]);

    };

    const calculateValue2 = (selectedOutputType) => {
        // Implement your logic to determine the componentValue based on the selectedInputType
        // For example, use a switch statement or if-else conditions
        switch (selectedOutputType) {
            case 'setActionAdapter':
                return actionAdapter;
            case 'setInitialState':
                return initialState;
            case 'setInitialComponent':
                return initialComponent;
            case 'setIsoTxnStatusCode':
                return isoTxnStatusCode;
            case 'setSystemDescription':
                return systemDescription;
            case 'setTxnType':
                return txnType;
            case 'setTxnDirection':
                return txnDirection;
            case 'setCurrentState':
                return currentState;
            case 'setNextState':
                return nextState;
            case 'setNextComponentType':
                return nextComponentType;
            case 'setNextCompDispatchBaseURL':
                return nextCompDispatchBaseURL;
            case 'setNextCompDispatchURLSuffix':
                return nextCompDispatchURLSuffix;
            case 'setReasonCode':
                return reasonCode;
            case 'setReasonDesc':
                return reasonDesc;
            case 'setNextCompResponseType':
                return nextCompResponseType;
            case 'setNextCompNewFlowFlag':
                return nextCompNewFlowFlag;
        }
    };

    const handleClearValues = (event) => {

        setComponentValue('');
        setInputType('NA');
        setOperation('NA');

        event.target.reset();


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
                        <Box>
                            <fieldset className='Category'>
                                <legend>Input Segment</legend>
                                <Grid container spacing={2}>
                                    <Grid item lg={4}>
                                        <SelectInput
                                            fullWidth
                                            label='Type'
                                            source='inputtype'
                                            choices={inputtypeOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                            onChange={(event) => handleInputChange(event, setInputType)}
                                        />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <SelectInput
                                            fullWidth
                                            label='Operation'
                                            source='operation'
                                            choices={operationsOptions}
                                            optionText="value"
                                            optionValue="value"
                                            variant="outlined"
                                            style={{ width: '90%', margin: '3%' }}
                                            validate={required()}
                                            onChange={(event) => handleInputChange(event, setOperation)}
                                        />
                                    </Grid>
                                    {inputType === 'componentType' && (
                                        <Grid item lg={4}>
                                            <SelectInput
                                                fullWidth
                                                label="Components"
                                                source='components'
                                                choices={componentOptions}
                                                optionText="value"
                                                optionValue="value"
                                                variant="outlined"
                                                style={{ width: '90%', margin: '3%' }}
                                                validate={required()}
                                                onChange={(event) => handleInputChange(event, setComponentValue)}
                                            />
                                        </Grid>
                                    )}
                                    {inputType === 'stateCode' && (
                                        <Grid item lg={4}>
                                            <SelectInput
                                                fullWidth
                                                label="StateCode"
                                                source='statecode'
                                                choices={stateOptions}
                                                optionText="value"
                                                optionValue="value"
                                                variant="outlined"
                                                style={{ width: '90%', margin: '3%' }}
                                                validate={required()}
                                                onChange={(event) => handleInputChange(event, setStateCode)}
                                            />
                                        </Grid>
                                    )}
                                    {inputType === 'messageType' && (
                                        <Grid item lg={4}>
                                            <SelectInput
                                                fullWidth
                                                label="Message"
                                                source='message'
                                                choices={messageOptions}
                                                optionText="value"
                                                optionValue="value"
                                                variant="outlined"
                                                style={{ width: '90%', margin: '3%' }}
                                                validate={required()}
                                                onChange={(event) => handleInputChange(event, setMessageValue)}
                                            />
                                        </Grid>
                                    )}
                                </Grid>

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Button variant="contained" color="primary" onClick={handleAddValue} style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
                                        Add To The List
                                    </Button>
                                </div>

                            </fieldset>
                            <div>
                            <h4>List</h4>
                                <ul>
                                    {addedValues.map((value, index) => (
                                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            {value}
                                            <button
                                                onClick={() => handleDelete2(index)}
                                                style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Box>
                    )}



                    {activeTab === 1 && (
                        <Box>
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
                                            onChange={(event) => handleInputChange(event, setOutputType)}
                                        />
                                    </Grid>
                                    {outputType === 'setActionAdapter' && (
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
                                                onChange={(event) => handleInputChange(event, setActionAdapter)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setInitialState' && (
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
                                                onChange={(event) => handleInputChange(event, setInitialState)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setInitialComponent' && (
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
                                                onChange={(event) => handleInputChange(event, setInitialComponent)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setIsoTxnStatusCode' && (
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
                                                onChange={(event) => handleInputChange(event, setIsoTxnStatusCode)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setSystemDescription' && (
                                        <Grid item lg={3}>
                                            <TextInput
                                                fullWidth
                                                label="setSystemDescription"
                                                source="action8"
                                                variant="outlined"
                                                style={{ width: '90%', margin: '3%' }}
                                                validate={required()}
                                                onChange={(event) => handleInputChange(event, setSystemDescription)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setTxnType' && (
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
                                                onChange={(event) => handleInputChange(event, setTxnType)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setTxnDirection' && (
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
                                                onChange={(event) => handleInputChange(event, setTxnDirection)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setCurrentState' && (
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
                                                onChange={(event) => handleInputChange(event, setCurrentState)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setNextState' && (
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
                                                onChange={(event) => handleInputChange(event, setNextState)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setNextComponentType' && (
                                        <Grid item lg={6}>
                                            <SelectArrayInput
                                                fullWidth
                                                label="setNextComponentType"
                                                source="action14"
                                                choices={componentOptions}
                                                optionText="value"
                                                optionValue="value"
                                                variant="outlined"
                                                style={{ width: '90%', margin: '3%' }}
                                                validate={required()}
                                                onChange={(event) => handleInputChange(event, setNextComponentType)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setNextCompDispatchBaseURL' && (
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
                                                onChange={(event) => handleInputChange(event, setNextCompDispatchBaseURL)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setNextCompDispatchURLSuffix' && (
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
                                                onChange={(event) => handleInputChange(event, setNextCompDispatchURLSuffix)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setReasonCode' && (
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
                                                onChange={(event) => handleInputChange(event, setReasonCode)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setReasonDesc' && (
                                        <Grid item lg={6}>
                                            <TextInput
                                                fullWidth
                                                label="setReasonDesc"
                                                source="action18"
                                                variant="outlined"
                                                style={{ width: '90%', margin: '3%' }}
                                                validate={required()}
                                                onChange={(event) => handleInputChange(event, setReasonDesc)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setNextCompResponseType' && (
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
                                                onChange={(event) => handleInputChange(event, setNextCompResponseType)}
                                            />
                                        </Grid>
                                    )}
                                    {outputType === 'setNextCompNewFlowFlag' && (
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
                                                onChange={(event) => handleInputChange(event, setNextCompNewFlowFlag)}
                                            />
                                        </Grid>
                                    )}
                                </Grid>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Button variant="contained" color="primary" onClick={handleAddValue2} style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
                                        Add To The List
                                    </Button>
                                </div>
                            </fieldset>
                            <div>
                                <h4>List</h4>
                                <ul>
                                    {addedValues2.map((value, index) => (
                                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            {value}
                                            <button
                                                onClick={() => handleDelete(index)}
                                                style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </Box>
                    )}
                </Box>

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