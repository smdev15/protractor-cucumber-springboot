package com.example.demo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.util.Scanner;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpRequest;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;
import org.springframework.web.client.RequestCallback;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.ResponseExtractor;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Component
public class CustomRestTemplate extends RestTemplate{
	
	public CustomRestTemplate() {
	}

	public CustomRestTemplate(ClientHttpRequestFactory httpRequestFactory) {
		super(httpRequestFactory);
	}

	boolean errorflag = false;
	String data = "";
	StringBuilder result = null;
	
	@Override
    public void handleResponse(URI url, HttpMethod method, ClientHttpResponse response) throws IOException{
		errorflag = false;
		ResponseErrorHandler errorHandler = getErrorHandler();
		boolean hasError = errorHandler.hasError(response);
		if (logger.isDebugEnabled()) {
			try {
				logger.debug(method.name() + " request for \"" + url + "\" resulted in " +
						response.getRawStatusCode() + " (" + response.getStatusText() + ")" +
						(hasError ? "; invoking error handler" : ""));
			}
			catch (IOException ex) {
			}
		}
		if (hasError) {
			errorflag = true;
			result = new StringBuilder();
		    String line = "";
		    BufferedReader rd = new BufferedReader(
		            new InputStreamReader(response.getBody()));
		    while ((line = rd.readLine()) != null) {
		        result.append(line);
		    }   
			Scanner scanner = new Scanner(result.toString());
			scanner.useDelimiter("\\Z");
	        
	        if (scanner.hasNext())
	            data = scanner.next();
	        System.out.println(data);
		}
	}
    	
	@SuppressWarnings("unchecked")
	@Override
	protected <T> T doExecute(URI url, HttpMethod method, RequestCallback requestCallback,
			ResponseExtractor<T> responseExtractor) throws RestClientException {

		Assert.notNull(url, "'url' must not be null");
		Assert.notNull(method, "'method' must not be null");
		ClientHttpResponse response = null;
		try {
			ClientHttpRequest request = createRequest(url, method);
			if (requestCallback != null) {
				requestCallback.doWithRequest(request);
			}
			response = request.execute();
			handleResponse(url, method, response);
			if (responseExtractor != null && !errorflag) {
				return responseExtractor.extractData(response);
			}
			else {
				return (T) new ResponseEntity<T>((T) result.toString(), response.getHeaders(), response.getStatusCode()) ;
			}
		}
		catch (IOException ex) {
			throw new ResourceAccessException("I/O error on " + method.name() +
					" request for \"" + url + "\": " + ex.getMessage(), ex);
		}
		finally {
			if (response != null) {
				response.close();
			}
		}
	}
}
