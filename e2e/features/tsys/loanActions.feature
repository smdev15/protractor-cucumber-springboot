@LoanActions

Feature: Loan Actions

Scenario Outline: User wants to open DPL loan actions for Branch Agent, Senior Branch Agent, Branch Manager
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Adjust Principal link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Change Interest Rate link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|1			|
	|2			|
	|12			|

Scenario Outline: User wants to open DPL loan actions for Greenwood Operations Agent
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|5			|

Scenario Outline: User wants to open DPL loan actions for Finance Agent
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Adjust Fee link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|9			|

Scenario Outline: User wants to open DPL loan actions for BEST Agent and BEST Lending
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Adjust Principal link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the SCRA Calculator link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Correct Payment link is displayed
	And the Dispute Payment link is displayed
	And the Issue Credit link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|13 		|
	|57 		|

Scenario Outline: User wants to open DPL loan actions for Security Agent
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Resolve Credit Bureau Dispute link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|10 		|

Scenario Outline: User wants to open DPL loan actions for Parameterization Non-Access
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|14			|

Scenario Outline: User wants to open DPL loan actions for User Access
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|15			|

Scenario Outline: User wants to open DPL loan actions for EOCA
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|17			|

Scenario Outline: User wants to open DPL loan actions for DPL Collection Agent, Collection Specialty Agent
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Pmt Sent To Incorrect Addr link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Issue Credit link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|21			|
	|22			|

Scenario Outline: User wants to open DPL loan actions for Collection Manager, Servicing Agent, CLBO Process Review Team
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Pmt Sent To Incorrect Addr link is displayed
	And the Change Interest Rate link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Issue Credit link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|19			|
	|29			|
	|31			|

Scenario Outline: User wants to open DPL loan actions for Recovery Agent, Recovery Specialty Agent, Recovery Manager
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Adjust Principal link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the SCRA Calculator link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Issue Credit link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|23 		|
	|24 		|
	|25			|

Scenario Outline: User wants to open DPL loan actions for In-house Recovery Agent, In House / Skip Manager
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|26 		|
	|28 		|

Scenario Outline: User wants to open DPL loan actions for Skip Tracing Agent
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|27 		|

Scenario Outline: User wants to open DPL loan actions for DPL Service Manager
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Pmt Sent To Incorrect Addr link is displayed
	And the Change Interest Rate link is displayed
	And the Adjust Fee link is displayed
	And the Correct Payment link is displayed
	And the Dispute Payment link is displayed
	And the Issue Credit link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|30			|

Scenario Outline: User wants to open DPL loan actions for Credit Bureau (ACDV) Agent
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Refer To Security link is displayed
	And the Resolve Credit Bureau Dispute link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|32			|

Scenario Outline: User wants to open DPL loan actions for DPL Inquiry, DPL Riverwoods Ops
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Payment Estimator link is displayed
	And the Credit Bureau Actions link is displayed
	And the Disbursements link is displayed
	And the Payoff Quote link is displayed
	And the Manage Documents link is displayed
	And the Adjust Fee link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|33 		|
	|34 		|

Scenario Outline: User wants to open DPL loan actions for UPC
	Given User opens loan actions page for loan <loan>
	|loan   |815107239176   |
	When LDAP group is <groupId>
	Then the Feedback and Complaints link is displayed
	And the Adjust Interest link is displayed
	And the Payment Estimator link is displayed
	And the Refer To Security link is displayed
	And the Generate Document link is displayed
	And the Manage Documents link is displayed
	And the Pmt Sent To Incorrect Addr link is displayed
	And the Dispute Payment link is displayed
	And the Payments link is displayed
	And the Refund Payments link is displayed
	And the Reallocate Payments link is displayed
  	Examples:
	|groupId	|
	|40 		|