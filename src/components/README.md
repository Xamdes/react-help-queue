**Use as Needed for Components**
* import PropTypes from 'prop-types';
* import styled from 'styled-components';


**Prop Types Examples**  
> exampleArray: PropTypes.array,  
> exampleBoolean: PropTypes.bool,  
> exampleFunction: PropTypes.func,  
> exampleNumber: PropTypes.number,  
> exampleObject: PropTypes.object,  
> exampleString: PropTypes.string,  
> exampleSymbol: PropTypes.symbol,  
> exampleReactElement: PropTypes.element,  
> exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),  
> exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),  
> exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),  
> optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),  

**Styled Examples**

>  <Main className="card">  
>    <ButtonTest className="btn">Test</ButtonTest>  
>  </Main>  


>  <ButtonTest className="btn">Test</ButtonTest>
>  const ButtonTest = styled.button`  
>   background-color: red;  
>   &:hover ${ButtonTest} {  
>     background-color: teal;  
>   }  
>  `;  

>  const Main = styled.div`
>    backgroundColor: #ecf0f1;
>    fontFamily: sans-serif;
>    paddingTop: 50px;
>    `
>  ;
