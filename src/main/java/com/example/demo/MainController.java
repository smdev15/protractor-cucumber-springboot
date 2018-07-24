package com.example.demo;

import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.dfs.bank.common.vo.AccountResponseVO;
import com.dfs.bank.common.vo.AccountVO;
import com.dfs.bank.common.vo.BaseLoanVO;
import com.dfs.bank.common.vo.CustomerInfoResponseVO;
import com.dfs.bank.common.vo.CustomerVO;
import com.dfs.bank.common.vo.LoanAccountVO;
import com.dfs.bank.common.vo.PlanDetailsVO;

@RestController
public class MainController {
	@Autowired
	protected RestTemplate restTemplate;

	@Autowired
	protected ApplicationContext appContext;

	@Value("${rest.pcf.atlas.endpoint}")
	protected String REST_ENDPOINT;

	@Value("${rest.pcf.links.endpoint}")
	protected String LINKS_REST_ENDPOINT;

	@RequestMapping(value = "/hello", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String hello() throws Exception {

		return "hello";
	}

	protected HttpEntity<String> createAtlasRequest(String reqXML, String credential) {
		// System.out.println("AtlasRequest :: " + reqXML);

		HttpHeaders headers = new HttpHeaders();
		List<MediaType> acceptableMedia = new ArrayList<MediaType>();
		acceptableMedia.add(MediaType.ALL);
		headers.setAccept(acceptableMedia);
		headers.setContentType(MediaType.APPLICATION_XML);
		headers.setCacheControl("no-cache");

		byte[] base64CredsBytes = Base64Utils.encode(credential.getBytes());
		headers.add("Authorization", "Basic " + new String(base64CredsBytes));

		HttpEntity<String> request = new HttpEntity<String>(reqXML, headers);
		return request;
	}

	protected JAXBContext getJAXBContext(Class<?> fiXml) throws JAXBException {

		Map<String, JAXBContext> jaxbContextMap = new HashMap<String, JAXBContext>();
		String jaxbContextKey = fiXml.getCanonicalName();
		if (null == jaxbContextMap.get(jaxbContextKey)) {
			jaxbContextMap.put(jaxbContextKey, JAXBContext.newInstance(fiXml));
			return (JAXBContext) jaxbContextMap.get(jaxbContextKey);
		} else {
			return (JAXBContext) jaxbContextMap.get(jaxbContextKey);
		}
	}

	protected <T> Object unmarshalObject(String xml, Class<T> className) {
		// Unmarshall XML into Object.
		Object object = null;
		try {
			Unmarshaller unmarshaller = getJAXBContext(className).createUnmarshaller();
			StringReader reader = new StringReader(xml);
			object = unmarshaller.unmarshal(reader);
		} catch (Exception exception) {
		}

		return object == null ? null : object;
	}

	@RequestMapping(value = "/getCustomer/{cif}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public CustomerVO searchCustomer(@PathVariable("cif") String cif) throws Exception {

		CustomerVO custVO = getCustomerInfo(cif);

		return custVO;
	}

	@RequestMapping(value = "/getAcctSummary/{acct}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public AccountVO retrieveAccount(@PathVariable("acct") String acct) throws Exception {

		AccountVO acctVO = getAcctSummary(acct);

		return acctVO;
	}

	@RequestMapping(value = "/getLoanSummary/{loan}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public BaseLoanVO retrieveLoan(@PathVariable("loan") String acct) throws Exception {

		BaseLoanVO loanVO = getLoanSummary(acct);

		return loanVO;
	}

	@RequestMapping(value = "/getPlan/{plan}/{cif}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public PlanDetailsVO retrievePlan(@PathVariable("plan") String plan, @PathVariable("cif") String cif) throws Exception {

		PlanDetailsVO planVO = getPlan(cif, plan);

		return planVO;
	}

	private CustomerVO getCustomerInfo(String cif) throws IOException {
		String postURL = REST_ENDPOINT + "/BankSvcgCustomerInfo/resources/bank_customer/getCutomerInfo";

		String reqXML = "<customerInfoRequestVO><customerVO><cifNumber>" + cif + "</cifNumber>"
				+ "</customerVO><stubEnabled>false</stubEnabled></customerInfoRequestVO>";

		System.out.println("Requesting ----> " + reqXML);

		HttpEntity<String> request = createAtlasRequest(reqXML, "userid:password");

		ResponseEntity<String> response= restTemplate.postForEntity(postURL, request, String.class);

		CustomerVO customerVO = null;
		CustomerInfoResponseVO customerInfoResponseVO = new CustomerInfoResponseVO();
		if (response != null && response.getBody() != null) {
			System.out.println("Obtained response ====> " + response.getBody());

			customerInfoResponseVO = (CustomerInfoResponseVO) unmarshalObject(response.getBody(), CustomerInfoResponseVO.class);
			customerVO = customerInfoResponseVO.getCustomerVO();
		}

		return customerVO;

	}

	private AccountVO getAcctSummary(String acct) throws IOException {
		String postURL = REST_ENDPOINT + "/BankSvcgAccountInfo/resources/bank_account/accountoverview/accountoverview";

		String reqXML = "<accountRequestVO><accountArray><accountNumber>" + acct
				+ "</accountNumber></accountArray><stubEnabled>false</stubEnabled></accountRequestVO>";

		System.out.println("Requesting ----> " + reqXML);

		HttpEntity<String> request = createAtlasRequest(reqXML, "userid:password");

		ResponseEntity<String> response= restTemplate.postForEntity(postURL, request, String.class);

		AccountVO accountVO = null;
		AccountResponseVO accountResponseVO = new AccountResponseVO();
		if (response != null && response.getBody() != null) {
			System.out.println("Obtained response ====> " + response.getBody());

			accountResponseVO = (AccountResponseVO) unmarshalObject(response.getBody(), AccountResponseVO.class);
			accountVO = accountResponseVO.getAccountArray()[0];
		}

		return accountVO;

	}

	private PlanDetailsVO getPlan(String cif, String plan) throws IOException {
		String postURL = REST_ENDPOINT + "/BankSvcgAccountInfo/resources/bank_account/accountoverview/accountoverview";

		String reqXML = "<accountRequestVO><cifNumber>" + cif + "</cifNumber><accountArray><planDetailsVO><planId>" + plan
				+ "</planId></planDetailsVO></accountArray><stubEnabled>false</stubEnabled></accountRequestVO>";

		System.out.println("Requesting ----> " + reqXML);

		HttpEntity<String> request = createAtlasRequest(reqXML, "userid:password");

		ResponseEntity<String> response= restTemplate.postForEntity(postURL, request, String.class);

		PlanDetailsVO planDetailsVO = null;
		AccountResponseVO accountResponseVO = new AccountResponseVO();
		if (response != null && response.getBody() != null) {
			System.out.println("Obtained response ====> " + response.getBody());

			accountResponseVO = (AccountResponseVO) unmarshalObject(response.getBody(), AccountResponseVO.class);
			planDetailsVO = accountResponseVO.getPlanDetailsVOArray()[0];
		}

		return planDetailsVO;

	}

	private BaseLoanVO getLoanSummary(String loan) throws IOException {
		String postURL = REST_ENDPOINT + "/BankSvcgDSLAcctInfo/resources/bank_account/loanAccountDetails";

		String reqXML = "<accountRequestVO><acctNumber>" + loan
				+ "</acctNumber><agentDetailsVO><agentUserId>WSENG01_AL1</agentUserId><loginSessionId/>"
				+ "<userId>WSENG01</userId></agentDetailsVO><requestId>test</requestId><channelId>BR</channelId>"
				+ "<lineOfBusiness>DPL</lineOfBusiness><bankProductCategoryCode>LAA</bankProductCategoryCode>"
				+ "<stubEnabled>false</stubEnabled></accountRequestVO>";

		System.out.println("Requesting ----> " + reqXML);

		HttpEntity<String> request = createAtlasRequest(reqXML, "userid:password");

		ResponseEntity<String> response= restTemplate.postForEntity(postURL, request, String.class);

		BaseLoanVO loanVO = null;
		AccountResponseVO accountResponseVO = new AccountResponseVO();
		if (response != null && response.getBody() != null) {
			System.out.println("Obtained response ====> " + response.getBody());

			accountResponseVO = (AccountResponseVO) unmarshalObject(response.getBody(), AccountResponseVO.class);
			
			if(accountResponseVO.getLoanAccountVO() != null) {
				loanVO = accountResponseVO.getLoanAccountVO();
			} else if(accountResponseVO.getStudentLoanAccountVO() != null) { 
				loanVO = accountResponseVO.getStudentLoanAccountVO();
			}
		}

		return loanVO;

	}
}
