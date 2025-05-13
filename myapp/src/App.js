import React from 'react';
import Salesforcecard from './Components/Salesforcecard';

 
function App() {
  return (
    <div style={{backgroundColor:"black",color:"purple"}}>
      <Salesforcecard
        companyLogo="lowes.png"
        techLogo="Salesforce.png"
        companyName="Lowes"
        projectName="Lowes ERP System"
        roleDetails="Senior Salesforce Developer"
        responsibilities="Working as a Senior Salesforce Developer. Responsible for working with Product Manager and team to handle the requirements and also participate in release activities and data management in production along with other team members. Also, give guidance to the fellow team members in the sprint work."
        techSkill="Lightning Web Components, Apex classes, Triggers, Territory Model, Flow builders."
        Achievements="Got appreciation from India's manager and also product Manager for good client demos as well as completing and managing work on time within the sprints."
      />
        <Salesforcecard
        companyLogo="ibm image.png"
        techLogo="Salesforce.png"
        companyName="IBM"
        projectName="IBM ERP System"
        roleDetails="Senior Salesforce Developer"
        responsibilities="Working as a Senior Salesforce Developer. Responsible for working with Product Manager and team to handle the requirements and also participate in release activities and data management in production along with other team members. Also, give guidance to the fellow team members in the sprint work."
        techSkill="Lightning Web Components, Apex classes, Triggers, Territory Model, Flow builders."
        Achievements="Got appreciation from India's manager and also product Manager for good client demos as well as completing and managing work on time within the sprints."
      />
    </div>
  );
}

export default App;

