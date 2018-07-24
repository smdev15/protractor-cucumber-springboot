@StopCheckPayment

Feature: Stop Check Payment
Scenario: User wants to request stop Check Payment 
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Request tab is displayed
	Then the Review tab is disabled 
	And the Check Number radio button has been selected
	And the Check Range Text boxes are disabled
	And the waive fee check box is unselected
	And the Reason Drop Down Box says Select
	And the Continue button is disabled	
	
Scenario Outline: User wants to review stop Check request before submission by providing Check Number
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Number radio button has been selected
	And User enters <CheckNumber> as Check Number 
	And User enters <Payee> as Payee 
	And User enters <amount> as Amount
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And the Continue button is enabled
	And User clicks on Continue button
	Then Review tab is displayed
	And <Payee> is Displayed as Payee 
	And <amount> is displayed as Amount
	And <reason> or <reasontext> is displayed as Reason
	And fee is displayed as $15.00
  	Examples:
	|CheckNumber	|Payee		|amount |reason		|reasontext					|
	|1156			|John Doe	|20		|Lost		|Some Other Reason for test	|
	|1156			|John Doe	|20		|Stolen		|Some Other Reason for test	|
	|1156			|John Doe	|20		|Post Dated	|Some Other Reason for test	|
	|1156			|John Doe	|20		|Other		|Some Other Reason for test	|

Scenario Outline: User wants to review stop Check request before submission by providing Check Range
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Range radio button has been selected
	And User enters <CheckNumberFrom> as Check Number From and <CheckNumberTo> as Check Number To
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And the Continue button is enabled
	And User clicks on Continue button
	Then Review tab is displayed
	And <CheckNumberFrom> to <CheckNumberTo> is displayed as Check Range 
	And <reason> or <reasontext> is displayed as Reason
	And fee is displayed as $15.00
  	Examples:
	|CheckNumberFrom	|CheckNumberTo	|reason		|reasontext					|
	|1156				|2156			|Lost		|Some Other Reason for test	|
	|1156				|2156			|Stolen		|Some Other Reason for test	|
	|1156				|2156			|Post Dated	|Some Other Reason for test	|
	|1156				|2156			|Other		|Some Other Reason for test	|

Scenario Outline: User wants to review stop Check request before submission by providing Check Number and by Waiving Full Fee
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Number radio button has been selected
	And User enters <CheckNumber> as Check Number 
	And User enters <Payee> as Payee 
	And User enters <amount> as Amount
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And User checks the Waive Full Fee Check Box
	And the Continue button is enabled
	And User checks the Waive Full Fee Check Box
	And User clicks on Continue button
	Then Review tab is displayed
	And <Payee> is Displayed as Payee 
	And <amount> is displayed as Amount
	And <reason> or <reasontext> is displayed as Reason
	And fee is displayed as $0.00
  	Examples:
	|CheckNumber	|Payee		|amount |reason		|reasontext					|
	|1156			|John Doe	|20		|Lost		|Some Other Reason for test |
	|1156			|John Doe	|20		|Stolen		|Some Other Reason for test	|
	|1156			|John Doe	|20		|Post Dated	|Some Other Reason for test	|
	|1156			|John Doe	|20		|Other		|Some Other Reason for test	|

Scenario Outline: User wants to review stop Check request before submission by providing Check Range and by Waiving Full Fee
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Range radio button has been selected
	And User enters <CheckNumberFrom> as Check Number From and <CheckNumberTo> as Check Number To
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And the Continue button is enabled
	And User checks the Waive Full Fee Check Box
	And User clicks on Continue button
	Then Review tab is displayed
	And <CheckNumberFrom> to <CheckNumberTo> is displayed as Check Range 
	And <reason> or <reasontext> is displayed as Reason
	And fee is displayed as $0.00
  	Examples:
	|CheckNumberFrom	|CheckNumberTo	|reason		|reasontext					|
	|1156				|2156			|Lost		|Some Other Reason for test	|
	|1156				|2156			|Stolen		|Some Other Reason for test	|
	|1156				|2156			|Post Dated	|Some Other Reason for test	|
	|1156				|2156			|Other		|Some Other Reason for test	|

Scenario Outline: User wants to submit stop Check request by providing Check Number
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Number radio button has been selected
	And User enters <CheckNumber> as Check Number 
	And User enters <Payee> as Payee 
	And User enters <amount> as Amount
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And the Continue button is enabled
	And User clicks on Continue button
	And Review tab is displayed
	And User clicks on Submit button
	Then stop Check request is submitted successfully
  	Examples:
	|CheckNumber	|Payee		|amount |reason		|reasontext					|
	|1156			|John Doe	|20		|Lost		|Some Other Reason for test	|
	|1156			|John Doe	|20		|Stolen		|Some Other Reason for test	|
	|1156			|John Doe	|20		|Post Dated	|Some Other Reason for test	|
	|1156			|John Doe	|20		|Other		|Some Other Reason for test	|

Scenario Outline: User wants to Submit stop Check request By providing Check Range
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Range radio button has been selected
	And User enters <CheckNumberFrom> as Check Number From and <CheckNumberTo> as Check Number To
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And the Continue button is enabled
	And User clicks on Continue button
	And Review tab is displayed
	And User clicks on Submit button
	Then stop Check request is submitted successfully
  	Examples:
	|CheckNumberFrom	|CheckNumberTo	|reason		|reasontext					|
	|1156				|2156			|Lost		|Some Other Reason for test	|
	|1156				|2156			|Stolen		|Some Other Reason for test	|
	|1156				|2156			|Post Dated	|Some Other Reason for test	|
	|1156				|2156			|Other		|Some Other Reason for test	|	

Scenario Outline: User wants to Submit  stop Check request by providing Check Number and by Waiving Full Fee
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Number radio button has been selected
	And User enters <CheckNumber> as Check Number 
	And User enters <Payee> as Payee 
	And User enters <amount> as Amount
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And User checks the Waive Full Fee Check Box
	And the Continue button is enabled
	And User checks the Waive Full Fee Check Box
	And User clicks on Continue button
	And Review tab is displayed
	And User clicks on Submit button
	Then stop Check request is submitted successfully
  	Examples:
	|CheckNumber	|Payee		|amount |reason		|reasontext					|
	|1156			|John Doe	|20		|Lost		|Some Other Reason for test	|
	|1156			|John Doe	|20		|Stolen		|Some Other Reason for test	|
	|1156			|John Doe	|20		|Post Dated	|Some Other Reason for test	|
	|1156			|John Doe	|20		|Other		|Some Other Reason for test	|

Scenario Outline: User wants to Submit stop Check request by providing Check Range and by Waiving Full Fee
	Given User enters the landing page by clicking the Stop Check Payment Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Check Range radio button has been selected
	And User enters <CheckNumberFrom> as Check Number From and <CheckNumberTo> as Check Number To
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And the Continue button is enabled
	And User checks the Waive Full Fee Check Box
	And User clicks on Continue button
	And Review tab is displayed
	And User clicks on Submit button
	Then stop Check request is submitted successfully
  	Examples:
	|CheckNumberFrom	|CheckNumberTo	|reason		|reasontext					|
	|1156				|2156			|Lost		|Some Other Reason for test	|
	|1156				|2156			|Stolen		|Some Other Reason for test	|
	|1156				|2156			|Post Dated	|Some Other Reason for test	|
	|1156				|2156			|Other		|Some Other Reason for test	|

	