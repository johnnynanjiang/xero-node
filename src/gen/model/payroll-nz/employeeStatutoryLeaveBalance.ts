/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.3.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class EmployeeStatutoryLeaveBalance {
    /**
    * The type of statutory leave
    */
    'leaveType'?: EmployeeStatutoryLeaveBalance.LeaveTypeEnum;
    /**
    * The balance remaining for the corresponding leave type as of specified date.
    */
    'balanceRemaining'?: number;
    /**
    * The units will be \"Hours\"
    */
    'units'?: EmployeeStatutoryLeaveBalance.UnitsEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaveType",
            "baseName": "leaveType",
            "type": "EmployeeStatutoryLeaveBalance.LeaveTypeEnum"
        },
        {
            "name": "balanceRemaining",
            "baseName": "balanceRemaining",
            "type": "number"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "EmployeeStatutoryLeaveBalance.UnitsEnum"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeStatutoryLeaveBalance.attributeTypeMap;
    }
}

export namespace EmployeeStatutoryLeaveBalance {
    export enum LeaveTypeEnum {
        Sick = <any> 'Sick',
        Adoption = <any> 'Adoption',
        Maternity = <any> 'Maternity',
        Paternity = <any> 'Paternity',
        Sharedparental = <any> 'Sharedparental'
    }
    export enum UnitsEnum {
        Hours = <any> 'Hours'
    }
}
