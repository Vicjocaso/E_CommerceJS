const soapRequest = require("easy-soap-request");
const builder = require("xmlbuilder");

const soapForm = (req, res) => {
  const data = req.body;
  console.log(data);
  console.log(data.cardNumber);
  console.log(data.cardNumber);

  const url =
    "https://ics2wstesta.ic3.com:443/commerce/1.x/transactionProcessor";
  try {
    const xml = builder
      .create("soapenv:Envelope")
      .att("xmlns:soapenv", "http://schemas.xmlsoap.org/soap/envelope/")
      .ele("soapenv:Header")
      .ele("wsse:Security", { "soapenv:mustUnderstand": "1" })
      .att(
        "xmlns:wsse",
        "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
      )
      .ele("wsse:UsernameToken")
      .ele("wsse:Username")
      .txt("visanetdr_000000433796001")
      .up()
      .ele("wsse:Password", {
        Type: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText",
      })
      .txt(
        "HD/qAz39NoitzfDKwrHW8Im/m1hPG3mloAzXzmPCZotvhH+ys1UEyGzpOyuwgfUFYeC39GmR27iF8k+UQYwDuQtS/iZlZ343NyKYZwKYSPOQxvlru/EGw3SfXRlIHQIKT88P/BPoVPEqulFCrI+YnFpyRaht5KIGbHpl4qzYTXP0WLFfNj1l+HXAU7FTnKCboACP74hRuerq/ojFmFXjnI9b6TwK8I6r3CtTfgzpPQEqWm89NMKjTaw7srfi2w/Dovk11qPmf7QvMM2LXpL/M1vQir/uHy2hXwdw838OrRLES5e2Tx2Y22/zXFhyiNrzCH+A+Uln/ez3QTnOiYFDzQ=="
      )
      .up()
      .up()
      .up()
      .up()
      .ele("soapenv:Body")
      .ele("requestMessage", {
        xmlns: "urn:schemas-cybersource-com:transaction-data-1.181",
      })
      .ele("merchantID")
      .txt("visanetdr_000000433796001")
      .up()
      .ele("merchantReferenceCode")
      .txt("MRC-123")
      .up()
      .ele("billTo")
      .ele("firstName")
      .txt(data.name)
      .up()
      .ele("lastName")
      .txt("Doe")
      .up()
      .ele("street1")
      .txt("1295 Charleston Road")
      .up()
      .ele("city")
      .txt("Mountain View")
      .up()
      .ele("state")
      .txt("CA")
      .up()
      .ele("postalCode")
      .txt("94043")
      .up()
      .ele("country")
      .txt("US")
      .up()
      .ele("email")
      .txt("null@cybersource.com")
      .up()
      .ele("ipAddress")
      .txt("127.0.0.1")
      .up()

      .up()
      .ele("item", { id: "0" })
      .ele("unitPrice")
      .txt("5.00")
      .up()
      .ele("quantity")
      .txt("1")
      .up()
      .ele("productName")
      .txt("TEST1")
      .up()

      .up()
      .ele("item", { id: "1" })
      .ele("unitPrice")
      .txt("200.00")
      .up()
      .ele("quantity")
      .txt("2")
      .up()
      .ele("productName")
      .txt("TEST2")
      .up()

      .up()
      .ele("purchaseTotals")
      .ele("currency")
      .txt("DOP")
      .up()
      .ele("grandTotalAmount")
      .txt("205.00")
      .up()

      .up()
      .ele("card")
      .ele("accountNumber")
      .txt(data.cardNumber)
      .up()
      .ele("expirationMonth")
      .txt("11")
      .up()
      .ele("expirationYear")
      .txt("2022")
      .up()
      .ele("cvNumber")
      .txt("123")
      .up()

      .up()
      .ele("merchantDefinedData")
      .ele("mddField", { id: "1" })
      .txt("RETAIL")
      .up()
      .ele("mddField", { id: "2" })
      .txt("visanetdr_000000433796001")
      .up()
      .ele("mddField", { id: "3" })
      .txt("WEB")
      .up()
      .ele("mddField", { id: "4" })
      .txt("aminaya")
      .up()
      .ele("mddField", { id: "27" })
      .txt("TOKENIZATION YES")
      .up()
      .ele("mddField", { id: "29" })
      .txt("CEDULA")
      .up()
      .ele("mddField", { id: "30" })
      .txt("123-1234567-8")
      .up()

      .up()
      .ele("ccAuthService", { run: "true" })
      .up()
      .ele("ccCaptureService", { run: "true" })
      .up()
      .ele("deviceFingerprintID")
      .txt("12")
      .up()
      .up()

      .end({ pretty: true });

    // usage of module
    (async () => {
      const { response } = await soapRequest({
        url: url,

        xml: xml,
      });
      const { headers, body, statusCode } = response;
      console.log(headers);
      console.log(body);
      console.log(statusCode);
    })().catch((error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = soapForm;
