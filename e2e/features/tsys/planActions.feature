@PlanActions

Feature: Plan Actions

Scenario Outline: User wants to open plan actions for Trad IRA when customer not deceased
	Given User opens plan actions page for customer <cif> plan <plan>
	|plan   |TR004078   |
	|cif    |0000269855 |
	When LDAP group is <groupId>
	And customer is not deceased
	Then the Maintain IRA beneficiary link is displayed
	And the Receive Plan Documents link is displayed
	And the Update RMD tables link is displayed
	And the Manage Documents link is displayed
	And the Contribution/ Distribution link is displayed
	And the Manage Mis. Transactions link is displayed
	And the Generate Documents link is displayed
  	Examples:
	|groupId	|
	|6			|
	|7			|
	|11			|

Scenario Outline: User wants to open plan actions for Roth IRA when customer not deceased
	Given User opens plan actions page for customer <cif> plan <plan>
	|plan   |RT000228   |
	|cif    |0000042769 |
	When LDAP group is <groupId>
	And customer is not deceased
	Then the Maintain IRA beneficiary link is displayed
	And the Receive Plan Documents link is displayed
	And the Update RMD tables link is displayed
	And the Manage Documents link is displayed
	And the Contribution/ Distribution link is displayed
	And the Manage Mis. Transactions link is displayed
	And the Generate Documents link is displayed
  	Examples:
	|groupId	|
	|6			|
	|7			|
	|11			|

Scenario Outline: User wants to open plan actions for Trad IRA when customer is deceased
	Given User opens plan actions page for customer <cif> plan <plan>
	|plan   |TR041700   |
	|cif    |0001682059 |
	When LDAP group is <groupId>
	And customer is deceased
	Then the Maintain IRA beneficiary link is displayed
	And the Receive Plan Documents link is displayed
	And the Update RMD tables link is displayed
	And the Manage Documents link is displayed
	And the Contribution/ Distribution link is displayed
	And the Manage Mis. Transactions link is displayed
	And the Generate Documents link is displayed
	And the Distribute Beneficiary Funds link is displayed
  	Examples:
	|groupId	|
	|6			|
	|7			|
	|11			|

Scenario Outline: User wants to open plan actions for Roth IRA when customer is deceased
	Given User opens plan actions page for customer <cif> plan <plan>
	|plan   |RT013906   |
	|cif    |0001163875 |
	When LDAP group is <groupId>
	And customer is deceased
	Then the Maintain IRA beneficiary link is displayed
	And the Receive Plan Documents link is displayed
	And the Update RMD tables link is displayed
	And the Manage Documents link is displayed
	And the Contribution/ Distribution link is displayed
	And the Manage Mis. Transactions link is displayed
	And the Generate Documents link is displayed
	And the Distribute Beneficiary Funds link is displayed
  	Examples:
	|groupId	|
	|6			|
	|7			|
	|11			|

Scenario Outline: User wants to open plan actions for Inherited Trad IRA
	Given User opens plan actions page for customer <cif> plan <plan>
	|plan   |TR024449   |
	|cif    |0000918677 |
	When LDAP group is <groupId>
	And the customer deceased flag is <deceased>
	Then the Inherited IRA Maintenance link is displayed
  	Examples:
	|groupId	|deceased	|
	|6			|Y			|
	|6			|N			|
	|7			|Y			|
	|7			|N			|
	|11			|Y			|
	|11			|N			|

Scenario Outline: User wants to open plan actions for Inherited Roth IRA
	Given User opens plan actions page for customer <cif> plan <plan>
	|plan   |RT002844   |
	|cif    |0000397476 |
	When LDAP group is <groupId>
	And the customer deceased flag is <deceased>
	Then the Inherited IRA Maintenance link is displayed
  	Examples:
	|groupId	|deceased	|
	|6			|Y			|
	|6			|N			|
	|7			|Y			|
	|7			|N			|
	|11			|Y			|
	|11			|N			|
	