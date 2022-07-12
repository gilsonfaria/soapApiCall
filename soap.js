const soapRequest = require('easy-soap-request');

const url = 'https://www.crcind.com:443/csp/samples/SOAP.Demo.cls';

//Using easy-soap-request to make the API calls
const fnMakeRequest = (oHeader, sEnvelop) => {
  soapRequest({
    url: url, headers: oHeader, xml: sEnvelop, proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 8000,
    }
  }).then((response) => {
    const { headers, body, statusCode } = response.response;
    console.log("\nSTATUS CODE: " + statusCode);
    console.log("\nRESPONSE BODY:\n" + body);
  }).catch((error) => {
    console.log("ERROR:" + error);
  });
};

const fnAddInteger = (arg1, arg2) => {

  console.log("=====================================\n" +
    "=============ADD INTEGER=============\n" +
    "=====================================\n");

  console.log("Arg1: " + arg1);
  console.log("Arg2: " + arg2);

  const oHeader = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://tempuri.org/SOAP.Demo.AddInteger',
  };
  const sEnvelope = `<env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:s="http://www.w3.org/2001/XMLSchema">
                <env:Body>
                    <AddInteger xmlns="http://tempuri.org">
                        <Arg1>${arg1}</Arg1>
                        <Arg2>${arg2}</Arg2>
                    </AddInteger>
                </env:Body>
              </env:Envelope>`;
  fnMakeRequest(oHeader, sEnvelope);
};

const fnDivideInteger = (arg1, arg2) => {

  console.log("=====================================\n" +
    "===========DIVIDE INTEGER============\n" +
    "=====================================\n");

  console.log("Arg1: " + arg1);
  console.log("Arg2: " + arg2);

  const oHeader = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://tempuri.org/SOAP.Demo.DivideInteger',
  };
  const sEnvelope = `<env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:s="http://www.w3.org/2001/XMLSchema">
                <env:Body>
                    <DivideInteger xmlns="http://tempuri.org">
                        <Arg1>${arg1}</Arg1>
                        <Arg2>${arg2}</Arg2>
                    </DivideInteger>
                </env:Body>
              </env:Envelope>`;
  fnMakeRequest(oHeader, sEnvelope);
};

const fnGetMission = () => {

  console.log("=====================================\n" +
    "=============GET MISSION=============\n" +
    "=====================================\n");

  const oHeader = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://tempuri.org/SOAP.Demo.Mission',
  };
  const sEnvelope = `<env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:s="http://www.w3.org/2001/XMLSchema">
                <env:Body>
                    <Mission xmlns="http://tempuri.org">
                    </Mission>
                </env:Body>
              </env:Envelope>`;
  fnMakeRequest(oHeader, sEnvelope);
};

const myArgs = process.argv.slice(2);
console.log(myArgs);
switch (myArgs[0]) {
  case 'add':
    fnAddInteger(myArgs[1], myArgs[2]);
    break;
  case 'divide':
    fnDivideInteger(myArgs[1], myArgs[2]);
    break;
  case 'getMission':
    fnGetMission();
    break;
  default:
    console.log('Sorry, that is not something I know how to do.');
}
