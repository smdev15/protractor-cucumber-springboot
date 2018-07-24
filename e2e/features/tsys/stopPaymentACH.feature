@StopPaymentACH

Feature: Stop ACH Payment

Scenario: User wants to request stop ACH Payment 
	Given User enters the landing page by clicking the Stop Payment ACH Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the Request tab is displayed
	Then the Review tab is disabled 
	And the Debit radio button is selected
	And the waive fee check box is unselected
	And the Reason Drop Down Box says Select
	And the Continue button is disabled

Scenario Outline: User wants to review stop ACH request before submission 
	Given User enters the landing page by clicking the Stop Payment ACH Link for customer <cif> account <account>
	|account    |304863		|
	|cif	    |0000501286 |
	When the <PaymentMethod> radio button is selected
	And User enters <originationID> as Origination ID 
	And User enters <originator> as Name Of Originator 
	And User enters <amount1> to <amount2> as Amount Range 
	And User selects <reason> from Reason drop down 
	And User enters <reasontext> in Other Reason field if required for <reason>
	And the Continue button is enabled
	And User clicks on Continue button
	Then Review tab is displayed
	And <originator> is displayed as Name Of Originator
	And <originationID> is displayed as Origination ID 
	And <amount1> and <amount2> are displayed as Amount Range
	And <reason> or <reasontext> is displayed as Reason
	And <PaymentMethod> is displayed as Debit or Credit
	And $15.00 is displayed as Fee
  	Examples:
	|PaymentMethod	|originationID	|originator     |amount1|amount2|reason						|reasontext					|
	|Credit			|12345			|Chase Bank		|20		|35		|ACH Authorization Revoked	|Some Other Reason for test |
	|Credit			|12345			|Chase Bank		|20		|35		|ACH Onetime Stop			|Some Other Reason for test |
	|Credit			|12345			|Chase Bank		|20		|35		|ACH Not Authorized			|Some Other Reason for test |
	|Credit			|12345			|Chase Bank		|20		|35		|Other						|Some Other Reason for test	|
	|Debit			|12345			|Chase Bank		|20		|35		|Other						|Some Other Reason for test	|
	|Debit			|12345			|Chase Bank		|20		|35		|ACH Authorization Revoked	|Some Other Reason for test |
	|Debit			|12345			|Chase Bank		|20		|35		|ACH Onetime Stop			|Some Other Reason for test |
	|Debit			|12345			|Chase Bank		|20		|35		|ACH Not Authorized			|Some Other Reason for test |

