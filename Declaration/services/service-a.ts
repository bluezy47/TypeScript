
let ServiceName: string = "Service A";

// Type of ways we can define the function in TypeScript...

// 01
const sayMyNameV1 = (name: string): string | boolean => {
    if (name == "Tommy")
        return true;
    return name;
}
//
// 02
function sayMyNameV2(name: string): string | boolean {
    if (name == "Tommy")
        return true;
    return name;
}
//
// 03
let sayMyNameV3: (name: string) => string | boolean;
sayMyNameV3 = sayMyNameV1;

//
let printEmails = (): void => {
    console.log("Emails: ", employeesEmails);
}

export default {
    getServiceName(): string {
        return ServiceName;
    }
}